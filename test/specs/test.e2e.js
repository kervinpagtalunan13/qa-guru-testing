import { expect, browser } from "@wdio/globals"
import HomePage from "../pageobjects/home.page.js"
import SecurePage from "../pageobjects/secure.page.js"
import RegisterPage from "../pageobjects/register.page.js"

describe("Register", () => {
  it("should open home page", async () => {
    await HomePage.open()
    await expect(HomePage.registerLink).toBeExisting()
  })

  it("should redirect to register page", async () => {
    await HomePage.registerLink.click()
    await expect(browser).toHaveUrlContaining("register")
  })

  it("should register", async () => {
    await RegisterPage.areAllFieldExisting()
    await RegisterPage.setContactInformation(
      "Kervin",
      "Pagtalunan",
      "1231123123",
      "test@test.com"
    )
    await RegisterPage.setMailingInformation(
      "test",
      "test",
      "test",
      "3000",
      "PHILIPPINES"
    )
    await RegisterPage.setUserInformation("test", "password", "password")
  })
})
