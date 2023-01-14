import {LoginPage} from "./pages/login-page";

const loginPage = new LoginPage();

describe('Все тесты входа в систему', ()=>{

    beforeEach(()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('Не корректный логин',  () => {
        loginPage.enterUserName('Admin123');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
        loginPage.checkError('Invalid credentials');
    });

    it('Не корректный пароль',  () => {
        loginPage.enterUserName('Admin');
        loginPage.enterPassword('admin');
        loginPage.clickLogin();
        loginPage.checkError('Invalid credentials');
    });

    it('Корректные данные', () => {
        loginPage.enterUserName('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
        loginPage.checkEnterProfile();
    });
});
