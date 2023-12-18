const loginUrl = 'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
const userName_input = '#input-email'
const password_input = '#input-password'
const submit_button = 'input[type="submit"]'
const Error_message = '.alert.alert-danger.alert-dismissible'


class LoginPage{

    static visitURL() {

        cy.visit(loginUrl)

    }

    static enterUserName(username) {
        cy.get(userName_input).type(username)
    }

    static enterPassword(pwd) {
        cy.get(password_input).type(pwd)
    }

    static submit(){
        cy.get(submit_button).click()
    }

    static shouldShowErrorMessage(){
        cy.get(Error_message, {force : true}).contains('Warning: No match for E-Mail Address and/or Password.')
    }

}

export default LoginPage