import { When, setDefaultTimeout } from "@wdio/cucumber-framework";

import paneNavigationComp from "../../components/PaneNavigation/paneNavigation.comp";
import navigationBarComp from "../../components/NavigationBar/navigationBar.comp";
import actionPaneComp from "../../components/ActionPane/actionPane.comp";
import personnelManagementPage from "../../page-objects/personelManagementPage/personelManagement.page";
import employeesListPage from "../../page-objects/employeesListPage/employeesList.page";
import employeeDetailPage from "../../page-objects/employeeDetailPage/employeeDetail.page";
import employeeSelfServicePage from "../../page-objects/employeeSelfServicePage/employeeSelfService.page";
import recordDetailPage from "../../page-objects/recordDetailPage/recordDetail.page";
import HRTestData from "../../../data/HR.json" assert { type: "json" };
import stringManipulation from "../../helper/stringManipulation";
import reporter from "../../helper/reporter";
import randomDateGenerator from "../../helper/randomDateGenerator";
import findFieldByLabel from "../../helper/findFieldByLabel";
import listFilter from "../../components/ListFilter/listFilter";
import generateRandomId from "../../helper/randomIdGenerator";

When(
  /^I navigate to "(.*)" (page|workspace) in "(.*)" module$/,
  async function (pageName, workspace, moduleName) {
    if (!pageName || !workspace || !moduleName) {
      throw new Error(
        `No page name: ${pageName} or workspace: ${workspace} or module name: ${moduleName} provided`
      );
    }

    reporter.addStep(
      this.testID,
      "info",
      `Starting to navigate to ${pageName} ${workspace} in ${moduleName} module`
    );

    try {
      if (workspace === "workspace") {
        await paneNavigationComp.navigatetoWorkspaces(moduleName, pageName);
      } else {
        await paneNavigationComp.navigateToModule(moduleName, pageName);
      }
    } catch (err) {
      err.message = `Failed to navigate to ${pageName} ${workspace} in ${moduleName} module. ${err.message}`;
      throw err;
    }
  }
);

When(/^I search for "(.*)" in navigation search$/, async function (pageName) {
  if (!pageName) {
    throw new Error(`No page name: ${pageName} provided`);
  }
  reporter.addStep(
    this.testID,
    "info",
    `Starting to search for ${pageName} in navigation search`
  );

  try {
    await navigationBarComp.searchForPage(pageName);
  } catch (err) {
    err.message = `Failed to search for ${pageName} in navigation search. ${err.message}`;
    throw err;
  }
});

When(/^I open an employee record in (read|edit) mode$/, async function (mode) {
  if (!mode) {
    throw new Error(`No mode: ${mode} provided`);
  }
  reporter.addStep(
    this.testID,
    "info",
    `Starting to open an employee record in ${mode} mode`
  );

  try {
    if (mode === "edit") {
      await actionPaneComp.clickEditButton();
    }
    await employeesListPage.filterForRecordByColumnName(
      HRTestData[`${this.testID}`]["employeeName"],
      "Name"
    );
    await employeesListPage.openFirstRecord();
    const pageTitleField = await employeeDetailPage.pageTitleField.getText();
    await expect(pageTitleField).toContain(
      HRTestData[`${this.testID}`]["employeeName"]
    );
  } catch (err) {
    err.message = `Failed to open an employee record in ${mode} mode. ${err.message}`;
    throw err;
  }
});

When(/^I click employee tile$/, async function () {
  reporter.addStep(this.testID, "info", `Starting to click employee tile`);

  try {
    await personnelManagementPage.clickEmployeeTile();
    await browser.waitUntil(
      async () => {
        return (await browser.getUrl()).includes("Employees");
      },
      { timeout: 30000, interval: 500 }
    );
  } catch (err) {
    err.message = `Failed to click employee tile. ${err.message}`;
    throw err;
  }
});

When(/^I go to (.*) tab$/, async function (tabName) {
  if (!tabName) {
    throw new Error(`No tab name: ${tabName} provided`);
  }
  reporter.addStep(this.testID, "info", `Starting to go to ${tabName} tab`);

  try {
    const tabElement = await employeeSelfServicePage.getTabElementByName(
      tabName
    );
    await tabElement.click();

    const isSelected = await tabElement.getAttribute("aria-selected");

    // await expect(isSelected).toBe(true);
  } catch (err) {
    err.message = `Failed to go to ${tabName} tab. ${err.message}`;
    throw err;
  }
});

