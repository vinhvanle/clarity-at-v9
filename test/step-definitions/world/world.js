import { setWorldConstructor } from "@wdio/cucumber-framework";

class CustomWorld {
  testID;
  requestID;
  executionDetails;
  temp;
  constructor() {
    this.testID = "";
    this.requestID = "";
    this.executionDetails = {};
    this.temp = {};
  }
}

setWorldConstructor(CustomWorld);
