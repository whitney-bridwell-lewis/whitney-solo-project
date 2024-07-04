import {By} from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs');

export class Chewy extends BasePage {
    //add locators here
    signIn: By = By.css('.accountNavContent__text--small')[0];
    emailAddress: By = By.id('username');
    password: By = By.id('password');
    signInButton: By = By.id('kc-login');
    accountDropdown: By = By.id('sticky-account-chevron');
    signOut: By = By.css('.AccountNavList__sign-out-link');
    oneTimeCode: By = By.id('kc-login-one-time-code-btn');
    continueWGoogle: By = By.id('social-google');
    continueWApple: By = By.id('social-apple');
    createAccount: By = By.id('login-register-button');
    forgotPassword: By = By.id('login-forgot-password-button');
    accountSignOut: By = By.css('.accountNavContent__text--small')[0];
    helpButton: By = By.xpath('(//a[@class="headernavigation-itemtext headernavigation-itemtrigger"])[1]');
    helpPhoneNumber: By = By.xpath('(//span[@class="kib-button-new__label"])[1]');
    askAnExpertChat: By = By.xpath('(//span[@class="kib-button-new__label"])[2]');
    sendAMessageEmail: By = By.xpath('(//span[@class="kib-button-new__label"])[3]');
    yourNameInput: By = By.name("Contact.Name.First");
    yourEmailInput: By = By.name("Contact.Emails.PRIMARY.Address");
    // helpSubmitButton: By = By.css('.rn_DisplayButton')[0];
    // endChatButton: By = By.id('#rn_ChatDisconnectButton_4_Button');
    selectATopic: By = By.id('rn_dynamicProductCategoryInput_6_Product_Button');
    topicChoice: By = By.id('ygtvlabelel2');
    selectA2ndTopic: By = By.id('rn_dynamicProductCategoryInput_8_Category_Button'); 
    topicChoice2: By = By.id('ygtvlabelel16');
    seeAllFAQs: By = By.xpath('(//div[@class="text-layout-modulecms-text-layoutsubtextTOgHu text-layout-modulecms-text-layout__subtext--default-QGN5"])[6]');
    chewyLogo: By = By.xpath('(//*[@class="chewy-logo"])[1]');
    searchBar: By = By.id('#search-autocomplete-tablet');
    submitSearch: By = By.id('search-button');
    facebookLogo: By = By.xpath('//a[@class="facebook logo"]');
    youtubeLogo: By = By.xpath('//a[@class= "youtube logo"]');
    instagramLogo: By = By.xpath('//a[@class= "instagram logo"]');
    tiktokLogo: By = By.xpath('//a[@class= "tiktok logo"]');

    async scroll(elementBy: By) {
        const scrollThing = await this.getElement(elementBy); 
        await this.driver.actions() 
        .move({origin: scrollThing})
        .perform()
    };
    

    constructor(){
        super({url: "https://www.chewy.com/"});
    };

};