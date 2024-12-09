import Page from "../page";

import keysConst from "../../../data/constants/keys.const";

class EmployeesListPage extends Page {
  constructor() {
    super();
  }

  /**
   * Define elements
   */

  get listFilters() {
    return $$(`//input[contains(@id,'QuickFilter_Input_input')]`);
  }

  get filterListBoxs() {
    return $$(`//ul[contains(@id,'QuickFilter_listbox')]`);
  }

  get records() {
    return $$(`//input[@aria-label='Name']`);
  }

  get titleField() {
    return $(`//span[contains(@id,'TitleField')]`);
  }

  get quickFilter_listFieldName() {
    return $$(`//span[@class='quickFilter-listFieldName']`);
  }

  async openFirstRecord() {
    const firstRecord = await this.records[0];
    await this.click(firstRecord);
    await browser.keys(keysConst.KEY_ENTER);
  }

  async filterByColumn(columnName) {
    if (!columnName) {
      throw new Error("No column name provided");
    }
    const quickFilter_listFieldNames = await this.quickFilter_listFieldName;

    quickFilter_listFieldNames.forEach(async function (element) {
      const text = await element.getText();
      if (text === columnName) {
        await element.click();
      }
    });
  }

  async filterForRecordByColumnName(recordName, columnName) {
    if (!recordName || !columnName) {
      throw new Error(
        `No record name: ${recordName} or column name: ${columnName} provided`
      );
    }
    const listQuickFilter = await this.listFilters[1];
    await this.typeInto(listQuickFilter, recordName);
    const filterListBox = await this.filterListBoxs[1];
    await browser.waitUntil(
      async function () {
        return await filterListBox.isDisplayed();
      },
      { timeout: 5000, timeoutMsg: "Filter list box is not displayed" }
    );

    await this.filterByColumn(columnName);
    const expected = await listQuickFilter.getValue();
    await expect(expected).toEqual(recordName);
  }
}

export default new EmployeesListPage();
