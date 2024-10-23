import { Given } from "@wdio/cucumber-framework";
import navigationBarComp from "../../components/NavigationBar/navigationBar.comp";
import loginPage from "../../page-objects/loginPage/login.page";
import stringManipulation from "../../helper/stringManipulation";
Given(
  /^I login to the application as (.*) user$/,
  { timeout: 300000 },
  async (userRole) => {
    if (!userRole) {
      throw new Error(`Given user role: ${userRole} is invalid`);
    }

    const userRoleWithUnderscores =
      stringManipulation.replaceSpacesWithUnderscores(userRole);
    userRole = stringManipulation.capitalizeAllLetters(userRoleWithUnderscores);

    await browser.url(`${browser.options.baseUrl}`);
    await browser.maximizeWindow();
    await navigationBarComp.signOut();

    await browser.url(`${browser.options.baseUrl}`);

    await loginPage.signIn(
      process["env"][`${userRole}_EMAIL`],
      process["env"][`${userRole}_PASSWORD`]
    );

    await expect(await browser.getTitle()).toContain("Finance and Operations");
  }
);
