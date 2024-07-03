import {By} from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs');

export class Chewy extends BasePage {
    //add locators here
    signIn: By = By.css('.accountNavContent__text--small')[0];
    emailAddress: By = By.id('#username');
    password: By = By.id('#password');
    signInButton: By = By.id('#kc-login');
    signOut: By = By.css('.icon-nav-open-close')[2];
    oneTimeCode: By = By.id('#kc-login-one-time-code-btn')[0];
    continueWGoogle: By = By.css('.bykLULGFsaOg_Dvq1NRr')[0];
    continueWApple: By = By.css('.bykLULGFsaOg_Dvq1NRr')[1];
    createAccount: By = By.id('#login-register-button')[0];
    forgotPassword: By = By.id('#login-forgot-password-button')[0];
    accountSignOut: By = By.css('.accountNavContent__text--small')[0];
    helpButton: By = By.css('.desktop-header__help-mobile')[0];
    helpPhoneNumber: By = By.css('.kib-button-new__label')[0];
    askAnExpertChat: By = By.css('.kib-button-new__label')[1];
    sendAMessageEmail: By = By.css('.kib-button-new__label')[2];
    yourNameInput: By = By.name('[name="Contact.Name.First"]')[0];
    yourEmailInput: By = By.name('[name="Contact.Emails.PRIMARY.Address"]')[0];
    helpSubmitButton: By = By.css('.rn_DisplayButton')[0];
    endChatButton: By = By.id('#rn_ChatDisconnectButton_4_Button');
    selectATopic: By = By.css('.rn_DisplayButton')[0];
    seeAllFAQs: // NEED HELP WITH THIS! 
    chewyLogo: By = By.css('.chewy-logo')[0]; //NEED HELP HERE TOO
    searchBar: By = By.id('#search-autocomplete-tablet')[0];
    facebookLogo: // NEED HELP
    youtubeLogo: // NEED HELP
    instagramLogo: // NEED HELP
    tiktokLogo: //NEED HELP

    constructor(){
        super({url: "https://www.chewy.com/"});
    };

};