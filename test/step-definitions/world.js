import { setWorldConstructor } from "@wdio/cucumber-framework";

class CustomWorld {
  testID;
  temp;
  constructor() {
    this.testID = "";
    this.temp = {};
  }
}

setWorldConstructor(CustomWorld);
