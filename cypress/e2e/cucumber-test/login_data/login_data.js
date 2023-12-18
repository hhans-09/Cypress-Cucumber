//import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../login/loginPage'


Given('I open login page', () => {
    LoginPage.visitURL()
})


When('I provide  credentials', (datatable) => {

    datatable.hashes().forEach((element) => {
        LoginPage.enterUserName(element.username)
        LoginPage.enterPassword(element.password)
        
    });
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