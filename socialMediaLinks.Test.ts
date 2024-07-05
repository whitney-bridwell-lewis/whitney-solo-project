import { Chewy } from "./chewyPage";
const chewy = new Chewy();

test('making sure I can access the search bar and its results', async () => {
    await chewy.navigate();
    await chewy.scroll(chewy.facebookLogo);
    await chewy.click(chewy.facebookLogo);
    await chewy.driver.close();
    await chewy.navigate();
    await chewy.scroll(chewy.youtubeLogo);
    await chewy.click(chewy.youtubeLogo);
    await chewy.driver.close();
    await chewy.navigate();
    await chewy.scroll(chewy.instagramLogo);
    await chewy.click(chewy.instagramLogo);
    await chewy.driver.close();
    await chewy.navigate();
    await chewy.scroll(chewy.tiktokLogo);
    await chewy.click(chewy.tiktokLogo);
    await chewy.driver.close();
    await chewy.click(chewy.chewyLogo);
    await chewy.driver.quit();
});