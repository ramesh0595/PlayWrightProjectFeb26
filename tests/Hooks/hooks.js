const { Before, After, Status } = require("@cucumber/cucumber");
const utilis = require("../Utility/BaseClass"); // ✅ MISSING IMPORT FIXED

Before(async function () {
  this.browser = await utilis.launchBrowser("chromium", false);
  this.context = await utilis.launchContext(this.browser);
  this.page = await utilis.launchPage(this.context);

  await utilis.launchUrl(this.page, "https://www.facebook.com/"); // ✅ FIX
});

After(async function (Scenario) {
  // await this.page.screenshot({path:"tests/ScreenShots/"+Date.now()+".png"});
  //if (Scenario.result.status === Status.FAILED) {
    // await this.page.screenshot({
    //   path: "tests/ScreenShots/" + Date.now() + ".png",
    //   fullPage:true
    // });

        const scenarioName = Scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, "_");
        const filePath = `tests/screenshots/${scenarioName}.png`;
        const screenshot = await this.page.screenshot({
            path: filePath,
            fullPage: true
        });
        await this.attach(screenshot, 'image/png');
  //}

  await this.browser.close();
});
