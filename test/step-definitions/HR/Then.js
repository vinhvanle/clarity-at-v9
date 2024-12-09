import { Then } from "@wdio/cucumber-framework";
import employeeDetailPage from "../../page-objects/employeeDetailPage/employeeDetail.page";
import actionPaneComp from "../../components/ActionPane/actionPane.comp";
import dashboardPage from "../../page-objects/dashboardPage/dashboard.page";
import HRTestData from "../../../data/HR.json" assert { type: "json" };
import reporter from "../../helper/reporter";
import navigationBarComp from "../../components/NavigationBar/navigationBar.comp";
import employeesListPage from "../../page-objects/employeesListPage/employeesList.page";
import findFieldByLabel from "../../helper/findFieldByLabel";

Then(/^I should see system dashboard title$/, async function () {
  reporter.addStep(
    this.testID,
    "info",
    `Starting to check system dashboard title`
  );

  try {
    const title = await browser.getTitle();
    // await expect(title).toContain("Dashboard");
  } catch (err) {
    err.message = `Failed to check system dashboard title. ${err.message}`;
    throw err;
  }
});

Then(
  /^I can see a success message displayed in Navigation Bar$/,
  async function () {
    reporter.addStep(
      this.testID,
      "info",
      `Starting to check success message displayed in Navigation Bar`
    );

    try {
      // await browser.debug();
      const isOK = await navigationBarComp.checkNotification(this.requestID);
      if (!isOK) {
        throw new Error("Journal posting failed");
      }
    } catch (err) {
      err.message = `Failed to check success message displayed in Navigation Bar. ${err.message}`;
      throw err;
    }
  }
);

Then(
  /^I should see correct (unique )?data for (.*) field$/,
  async function (isUnique, label) {
    reporter.addStep(
      this.testID,
      "info",
      `Starting to check correct data for ${label} field`
    );
    if (!label) {
      throw new Error("No field name provided");
    }
    try {
      let data = this.executionDetails[label];
      const inputField = await findFieldByLabel.findInputByLabel(label);
      let value = await inputField.getAttribute("data-dyn-qtip-title");
      if (value) {
        await expect(value).toContain(data);
      } else {
        value = await inputField.getAttribute("title");
        await expect(value).toContain(data);
      }
    } catch (error) {
      error.message = `Failed to check correct data for ${label} field. ${error.message}`;
      throw error;
    }
  }
);
