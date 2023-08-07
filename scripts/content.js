const body = document.querySelector("body");

if (body) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const overlayText = document.createElement("p");
  overlayText.classList.add(".overlay-text");
  overlayText.textContent = "Focus mode on";

  overlay.appendChild(overlayText);

  body.insertAdjacentElement("afterend", overlay);
}
