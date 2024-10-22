import Page from "../../page-objects/page";

class PaneNav extends Page {
  constructor() {
    super();
  }
  /**
   * All Nav Bar components getters
   */

  get modulePaneOpener() {
    return $(`//div[@id='modulesPaneOpener']`);
  }

  get pinNavigation() {
    return $(`//button[@title='Pin navigation pane open']`);
  }

  get homeButton() {
    return $(`//div[@id='home']`);
  }

  get favouritesButton() {
    return $(`//div[@id='navPaneFavoritesID']`);
  }

  get recentButtons() {
    return $(`//div[@id='navPaneRecentsID']`);
  }

  get workspacesButton() {
    return $(`//div[@id='navPaneWorkSpaceGroupID']`);
  }

  get modulesButton() {
    return $(`//div[@id='navPaneModuleID']`);
  }

  get expandAllButton() {
    return $(`//button[@title='Expand all']`);
  }

  get formCaption() {
    return $(`//span[@id='formCaption']`);
  }

  /**
   *
   * Define functions
   */

  /**
   * Navigates to a specified workspace within a module.
   *
   * @param {string} moduleName - The name of the module to navigate to.
   * @param {string} workspaceName - The name of the workspace to navigate to within the module.
   * @returns {Promise<void>} - A promise that resolves when the navigation is complete.
   */
  async navigatetoWorkspaces(moduleName, workspaceName) {
    await this.click(await this.modulesButton);
    const moduleBtn = await $(`//a[@data-dyn-title='${moduleName}']`);
    await this.click(moduleBtn);
    await this.click(await this.expandAllButton);
    const pageBtn = await $(`//div[@data-dyn-title='${workspaceName}']`);
    await this.click(pageBtn);
    // await browser.debug()
  }

  /**
   * Navigates to a specified module and page within the application.
   *
   * @param {string} moduleName - The name of the module to navigate to.
   * @param {string} pageName - The name of the page within the module to navigate to.
   * @returns {Promise<void>} A promise that resolves when the navigation is complete.
   */
  async navigateToModule(moduleName, pageName) {
    await this.click(await this.modulesButton);
    const moduleBtn = await $(`//a[@data-dyn-title='${moduleName}']`);
    await this.click(moduleBtn);
    await this.click(await this.expandAllButton);
    const pageBtn = await $(`//a[@data-dyn-title='${pageName}']`);
    await this.click(pageBtn);
    // await browser.debug()
  }
}

export default new PaneNav();
