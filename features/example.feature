Feature: Google Search
  As a user
  I want to perform a search on Google
  So that I can find relevant information

  Scenario: Perform a basic search
    Given I am on the Google homepage
    When I enter "example" into the search bar
    And I click the search button
    Then I should see search results