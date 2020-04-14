function preventDefaultAction(evt) {
  evt.preventDefault();
}

window.addEventListener("dblclick", preventDefaultAction, false);
