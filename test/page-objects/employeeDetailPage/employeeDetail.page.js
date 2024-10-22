import Page from "../page";

class employeeDetailPage extends Page {
  constructor() {
    super();
  }

  /**
   * Define elements
   */

  get birthdayFieldInput() {
    return $(
      `//input[contains(@id,'PersonalInfo_Administration_BirthDate_input')]`
    );
  }

  get pageTitleField() {
    return $(`//span[contains(@id, 'TitleField')]`);
  }
}

export default new employeeDetailPage();
