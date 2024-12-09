import Page from "../page";

class DashboardPage extends Page {
  constructor() {
    super();
  }

  /**
   * Define elements
   */
  get loggedInUserBtn() {
    return $(`//button[@id='UserBtn']`);
  }

  get userFlyout_UserName() {
    return $(
      `//li[@class='navigationBar-userFlyoutUserName']//span[@data-dyn-bind='text: $data.Alias, title: $data.Alias']`
    );
  }

  async getCurrentLoggedInUserEmail() {
    await this.click(await this.loggedInUserBtn);
    await this.userFlyout_UserName.waitForDisplayed();
    let userEmail = await this.userFlyout_UserName.getText();
    await this.click(await this.loggedInUserBtn);
    return userEmail;
  }

  async verifyLoggedInUser(userEmail) {
    let currentUserEmail = await this.getCurrentLoggedInUserEmail();
    if (currentUserEmail === userEmail) {
      return true;
    } else {
      return false;
    }
  }
}

export default new DashboardPage();
