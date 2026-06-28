const briefForm = document.querySelector("#briefForm");
const contactForm = document.querySelector("#contactForm");

// Local-only scoring keeps the prototype useful before a real analytics
// service exists. The score is deterministic so the same brief gets the same
// numbers every time it is opened.
function scoreFromText(text, offset) {
  const base = text
    .split("")
    .reduce((total, character) => total + character.charCodeAt(0), 0);
  return 72 + ((base + offset) % 23);
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

if (briefForm) {
  briefForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(briefForm);
    const goal = String(data.get("goal") || "Campaign goal");
    const audience = String(data.get("audience") || "Target audience");
    const channel = String(data.get("channel") || "Channel");
    const message = String(data.get("message") || "Campaign message");

    setText("#previewTitle", goal);
    setText("#previewCopy", message);
    setText("#scoreBrand", `${scoreFromText(goal, 4)}%`);
    setText("#scoreClarity", `${scoreFromText(message, 11)}%`);
    setText("#scoreAudience", `${scoreFromText(audience, 17)}%`);
    setText(
      "#recommendation",
      `Recommended next step: test ${channel.toLowerCase()} messaging with the ${audience.toLowerCase()} segment.`
    );
    setText("#savedNote", "Saved locally in this browser.");

    localStorage.setItem(
      "raipCampaignBrief",
      JSON.stringify({ goal, audience, channel, message, updatedAt: new Date().toISOString() })
    );
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const draft = {
      name: String(data.get("name") || ""),
      organization: String(data.get("organization") || ""),
      message: String(data.get("message") || ""),
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem("raipContactDraft", JSON.stringify(draft));
    setText("#contactStatus", "Draft saved locally in this browser.");
  });
}
