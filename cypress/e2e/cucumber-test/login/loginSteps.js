//import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from './loginPage'

Given('I open login page', () =>{

    LoginPage.visitURL()
})


When('I provide  username as {string}', username =>{
    LoginPage.enterUserName(username)
})

When('I provide passowrd as {string}', password =>{
    LoginPage.enterPassword(password)
})

When('I click on Login button', () =>{
    LoginPage.submit()
})

Then('I should see homepage',() =>{
    cy.get('#content > h2:nth-child(1)').should('be.visible')
    cy.title().should('eq','My Account')
})

Then('I should see error message', () =>{
    LoginPage.shouldShowErrorMessage()
})