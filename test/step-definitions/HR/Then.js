import { Then } from "@wdio/cucumber-framework";
import employeeDetailPage from "../../page-objects/employeeDetailPage/employeeDetail.page";
import actionPaneComp from "../../components/ActionPane/actionPane.comp";
import HRTestData from "../../../data/HR.json" assert { type: "json" };

let newBirthday = "7/7/1997";

Then(/^I can modify the "Birth day" field of an employee$/, async function () {
  const field = await employeeDetailPage.birthdayFieldInput;
  await field.setValue(HRTestData["6403"]["newBirthday"]);
  await actionPaneComp.clickSaveButton();
  const actual = await field.getValue();
  await expect(actual).toEqual(HRTestData["6403"]["newBirthday"]);
});
