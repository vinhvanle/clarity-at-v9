/**
 * Represents a generic page object with common actions.
 */
class Page {
  /**
   * Creates an instance of the Page class.
   */
  constructor() {}

  /**
   * Clicks on a given element after ensuring it is clickable.
   *
   * @param {WebdriverIO.Element} element - The element to be clicked.
   * @returns {Promise<void>} A promise that resolves when the click action is completed.
   */
  async click(element) {
    await element.waitForClickable({ timeout: 50000, interval: 500 });
    await element.click();
  }

  /**
   * Types text into a given element after ensuring it is displayed and clickable.
   *
   * @param {WebdriverIO.Element} element - The element to type into.
   * @param {string} text - The text to be typed into the element.
   * @returns {Promise<void>} A promise that resolves when the text has been set.
   */
  async typeInto(element, text) {
    await element.waitForDisplayed({ timeout: 50000, interval: 500 });
    await element.click();
    await element.setValue(text);
  }
}

export default Page;
