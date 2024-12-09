Feature: Create A Job and edit it

    Background: Login to system as HR assistant user
        Given I login to the application as HR Assistant user
        Then I should see system dashboard title
        When I navigate to "Jobs" page in "Human resources" module

    Scenario: 6231: Create a New Job
        When I click New button in Action pane
        When I input unique data for JobId field
        When I input data for Description field
        When I input data for Title field
        When I input data for Country field
        When I click Save button in Action pane
        When I navigate to "Jobs" page in "Human resources" module
        When I filter for the wanted record by Job
        Then I should see correct unique data for JobId field
        Then I should see correct data for Description field
        # Then I should see correct data for Title field
        Then I should see correct data for Country field

    Scenario: 6232: Edit a Job
        Given I get the execution result from 6231
        When I filter for the wanted record by Job
        When I click Edit button in Action pane
        When I modify data for Description field
        When I click Save button in Action pane
        When I navigate to "Jobs" page in "Human resources" module
        When I filter for the wanted record by Job
        Then I should see correct data for Description field
