import { Chewy } from "./chewyPage";
const chewy = new Chewy();

test('making sure I can access the helpdesk features', async () => {
    await chewy.navigate();
    await chewy.click(chewy.helpButton);
    await chewy.click(chewy.helpPhoneNumber);
    // NEED HELP - HOW TO GO BACK
    await chewy.click(chewy.helpButton);
    await chewy.click(chewy.askAnExpertChat);
    await chewy.click(chewy.yourNameInput);
    await chewy.setInput(chewy.yourNameInput, "Mrs. Blah");
    await chewy.click(chewy.sendAMessageEmail);
    await chewy.setInput(chewy.emailAddress, "blah@blahblah2.com");
    await chewy.click(chewy.helpSubmitButton);
    await chewy.click(chewy.endChatButton);
    // NEED HELP - HOW TO GO BACK X2
    await chewy.click(chewy.helpButton);
    await chewy.click(chewy.sendAMessageEmail);
    await chewy.click(chewy.emailAddress);
    await chewy.setInput(chewy.setInput, "blah@blahblah2.com");
    await chewy.click(chewy.selectATopic);
    await chewy.click(chewy.topicChoice);
    await chewy.click(chewy.selectATopic);
    await chewy.click(chewy.topicChoice2);
    await chewy.click(chewy.helpSubmitButton);
    await chewy.driver.quit();
});