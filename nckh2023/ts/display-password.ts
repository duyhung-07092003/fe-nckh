import { querySelector, addEventListener } from "dom";

export function displayPassword(eyeIcon: HTMLElement, passwordInput: HTMLElement) {
  addEventListener(eyeIcon, "click", () => {
    passwordInput.setAttribute("type", passwordInput.getAttribute("type") === "password" ? "text" : "password");
  });
}