import Page from "../page";
class RecordDetailPage extends Page {
  constructor() {
    super();
  }

  /**
   * Define elements
   */

  get titleField() {
    return $(`//span[@data-dyn-role='InputLabel']`);
  }

  /**
   * Define page methods
   */

  async getRecordID() {
    let text = await this.titleField.getText();
    if (text) {
      console.log(`>>> text: ${text}`);
      let recordID = text.split(":")[0].trim();
      console.log(`>>>> text[0]: ${text.split(":")[0].trim()}`);
      console.log(`>>>> text[1]: ${text.split(":")[1].trim()}`);
      console.log(`>>>> recordID: ${recordID}`);
      return recordID;
    }
  }
}

export default new RecordDetailPage();
