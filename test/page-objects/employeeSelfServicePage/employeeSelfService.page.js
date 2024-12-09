import Page from "../page";

class EmployeeSelfServicePage extends Page {
  constructor() {
    super();
  }
  /**
   * Define Elements
   */

  get myInformationTab() {
    return $(`//span[@class='pivot-label' and text()='My information']`);
  }

  get myAbsenceTab() {
    return $(`//span[@class='pivot-label' and text()='My absence']`);
  }

  get myTeamTab() {
    return $(`//span[@class='pivot-label' and text()='My team']`);
  }

  get newLeaveRequestBtn() {
    return $(`//span[text()='New leave request' and @class='button-label']`);
  }

  get accruedLeaveDiv() {
    return $(`//div[@data-dyn-controlname='TotalAccrued']`);
  }

  get newLeaveRequestQuickCreateHeading() {
    return $(`//div[@role='heading' and text()='Create a new leave request']`);
  }

  get leaveCodeField() {
    return $(`//input[contains(@name,'LeaveCode')]`);
  }

  get leaveHoursField() {
    return $(`//input[@name='UsedHours']`);
  }

  get submitToggle() {
    return $(`//span[@class='toggle-box' and contains(@id,'Submit_toggle')]`);
  }

  get submitToggleValue() {
    return $(
      `//span[@class='toggle-value' and contains(@aria-describedby, 'Submit_helptext')]`
    );
  }

  get requestID() {
    return $(`//input[contains(@id,'JournalId')]`);
  }

  /**
   *
   * @returns the string value of the remaining Accrued leave
   * The value will be to 2 decimal places
   */
  async extractAccruedLeave() {
    const accruedLeaveNumber = await this.accruedLeaveDiv
      .$(`//span[@class='field-status fieldOptions']`)
      .getAttribute("title");

    return accruedLeaveNumber.toString();
  }

  /**
   * Get the element of the tab to switch to by exact display name.
   *
   * @param {string} tabName - The exact display name of the tab.
   * @returns {Promise<WebdriverIO.Element>} - A promise that resolves to the tab element.
   */
  async getTabElementByName(tabName) {
    const element = await $(
      `//span[@class='pivot-label' and text()='${tabName}']`
    );

    return element;
  }

  async getInputfieldElementByName(fieldName) {
    const element = await $(`//input[@name='${fieldName}']`);
    return element;
  }
}

export default new EmployeeSelfServicePage();
