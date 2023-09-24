import { $ } from "@wdio/globals"
import Page from "./page.js"

class HomePage extends Page {
  get registerLink() {
    return $("=REGISTER")
  }

  open() {
    return super.open("index.php")
  }
}

export default new HomePage()
