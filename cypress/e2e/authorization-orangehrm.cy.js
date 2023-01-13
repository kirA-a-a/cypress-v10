import {LoginPage} from "./pages/login-page";

const loginPage = new LoginPage()

it('authorization', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    loginPage.enterUserName('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
})