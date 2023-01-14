export class LoginPage {

    loginPage_textBox_login = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginPage_textBox_password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginPage_login_button = '.oxd-button';
    error = 'Invalid credentials';

    enterUserName(userName){
        cy.get(this.loginPage_textBox_login).type(userName);
    }

    enterPassword(password){
        cy.get(this.loginPage_textBox_password).type(password);
    }

    clickLogin(){
        cy.get(this.loginPage_login_button).click();
    }

    checkError() {
        cy.contains(this.error);
    }

    checkEnterProfile() {
        cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard')
    }
}