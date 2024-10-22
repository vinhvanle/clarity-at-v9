import { Given, When, Then } from "@wdio/cucumber-framework";
// import { expect, should, assert } from "chai";

let newEthnic = "Asian";

Then(
  /^I can modify the "Ethnic origin" field of an employee$/,
  async function () {
    await $(
      `//input[contains(@id,'PersonalInfo_Administration_EthnicOrigin_EthnicOriginId_input')]`
    ).setValue(newEthnic);

    await $(`//span[contains(@id,'SystemDefinedSaveButton_label')]`).click();

    const actual = await $(
      `//input[contains(@id,'PersonalInfo_Administration_EthnicOrigin_EthnicOriginId_input')]`
    ).getValue();

    await expect(actual).toEqual(newEthnic);
  }
);
