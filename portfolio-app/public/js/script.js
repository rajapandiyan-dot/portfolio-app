document.getElementById("inquiryForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const messageEl = document.getElementById("formMessage");
  messageEl.textContent = "";
  messageEl.className = "form-message";

  const payload = {
    name: document.getElementById("name").value.trim(),
    contact: document.getElementById("contact").value.trim(),
    workType: document.getElementById("workType").value,
    details: document.getElementById("details").value.trim(),
  };

  try {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (data.ok) {
      messageEl.textContent = "Thanks! Your inquiry has been received.";
      messageEl.classList.add("success");
      e.target.reset();
    } else {
      messageEl.textContent = data.message || "Something went wrong. Please try again.";
      messageEl.classList.add("error");
    }
  } catch (err) {
    messageEl.textContent = "Could not reach the server. Please try again.";
    messageEl.classList.add("error");
  }
});
