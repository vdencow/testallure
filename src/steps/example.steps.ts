import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';

Given('I am on the Google homepage', async function (this: ICustomWorld) {
  await this.page.goto('https://www.google.com');
});

When(
  'I enter {string} into the search bar',
  async function (this: ICustomWorld, searchQuery: string) {
    await this.page.getByRole('combobox', { name: 'typo' }).fill(searchQuery);
  },
);

When('I click the search button', async function (this: ICustomWorld) {
  await this.page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await this.page.waitForNavigation();
});

Then('I should see search results', async function (this: ICustomWorld) {
  const searchResults = await this.page.$$('div.g');
  expect(searchResults.length).toBeGreaterThan(0);
});
