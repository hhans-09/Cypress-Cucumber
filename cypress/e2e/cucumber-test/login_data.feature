Feature: I want to login into application with valid and invalid users
    I want to login into application
    using multiple users
    

Background: Visit the login page
Given I open login page

Scenario: Login with multiple valid users
When I provide  credentials 
| username | password | 
| heena.hans11@gmail.com | Meditation@09 |
When I click on Login button
Then I should see homepage

@regression
Scenario: Login with multiple invalid users
When I provide  credentials 
| username | password | 
| abc12 | abc@091 |
| User1234 | Pass1234 |
When I click on Login button
Then I should see error message