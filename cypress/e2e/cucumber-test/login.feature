Feature: Validate User Login
    As a valid user 
    I want to login into application
    As a Invalid User
    I should not be able to login into application

Background: Visit the login page
Given I open login page

@smoke
Scenario: Valid login
When I provide  username as "heena.hans11@gmail.com"
When I provide passowrd as "Meditation@09"
When I click on Login button
Then I should see homepage
   
Scenario: Invalid login
When I provide  username as "peww"
When I provide passowrd as "peww"
When I click on Login button
Then I should see error message

@regression
Scenario Outline: Valid login using Outline
When I provide  username as '<username>'
When I provide passowrd as '<password>'
When I click on Login button
Then I should see homepage
Examples:
    | username | password |
    | heena.hans11@gmail.com  | Meditation@09 | 
     
