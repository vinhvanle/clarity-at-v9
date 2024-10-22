import { Then } from "@wdio/cucumber-framework";
import employeeDetailPage from "../../page-objects/employeeDetailPage/employeeDetail.page";
import actionPaneComp from "../../components/ActionPane/actionPane.comp";

let newBirthday = "1/15/1996";

Then(/^I can modify the "Birth day" field of an employee$/, async function () {
  const field = await employeeDetailPage.birthdayFieldInput;
  await field.setValue(newBirthday);
  await actionPaneComp.clickSaveButton();
  const actual = await field.getValue();
  await expect(actual).toEqual(newBirthday);
  await browser.pause(5000);
});
