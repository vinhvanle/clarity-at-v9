import { When } from "@wdio/cucumber-framework";
import paneNavigationComp from "../../components/PaneNavigation/paneNavigation.comp";
import navigationBarComp from "../../components/NavigationBar/navigationBar.comp";
import actionPaneComp from "../../components/ActionPane/actionPane.comp";
import personnelManagementPage from "../../page-objects/personelManagementPage/personelManagement.page";
import employeesListPage from "../../page-objects/employeesListPage/employeesList.page";
import employeeDetailPage from "../../page-objects/employeeDetailPage/employeeDetail.page";

import HRTestData from "../../../data/HR.json" assert { type: "json" };

// let employeeName = "Achilleas Giannaros";

When(
  /^I navigate to "(.*)" (page|workspace) in "(.*)" module$/,
  async (pageName, workspace, moduleName) => {
    if (workspace === "workspace") {
      await paneNavigationComp.navigatetoWorkspaces(moduleName, pageName);
    } else {
      await paneNavigationComp.navigateToModule(moduleName, pageName);
    }
  }
);

When(/^I search for "(.*)" in navigation search$/, async (pageName) => {
  await navigationBarComp.searchForPage(pageName);
});

When(/^I open an employee record in (read|edit) mode$/, async function (mode) {
  if (mode === "edit") {
    await actionPaneComp.clickEditButton();
  }
  await employeesListPage.filterForRecordByColumnName(
    HRTestData["6403"]["employeeName"],
    "Name"
  );
  await employeesListPage.openFirstRecord();
  const pageTitleField = await employeeDetailPage.pageTitleField.getText();
  await expect(pageTitleField).toContain(HRTestData["6403"]["employeeName"]);
});

When(/^I click employee tile$/, async function () {
  await personnelManagementPage.clickEmployeeTile();
  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes("Employees");
    },
    { timeout: 30000, interval: 500 }
  );
});
