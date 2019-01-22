import Vue from "vue";

Vue.directive("inputCounter", {
  bind(el, binding, vnode) {},
  inserted(el, binding) {
    if (el instanceof HTMLInputElement && el.type === "text") {
      if (el.maxLength) {
        const parentNode = el.parentNode;
        const div = document.createElement("div");
        const maxLength = el.maxLength;

        div.className = "input-counter";
        div.textContent = `0/${maxLength}`;
        parentNode.insertBefore(div, el.nextSibling);
      }
    }
  },
  componentUpdated(el, binding, vnode) {
    const div = el.parentNode.querySelector(".input-counter");
    const maxLength = el.maxLength;
    const defaultColor = window
      .getComputedStyle(document.body, null)
      .getPropertyValue("color");
    if (el.value) {
      const length = el.value.length;
      div.textContent = `${length}/${maxLength}`;
      if (length / maxLength > 0.8) {
        div.style.color = "red";
      } else {
        div.style.color = defaultColor;
      }
    }
  }
});
