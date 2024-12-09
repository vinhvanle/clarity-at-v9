import { Given } from "@wdio/cucumber-framework";
import navigationBarComp from "../../components/NavigationBar/navigationBar.comp";
import loginPage from "../../page-objects/loginPage/login.page";
import stringManipulation from "../../helper/stringManipulation";
import reporter from "../../helper/reporter";
import dashboardPage from "../../page-objects/dashboardPage/dashboard.page";
import fs from "fs";

Given(/^I login to the application as (.*) user$/, async function (userRole) {
  if (!userRole) {
    throw new Error(`Given user role: ${userRole} is invalid`);
  }

  reporter.addStep(
    this.testID,
    "info",
    `Starting to login as ${userRole} user`
  );
  try {
    userRole = stringManipulation
      .replaceSpacesWithUnderscores(userRole)
      .capitalizeAllLetters()
      .toString();

    await browser.url(`${browser.options.baseUrl}`);
    await browser.maximizeWindow();

    let correctUserLoggedIn = await dashboardPage.verifyLoggedInUser(
      process["env"][`${userRole}_EMAIL`]
    );

    if (!correctUserLoggedIn) {
      await navigationBarComp.signOut();
      await browser.url(`${browser.options.baseUrl}`);
      const currentTitle = await browser.getTitle();
      await loginPage.signIn(
        process["env"][`${userRole}_EMAIL`],
        process["env"][`${userRole}_PASSWORD`]
      );
      await browser.waitUntil(async function () {
        return (await browser.getTitle()) !== currentTitle;
      });
    }
  } catch (err) {
    err.message = `Failed to login as ${userRole} user. ${err.message}`;
    throw err;
  }
});

Given(/^I get the execution result from (.*)$/, async function (testID) {
  if (!testID) {
    throw new Error(`Given test ID: ${testID} is invalid`);
  }

  reporter.addStep(
    this.testID,
    "info",
    `Getting the execution result from ${testID}`
  );
  try {
    let dir = `${process.cwd()}/test-execution-results/${testID}/${testID}.json`;
    let data = fs.readFileSync(dir, "utf8");
    this.temp = JSON.parse(data);
    console.log(JSON.stringify(this.temp));
  } catch (err) {
    err.message = `Failed to get the execution result from ${testID}. ${err.message}`;
    throw err;
  }
});
