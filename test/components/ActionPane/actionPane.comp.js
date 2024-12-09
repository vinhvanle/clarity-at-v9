import Page from "../../page-objects/page";

class ActionPane extends Page {
  constructor() {
    super();
  }

  /**
   * Define elements
   */

  /**
   * Define functions
   */

  async clickButton(buttonName) {
    let button;
    if (buttonName === "Edit") {
      button = $(`//button[contains(@id,'SystemDefinedView${buttonName}')]`);
    } else {
      button = $(`//button[contains(@id,'SystemDefined${buttonName}')]`);
    }
    await button.waitForDisplayed();
    await button.click();
  }
}

export default new ActionPane();
