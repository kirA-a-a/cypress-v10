import {LoginPage} from "./pages/login-page";

const loginPage = new LoginPage()

describe('Все тесты входа в систему', ()=>{

    it('Не корректный логин',  () => {
        loginPage.enterUserName('Admin123');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
        loginPage.checkError('Invalid credentials');
    });

    it('Корректные данные', () => {
        loginPage.enterUserName('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
        loginPage.checkEnterProfile();
    });
})



