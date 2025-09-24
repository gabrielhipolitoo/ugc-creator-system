Feature:Login no ugc creator system


Scenario: Login with invalid credentials
    Given I am on the login page
    When I fill the email with "teste@gemail.com"
    And I fill the password with "sdabf33223"
    And I click the login button
    Then I should see the error message "Invalid credentials" 