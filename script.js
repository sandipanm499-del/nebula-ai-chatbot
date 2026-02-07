const chat = document.getElementById("chat");
const input = document.getElementById("input");

// Message UI add করার function
function addMsg(text, cls) {
  const div = document.createElement("div");
  div.className = "msg " + cls;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// Send message to AI (UPDATED)
async function send() {
  const text = input.value.trim();
  if (!text) return;

  // User message
  addMsg(text, "user");
  input.value = "";

  // Typing indicator
  addMsg("Thinking...", "bot");

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    // Remove "Thinking..."
    chat.lastChild.remove();

    // AI response
    addMsg(
      data.choices?.[0]?.message?.content || "No response 😕",
      "bot"
    );
  } catch (err) {
    chat.lastChild.remove();
    addMsg("Error connecting to AI ❌", "bot");
  }
}
