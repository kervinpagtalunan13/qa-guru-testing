import { $, expect } from "@wdio/globals"
import Page from "./page.js"

class RegisterPage extends Page {
  get firstNameInput() {
    return $("//form/table/tbody/tr[2]/td[2]/input")
  }
  get lastNameInput() {
    return $("//form/table/tbody/tr[3]/td[2]/input")
  }
  get phoneInput() {
    return $("//form/table/tbody/tr[4]/td[2]/input")
  }
  get emailInput() {
    return $("input[id='userName']")
  }
  get addressInput() {
    return $("//form/table/tbody/tr[7]/td[2]/input")
  }
  get cityInput() {
    return $("//form/table/tbody/tr[8]/td[2]/input")
  }
  get stateProvinceInput() {
    return $("//form/table/tbody/tr[9]/td[2]/input")
  }
  get postalCodeInput() {
    return $("//form/table/tbody/tr[10]/td[2]/input")
  }
  get countrySelect() {
    return $("//form/table/tbody/tr[11]/td[2]/select")
  }

  get userNameInput() {
    return $("input[id='email']")
  }
  get passwordInput() {
    return $("//td/form/table/tbody/tr[14]/td[2]/input")
  }
  get confirmPasswordInput() {
    return $("//form/table/tbody/tr[15]/td[2]/input")
  }

  async areAllFieldExisting() {
    await expect(this.firstNameInput).toBeExisting()
    await expect(this.lastNameInput).toBeExisting()
    await expect(this.phoneInput).toBeExisting()
    await expect(this.emailInput).toBeExisting()
    await expect(this.addressInput).toBeExisting()
    await expect(this.cityInput).toBeExisting()
    await expect(this.stateProvinceInput).toBeExisting()
    await expect(this.postalCodeInput).toBeExisting()
    await expect(this.countrySelect).toBeExisting()
    await expect(this.userNameInput).toBeExisting()
    await expect(this.passwordInput).toBeExisting()
    await expect(this.confirmPasswordInput).toBeExisting()
  }

  async setContactInformation(firstName, lastName, phone, email) {
    await this.firstNameInput.setValue(firstName)
    await this.lastNameInput.setValue(lastName)
    await this.phoneInput.setValue(phone)
    await this.emailInput.setValue(email)
  }

  async setMailingInformation(
    address,
    city,
    stateProvince,
    postalCode,
    country
  ) {
    await this.addressInput.setValue(address)
    await this.cityInput.setValue(city)
    await this.stateProvinceInput.setValue(stateProvince)
    await this.postalCodeInput.setValue(postalCode)
    // await this.countrySelect.setValue(country)
    // for await ( const option of  $$(`${this.countrySelect}/option`)) {

    // }
  }

  async setUserInformation(username, password, confPassword) {
    await this.userNameInput.setValue(username)
    await this.passwordInput.setValue(password)
    await this.confirmPasswordInput.setValue(confPassword)
  }

  open() {
    return super.open("index.php")
  }
}

export default new RegisterPage()
