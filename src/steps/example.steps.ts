import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';

Given('I am on the Google homepage', async function (this: ICustomWorld) {
  await this.page.goto('https://www.google.com');
});

When(
  'I enter {string} into the search bar',
  async function (this: ICustomWorld, searchQuery: string) {
    await this.page.getByRole('combobox').fill(searchQuery);
  },
);

When('I click the search button', async function (this: ICustomWorld) {
  await this.page.getByRole('combobox').press('Enter');
  await this.page.waitForNavigation();
});

Then('I should see search results', async function (this: ICustomWorld) {
  const searchResults = await this.page.locator('#search').count();
  expect(searchResults).toBeGreaterThan(0);
});