When(/^I click New leave request$/, async function () {
  reporter.addStep(this.testID, "info", `Starting to click New leave request`);

  try {
    await employeeSelfServicePage.newLeaveRequestBtn.click();
    await expect(
      await employeeSelfServicePage.newLeaveRequestQuickCreateHeading
    ).toBeDisplayed();

    const requestID = await employeeSelfServicePage.requestID.getAttribute(
      "title"
    );

    this.requestID = requestID;
  } catch (err) {
    err.message = `Failed to click New leave request. ${err.message}`;
    throw err;
  }
});
When(
  /^I input (valid|invalid) date for (Start date|End date) field(?: offset by (\d+) day)?$/,
  async function (validity, fieldName, offset) {
    if (!validity || !fieldName) {
      throw new Error(
        `No validity: ${validity}, or field name: ${fieldName} provided`
      );
    }

    reporter.addStep(
      this.testID,
      "info",
      `Starting to input ${validity} date for ${fieldName} field`
    );

    try {
      const currentYear = new Date().getFullYear();
      console.log(`current year: ${currentYear}`);
      const currentMonth = new Date().getMonth() + 1;
      console.log(`current month: ${currentMonth}`);

      fieldName = stringManipulation.capitalizeFirstLetters(fieldName);
      fieldName = stringManipulation.removeSpaces(fieldName);
      const field = await employeeSelfServicePage.getInputfieldElementByName(
        fieldName
      );

      if (fieldName === "StartDate") {
        if (validity === "valid") {
          const fieldData = randomDateGenerator.getRandomDate({
            year: currentYear,
            month: currentMonth,
          });
          this.temp.startDate = fieldData;
          await field.setValue(fieldData);
          console.log(`start date: ${fieldData}`);
        } else {
          await field.setValue("Invalid Date");
        }
      } else if (fieldName === "EndDate") {
        if (validity === "valid") {
          const fieldData = randomDateGenerator.getDateByStringWithOffset(
            this.temp.startDate,
            parseInt(offset)
          );
          await field.setValue(fieldData);
          console.log(`end date: ${fieldData}`);
        } else {
          await field.setValue("Invalid Date");
        }
      }
    } catch (err) {
      err.message = `Failed to input ${validity} date for ${fieldName} field. ${err.message}`;
      throw err;
    }
  }
);

When(
  /^I input (valid|invalid) data for (.*) field$/,
  async function (validity, fieldName) {
    if (!fieldName || !validity) {
      throw new Error(
        `No validity: ${validity}, or field name: ${fieldName} provided`
      );
    }
    reporter.addStep(
      this.testID,
      "info",
      `Starting to input ${validity} data for ${fieldName} field`
    );

    try {
      fieldName = stringManipulation.capitalizeFirstLetters(fieldName);
      fieldName = stringManipulation.removeSpaces(fieldName);
      const field = await employeeSelfServicePage.getInputfieldElementByName(
        fieldName
      );

      const fieldData =
        HRTestData[`${this.testID}`][`${fieldName}`][`${validity}`];
      // const fieldData = randomDateGenerator.getRandomDate({
      //   year: 2024,
      //   month: 11,
      // });

      await field.setValue(fieldData);
      /**
       * WIP
       */
    } catch (err) {
      err.message = `Failed to input ${validity} data for ${fieldName} field. ${err.message}`;
      throw err;
    }
  }
);

When(/^I input (.*) for Leave code field$/, async function (leaveCode) {
  if (!leaveCode) {
    throw new Error(`No leave code: ${leaveCode} provided`);
  }
  reporter.addStep(
    this.testID,
    "info",
    `Starting to input ${leaveCode} for Leave code field`
  );
  try {
    await employeeSelfServicePage.leaveCodeField.setValue(leaveCode);
  } catch (err) {
    err.message = `Failed to input ${leaveCode} for Leave code field. ${err.message}`;
    throw err;
  }
});

