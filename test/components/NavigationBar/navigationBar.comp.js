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

  /**
   * Get the dashboard button element.
   * @return {WebdriverIO.Element} The dashboard button element.
   */
  get dashboardButton() {
    return $(`//button[@id='NavBarDashboard']`);
  }

  /**
   * Get the navigation search input element.
   * @return {WebdriverIO.Element} The navigation search input element.
   */
  get navSearch() {
    return $(`//input[@id='NavigationSearchBox_searchBoxInput_input']`);
  }

  /**
   * Get the company button element.
   * @return {WebdriverIO.Element} The company button element.
   */
  get navCompanyButton() {
    return $(`//button[@id='NavBarCompany']`);
  }

  get formCaption() {
    return $(`//span[@class='formCaption']`);
  }

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
}

export default new NavBar();
