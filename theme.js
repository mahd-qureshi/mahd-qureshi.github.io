//
//  theme.js — the design switcher.
//
//  The button is injected rather than written into the HTML, so a page with
//  JavaScript disabled shows no control instead of a dead one. The chosen
//  theme is stored and re-applied by a tiny inline script in <head>, before
//  first paint, which is what stops the page flashing the default theme on
//  every load.
//

const THEMES = [
  { id: "editorial", label: "Editorial" },
  { id: "terminal", label: "Terminal" },
  { id: "brutalist", label: "Brutalist" },
  { id: "zine", label: "Zine" },
];

const KEY = "mq-theme";

function currentIndex() {
  const active = document.documentElement.dataset.theme ?? "editorial";
  const index = THEMES.findIndex((theme) => theme.id === active);
  return index === -1 ? 0 : index;
}

function apply(id, { announce = false } = {}) {
  document.documentElement.dataset.theme = id;

  try {
    localStorage.setItem(KEY, id);
  } catch {
    // Private browsing can refuse storage. The theme still applies for this
    // page view, which is the part that matters.
  }

  const theme = THEMES.find((entry) => entry.id === id) ?? THEMES[0];
  const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];

  button.querySelector("b").textContent = theme.label;
  button.setAttribute("aria-label", `Design: ${theme.label}. Switch to ${next.label}.`);

  if (announce) status.textContent = `${theme.label} design`;
}

const button = document.createElement("button");
button.type = "button";
button.className = "theme-switch";
button.innerHTML = '<i aria-hidden="true"></i><span class="label">Design:&nbsp;</span><b></b>';

// Screen readers get told the design changed; sighted users can see it.
const status = document.createElement("p");
status.className = "sr-only";
status.setAttribute("role", "status");
status.setAttribute("aria-live", "polite");

document.body.append(button, status);

button.addEventListener("click", () => {
  apply(THEMES[(currentIndex() + 1) % THEMES.length].id, { announce: true });
});

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.target.closest("input, textarea, select")) return;

  if (event.key.toLowerCase() === "d") {
    apply(THEMES[(currentIndex() + 1) % THEMES.length].id, { announce: true });
  }
});

apply(document.documentElement.dataset.theme || "editorial");