When(
  /^I input (full|half) day for Leave hours field$/,
  async function (duration) {
    if (!duration) {
      throw new Error(`No duration: ${duration} provided`);
    }
    reporter.addStep(
      this.testID,
      "info",
      `Starting to input ${duration} day for Leave hours field`
    );
    try {
      const leaveHours = duration === "full" ? "7.5" : "3.75";
      await employeeSelfServicePage.leaveHoursField.setValue(leaveHours);
    } catch (err) {
      err.message = `Failed to input ${duration} day for Leave hours field. ${err.message}`;
      throw err;
    }
  }
);

When(/^I switch to (Yes|No) in Submit toggle field$/, async function (toggled) {
  if (!toggled) {
    throw new Error(`No toggled: ${toggled} provided`);
  }
  reporter.addStep(
    this.testID,
    "info",
    `Starting to switch to ${toggled} in Submit toggle field`
  );
  try {
    const state = await employeeSelfServicePage.submitToggleValue.getText();
    if (state === toggled) {
      return;
    } else {
      await employeeSelfServicePage.submitToggle.click();
      await expect(state).toEqual(toggled);
    }
  } catch (err) {
    err.message = `Failed to switch to ${toggled} in Submit toggle field. ${err.message}`;
    throw err;
  }
});

When(/^I click (.*) button$/, async function (buttonName) {
  if (!buttonName) {
    throw new Error(`No button name: ${buttonName} provided`);
  }
  reporter.addStep(
    this.testID,
    "info",
    `Starting to click ${buttonName} button`
  );
  try {
    const button = await $(`//button[contains(@id,'${buttonName}Button')]`);
    await button.click();
  } catch (err) {
    err.message = `Failed to click ${buttonName} button. ${err.message}`;
    throw err;
  }
});

When(/^I logout of the current account$/, async function () {
  reporter.addStep(
    this.testID,
    "info",
    `Starting to logout of the current account`
  );
  try {
    await navigationBarComp.signOut();
  } catch (err) {
    err.message = `Failed to logout of the current account. ${err.message}`;
    throw err;
  }
});

When(
  /^I (input|modify) (unique )?data for (.*) field$/,
  async function (action, isUnique, label) {
    if (!label) {
      throw new Error(`No label: ${label} provided`);
    }
    reporter.addStep(
      this.testID,
      "info",
      `Starting to input data for ${label} field`
    );
    label = stringManipulation
      .setString(label)
      .capitalizeFirstLetters()
      .removeSpaces()
      .toString();
    try {
      let data;
      if (action === "input") {
        if (isUnique) {
          data = generateRandomId();
          console.log(`>>>>>> data: ${data}`);
          this.executionDetails.recordID = data;
        } else {
          data = HRTestData[`${this.testID}`][`${label}`];
        }
      } else if (action === "modify") {
        data = `Modified: ${this.temp[`${label}`]}`;
      }

      const inputField = await findFieldByLabel.findInputByLabel(label);
      await inputField.setValue(data);
      this.executionDetails[`${label}`] = data;
    } catch (error) {
      error.message = `Failed to input data for ${label} field. ${error.message}`;
      throw error;
    }
  }
);

When(/^I click (.*) button in Action pane$/, async function (buttonName) {
  reporter.addStep(
    this.testID,
    "info",
    `Starting to click ${buttonName} button in Action pane`
  );
  try {
    await actionPaneComp.clickButton(buttonName);
    if (!this.executionDetails.recordID) {
      let recordID = await recordDetailPage.getRecordID();
      this.executionDetails.recordID = recordID;
    }
  } catch (error) {
    error.message = `Failed to click ${buttonName} button in Action pane. ${error.message}`;
    throw error;
  }
});

When(/^I filter for the wanted record by (.*)$/, async function (columnName) {
  reporter.addStep(
    this.testID,
    "info",
    `Starting to filter for the wanted record by ${columnName}`
  );
  if (!columnName) {
    throw new Error(`No column name: ${columnName} provided`);
  }
  try {
    let record = this.executionDetails.recordID;
    if (!record) {
      record = this.temp.recordID;
    }

    await listFilter.filterByColumnName(record, columnName);
    await listFilter.openFirstRecord(columnName);

    const recordTitle = await $(`//span[contains(@id,'titleField')]`).getText();
    await expect(recordTitle).toContain(record);
  } catch (err) {
    err.message = `Failed to filter for the job record by ${columnName}. ${err.message}`;
    throw err;
  }
});
