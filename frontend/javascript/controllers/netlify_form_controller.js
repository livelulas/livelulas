import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = ["form"]

  submit(event) {
    event.preventDefault();

    const myForm = this.formTarget;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  }
}
