const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const utilis = require("../Utility/BaseClass");
const LoginPage = require("../Pages/LoginPage");
const RegistrationPage = require("../Pages/RegistrationPage");

let loginpage;
let registrationpage;

Given("The user should be in faceBook Page", async function () {
  console.log("User already on Facebook page (handled by Hooks)");
});

When(
  "The user has to fill the userName {string} and Password {string}",
  async function (user, pass) {

    loginpage = new LoginPage(this.page); // ✅ FIX
    await loginpage.enterUsername(user);
    await loginpage.enterPassword(pass);
  }
);

When("The user has to click the login button", async function () {
  await loginpage.clickLogin();
});

Then("The user should navigate the invalid Page", async function () {
  const title = await utilis.getPageTitle(this.page); // ✅ FIX
  assert.ok(title.includes("facebook"));
  console.log("User in Invalid Page");
});


// 🔹 Registration Flow

When("The user has to click the create new account button", async function () {
  registrationpage = new RegistrationPage(this.page); // ✅ FIX
  await registrationpage.clickCreateAccount();
});

When(
  "The user has to fill the firstname,lastname and other details",
  async function () {
    await registrationpage.enterFirstName("ramesh");
    await registrationpage.enterLastName("kumar");
  }
);

When("The user has to click the submit button", async function () {
  await registrationpage.clickSubmit();
});

Then("The user should be get successfully Registered", async function () {
  console.log("User Successfully Registered");
});