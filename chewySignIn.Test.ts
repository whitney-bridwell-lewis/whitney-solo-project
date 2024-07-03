import { Chewy } from "./chewyPage";
const chewy = new Chewy();

test('making sure I can sign in', async () => {
    await chewy.navigate();
    await chewy.click(chewy.signIn);
    await chewy.setInput(chewy.emailAddress, "blah@blahblah2.com");
    await chewy.setInput(chewy.password, "blahblah");
    await chewy.click(chewy.signInButton);
    await chewy.navigate();
    await chewy.click(chewy.signOut);
    await chewy.navigate();
    await chewy.click(chewy.signIn);
    await chewy.click(chewy.forgotPassword);
    // NEED HELP - HOW TO GO BACK
    await chewy.click(chewy.signIn);
    await chewy.click(chewy.continueWGoogle);
    //NEED HELP - HOW TO GO BACK
    await chewy.click(chewy.signIn);
    await chewy.click(chewy.continueWApple);
    //NEED HELP - HOW TO GO BACK
    await chewy.driver.quit();
});