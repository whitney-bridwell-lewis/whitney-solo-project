import { Chewy } from "./chewyPage";
const chewy = new Chewy();

test('making sure I can create an account', async () => {
    await chewy.navigate();
    await chewy.click(chewy.signIn);
    await chewy.click(chewy.createAccount);
    await chewy.setInput(chewy.emailAddress, "blah@blahblah2.com");
    await chewy.setInput(chewy.password, "blahblah");
    await chewy.click(chewy.createAccount);
    await chewy.navigate();
    await chewy.click(chewy.signOut);
    await chewy.click(chewy.signIn);
    await chewy.click(chewy.createAccount);
    await chewy.click(chewy.continueWGoogle);
    await chewy.driver.navigate().back();
    await chewy.click(chewy.continueWApple);
    await chewy.driver.navigate().back();
    await chewy.driver.quit();
});