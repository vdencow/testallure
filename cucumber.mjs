import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const getWorldParams = () => {
  const params = {
    foo: 'bar',
  };

  return params;
};

const config = {
  requireModule: ['ts-node/register'],
  require: ['src/**/*.ts'],
  format: [
    // 'message:e2e/reports/cucumber-report.ndjson',
    'junit:artifacts/results.xml',
    'json:reports/cucumber-report.json',
    'html:reports/report.html',
    'summary',
    'progress-bar',
  ],
  formatOptions: { snippetInterface: 'async-await' },
  worldParameters: getWorldParams(),
  publishQuiet: true,
};

if (process.env.CI) {
  config.format.push('./src/support/reporters/allure-reporter.ts');
} else {
  config.format.push('@cucumber/pretty-formatter');
}
export default config;
