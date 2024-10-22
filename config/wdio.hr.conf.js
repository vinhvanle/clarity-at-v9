import { config as baseConfig } from "../wdio.conf.js";

export const config = Object.assign(baseConfig, {
  baseUrl:
    "https://scc-hr-automationf0bca086efe5d4feaos.axcloud.dynamics.com/?cmp=3300&mi=DefaultDashboard",
  specs: [`${process.cwd()}/test/features/HR/*.feature`],
  cucumberOpts: {
    require: [`${process.cwd()}/test/step-definitions/HR/*.js`],
  },
});
