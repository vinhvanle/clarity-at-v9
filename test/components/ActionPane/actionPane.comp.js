import Page from "../../page-objects/page";

class ActionPane extends Page {
  constructor() {
    super();
  }

  /**
   * Define elements
   */
  get editButton() {
    return $(`//button[contains(@id,'SystemDefinedViewEditButton')]`);
  }

  get saveButton() {
    return $(`//span[contains(@id,'SystemDefinedSaveButton_label')]`);
  }

  /**
   * Define functions
   */

  /**
   * Clicks the edit button.
   *
   * @returns {Promise<void>} A promise that resolves when the click action is complete.
   */
  async clickEditButton() {
    await this.editButton.click();
  }

  /**
   * Clicks the save button.
   *
   * This method waits for the save button to be available and then performs a click action on it.
   *
   * @returns {Promise<void>} A promise that resolves when the click action is completed.
   */
  async clickSaveButton() {
    await this.click(await this.saveButton);
  }
}

export default new ActionPane();
