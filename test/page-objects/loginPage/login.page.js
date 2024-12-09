import Page from "../page";

class LoginPage extends Page {
  constructor() {
    super();
  }

  /**
   * Define elements
   */

  get useAnotherAccountBtn() {
    return $(`//div[@id='otherTile']`);
  }

  get emailInputField() {
    return $(`//input[@name='loginfmt']`);
  }

  get passwordInputField() {
    return $(`//input[@name='passwd']`);
  }

  get nextBtn() {
    return $(`//input[@id='idSIButton9']`);
  }

  get pickAnAccountHeadding() {
    return $(`//div[@role='heading' and contains(text(), 'Pick an account')]`);
  }

  get enterPasswordHeadding() {
    return $(`//div[@role='heading' and contains(text(), 'Enter password')]`);
  }

  async signIn(email, password) {
    await expect(await this.pickAnAccountHeadding).toBeDisplayed();
    await this.click(await this.useAnotherAccountBtn);
    await this.typeInto(await this.emailInputField, email);
    await this.click(await this.nextBtn);
    await expect(await this.enterPasswordHeadding).toBeDisplayed();
    await this.typeInto(await this.passwordInputField, password);
    await this.click(await this.nextBtn);
  }
}

export default new LoginPage();
