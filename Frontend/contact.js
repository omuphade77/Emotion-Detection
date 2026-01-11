document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const sendBtn = document.querySelector(".send-btn");

  // Get fields
  const inputs = form.querySelectorAll("input, textarea");

  // Helper: show temporary message
  function showMessage(text, success = true) {
    let msg = document.createElement("div");
    msg.textContent = text;
    msg.style.marginTop = "20px";
    msg.style.padding = "14px";
    msg.style.borderRadius = "12px";
    msg.style.fontWeight = "bold";
    msg.style.textAlign = "center";
    msg.style.background = success
      ? "rgba(0, 200, 120, 0.25)"
      : "rgba(200, 0, 60, 0.25)";
    msg.style.border = success
      ? "1px solid rgba(0, 200, 120, 0.6)"
      : "1px solid rgba(200, 0, 60, 0.6)";
    msg.style.color = "#fff";

    form.appendChild(msg);

    setTimeout(() => msg.remove(), 4000);
  }

  // Fake submit handler
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Validation
    let valid = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = "rgba(255, 80, 80, 0.8)";
      } else {
        input.style.borderColor = "rgba(255,255,255,0.3)";
      }
    });

    if (!valid) {
      showMessage("Please fill in all required fields.", false);
      return;
    }

    // Button loading state
    sendBtn.disabled = true;
    sendBtn.innerHTML = "SENDING... ⏳";

    // Simulated request (replace with real backend later)
    setTimeout(() => {
      sendBtn.disabled = false;
      sendBtn.innerHTML = "SEND MESSAGE <span>→</span>";

      showMessage("Message sent successfully! 🚀");

      // Clear form
      inputs.forEach((input) => (input.value = ""));
    }, 1800);
  });
});
