const chat = document.getElementById("chat");
const input = document.getElementById("input");

function addMsg(text, cls) {
  const div = document.createElement("div");
  div.className = "msg " + cls;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function send() {
  const text = input.value.trim();
  if (!text) return;

  addMsg(text, "user");
  input.value = "";

  addMsg("Thinking...", "bot");

  // 🔑 API call placeholder
  // Replace with OpenRouter / Gemini
  setTimeout(() => {
    chat.lastChild.remove();
    addMsg("Hello! I am Nebula AI ✨", "bot");
  }, 800);
}
