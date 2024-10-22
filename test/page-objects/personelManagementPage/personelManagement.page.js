import Page from "../page";

class PersonelManagementPage extends Page {
  constructor() {
    super();
  }

  get employeeTile() {
    return $(`//div[contains(@id,'TotalEmployeesTile')]`);
  }

  /**
   * Clicks on the employee tile element.
   *
   * This method waits for the employee tile element to be available and then performs a click action on it.
   *
   * @returns {Promise<void>} A promise that resolves when the click action is completed.
   */
  async clickEmployeeTile() {
    await this.click(await this.employeeTile);
  }
}

export default new PersonelManagementPage();
