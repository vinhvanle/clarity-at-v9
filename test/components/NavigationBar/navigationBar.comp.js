import Page from "../../page-objects/page";

/**
 * Class representing the navigation bar.
 * @extends Page
 */
class NavBar extends Page {
  /**
   * Create a NavBar.
   */
  constructor() {
    super();
  }

  get dashboardButton() {
    return $(`//button[@id='NavBarDashboard']`);
  }

  get navSearch() {
    return $(`//input[@id='NavigationSearchBox_searchBoxInput_input']`);
  }

  get navCompanyButton() {
    return $(`//button[@id='NavBarCompany']`);
  }

  get formCaption() {
    return $(`//span[@class='formCaption']`);
  }

  get userBtn() {
    return $(`//button[@id='UserBtn']`);
  }

  get signOutBtn() {
    return $(`//span[@id='SignOut_label']`);
  }

  get notificationBtn() {
    return $(`//button[@id='dynNavigationBarMessages_buttonNotifications']`);
  }

  get notificationItems() {
    return $$(`//li[@class='messageCenter-item']`);
  }

  get messageCenter() {
    return $(`//div[@class='messageCenter']`);
  }

  /**
   * Define functions
   */

  /**
   * Search for a page using the navigation search box.
   * @param {string} pageName - The name of the page to search for.
   * @return {Promise<void>} A promise that resolves when the search is complete.
   */
  async searchForPage(pageName) {
    await this.typeInto(this.navSearch, pageName);
    const topResult = await $$(`//span[@title='${pageName}']`)[0];
    await this.click(topResult);
    const formCaption = await $(
      `//span[@class='formCaption' and contains(text(), '${pageName}')]`
    );
    expect(await formCaption.getText()).toContain(pageName);
  }

  async signOut() {
    try {
      await this.click(await this.userBtn);
      await expect(await this.signOutBtn).toBeDisplayed();
      await this.click(await this.signOutBtn);
    } catch (err) {
      console.log(`>>>> error with signout function: ${err}`);
    }
  }

  async checkNotification(requestID) {
    let isOk = false;
    await this.notificationBtn.click();
    await expect(await this.messageCenter).toBeDisplayed();
    const notificationItems = await this.notificationItems;
    for (let notification of notificationItems) {
      const notificationText = await notification
        .$(`//span[contains(@class,'messageCenter-itemMessage')]`)
        .getText();
      if (
        notificationText.includes(requestID) &&
        notificationText.includes("Journal is OK")
      ) {
        isOk = true;
      }
    }

    await this.notificationBtn.click();
    await expect(!(await this.messageCenter.isDisplayed()));

    return isOk;
  }
}

export default new NavBar();
