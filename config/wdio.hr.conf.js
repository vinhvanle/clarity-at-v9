import { config as baseConfig } from "../wdio.conf.js";

//https://scc-erp-dm3.sandbox.operations.dynamics.com/?cmp=3300&mi=DefaultDashboard
//https://scc-hr-automationf0bca086efe5d4feaos.axcloud.dynamics.com/?cmp=3300&mi=DefaultDashboard"

export const config = Object.assign(baseConfig, {
  baseUrl:
    "https://scc-erp-dm3.sandbox.operations.dynamics.com/?cmp=3300&mi=DefaultDashboard",
  specs: [`${process.cwd()}/test/features/HR/*.feature`],
});
