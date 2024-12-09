import Page from "../../page-objects/page";
import keysConst from "../../../data/constants/keys.const";

class ListFilter extends Page {
  constructor() {
    super();
  }

  get filterInputField() {
    return $(`//input[@aria-label='Filter']`);
  }

  get quickFilter_listFieldNames() {
    return $$(`//span[@class='quickFilter-listFieldName']`);
  }

  get filterListBox() {
    return $(`//ul[contains(@id,'QuickFilter_listbox')]`);
  }

  async filterByColumn(columnName) {
    if (!columnName) {
      throw new Error("No column name provided");
    }
    const quickFilter_listFieldNames = await this.quickFilter_listFieldNames;

    let wantedElement = null;
    for (let element of quickFilter_listFieldNames) {
      const text = await element.getText();
      if (text === columnName) {
        wantedElement = element;
        await element.click();
        break;
      }
    }

    if (!wantedElement) {
      throw new Error(`No element with text: ${columnName} found`);
    }
  }

  async filterByColumnName(text, columnName) {
    if (!text || !columnName) {
      throw new Error(
        `No text: ${text} or column name: ${columnName} provided`
      );
    }

    await this.filterInputField.setValue(text);

    let filterListBox = await $(`//ul[contains(@id,'QuickFilter_listbox')]`);

    await browser.waitUntil(
      async function () {
        return (await filterListBox.isDisplayed()) === true;
      },
      {
        timeout: 10000,
        interval: 1000,
        timeoutMsg: "Filter list box is not displayed",
      }
    );

    await this.filterByColumn(columnName);
  }

  async openFirstRecord(columnName) {
    const records = await $$(`//input[@aria-label='${columnName}']`);
    const firstRecord = await records[0];
    await this.click(firstRecord);
    await browser.keys(keysConst.KEY_ENTER);
  }
}

export default new ListFilter();
