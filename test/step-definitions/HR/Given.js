import { Given } from "@wdio/cucumber-framework";

Given(/^I login to the application$/, async () => {
  await browser.url(`${browser.options.baseUrl}`);
  // await $(`//input[@id='i0116']`).setValue('Employee1@scc.com');
  // await $(`//input[@id='idSIButton9']`).click();
  // await $(`//input[@id='i0118']`).setValue('5xsrjckrvK5pBM!');
  // await $(`//input[@id='idSIButton9']`).click();
  // await $(`//input[@id='idSIButton9']`).click();

  //   await expect(await browser.getUrl()).toContain("DefaultDashboard");
  await browser.maximizeWindow();
  //   await browser.debug();
});
