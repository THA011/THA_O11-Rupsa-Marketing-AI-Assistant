const form = document.querySelector("#briefForm");

function scoreFromText(text, offset) {
  const base = text
    .split("")
    .reduce((total, character) => total + character.charCodeAt(0), 0);
  return 72 + ((base + offset) % 23);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const goal = String(data.get("goal") || "Campaign goal");
    const audience = String(data.get("audience") || "Target audience");
    const channel = String(data.get("channel") || "Channel");
    const message = String(data.get("message") || "Campaign message");

    document.querySelector("#previewTitle").textContent = goal;
    document.querySelector("#previewCopy").textContent = message;
    document.querySelector("#scoreBrand").textContent = `${scoreFromText(goal, 4)}%`;
    document.querySelector("#scoreClarity").textContent = `${scoreFromText(message, 11)}%`;
    document.querySelector("#scoreAudience").textContent = `${scoreFromText(audience, 17)}%`;
    document.querySelector(
      "#recommendation"
    ).textContent = `Recommended next step: test ${channel.toLowerCase()} messaging with the ${audience.toLowerCase()} segment.`;

    localStorage.setItem(
      "raipCampaignBrief",
      JSON.stringify({ goal, audience, channel, message, updatedAt: new Date().toISOString() })
    );
  });
}

