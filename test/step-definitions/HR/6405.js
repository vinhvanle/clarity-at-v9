import { Given, When, Then } from "@wdio/cucumber-framework";
// import { expect, should, assert } from "chai";

let newNationality = "FRA";

Then(
  /^I can modify the "Nationality country region" field of an employee$/,
  async function () {
    await $(
      `//input[contains(@id,'PersonalInfo_CountryRegion_NationalityCountryRegion_input')]`
    ).setValue(newNationality);

    await $(`//span[contains(@id,'SystemDefinedSaveButton_label')]`).click();

    const actual = await $(
      `//input[contains(@id,'PersonalInfo_CountryRegion_NationalityCountryRegion_input')]`
    ).getValue();

    await expect(actual).toEqual(newNationality);
  }
);
