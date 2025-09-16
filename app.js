const apiKey = 'YOUR_API_KEY';
const searchEngineId = 'YOUR_SEARCH_ENGINE_ID';
const query = 'Karachi weather';

fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${searchEngineId}`)
  .then(response => response.json())
  .then(data => {
    const firstResult = data.items[0];
    console.log('Title:', firstResult.title);
    console.log('Link:', firstResult.link);
    console.log('Snippet:', firstResult.snippet);
  })
  .catch(error => console.error('Error:', error));



document.addEventListener("DOMContentLoaded", function () {
    const inputForm = document.getElementById("input-form");
    const inputField = document.getElementById("input-field");
    const conversation = document.getElementById("conversation");
    const typingIndicator = document.getElementById("typing-indicator");

    inputForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userMsg = inputField.value.trim();
        if (userMsg === "") return;

        appendMessage("user", userMsg);

        inputField.value = "";
        typingIndicator.classList.remove("hidden");

        setTimeout(() => {
            const botReply = getBotResponse(userMsg);
            appendMessage("chatbot", botReply);
            typingIndicator.classList.add("hidden");
            conversation.scrollTop = conversation.scrollHeight;
        }, 700);
    });

    function appendMessage(sender, message) {
        const msgDiv = document.createElement("div");
        msgDiv.className = sender === "user" ? "user-message" : "chatbot-message";
        const textP = document.createElement("p");
        textP.className = sender === "user" ? "user-text" : "chatbot-text";
        textP.textContent = message;
        msgDiv.appendChild(textP);
        conversation.appendChild(msgDiv);
        conversation.scrollTop = conversation.scrollHeight;
    }

    function getBotResponse(input) {
        const msg = input.toLowerCase();

        if (
            msg.includes("who made you") ||
            msg.includes("app ko kis na banaya ha") ||
            msg.includes("who created you")
        ) {
            return "Muhammad Hashir ne mujhe banaya hai.";
        } else if (
            msg.includes("hashir ne kaha se class li") ||
            msg.includes("hashir class") ||
            msg.includes("where did hashir take class")
        ) {
            return "Hashir ne SMIT (Saylani Mass IT Training) se class li hai.";
        } else if (
            msg.includes("hashir ka naam") ||
            msg.includes("hashir name")
        ) {
            return "Hashir ka poora naam Muhammad Hashir hai.";
        } else if (
            msg.includes("hashir ki education") ||
            msg.includes("hashir education") ||
            msg.includes("hashir ne kya parha") ||
            msg.includes("hashir study")
        ) {
            return "Hashir ne web development aur programming ki education SMIT se hasil ki hai.";
        } else if (
            msg.includes("hashir ki skills") ||
            msg.includes("hashir skills") ||
            msg.includes("hashir kya janta hai")
        ) {
            return "Hashir ko HTML, CSS, JavaScript,web development ki skills hain.";
        } else if (
            msg.includes("hashir ka email") ||
            msg.includes("hashir email")
        ) {
            return "Hashir ka email hai: muhammadhashir19731973@gmail.com";
        } else if (
            msg.includes("hashir ka contact") ||
            msg.includes("hashir contact")
        ) {
            return "Contact details privacy ki wajah se share nahi kiye ja sakte.";
        } else if (
            msg.includes("code") ||
            msg.includes("apna code") ||
            msg.includes("show your code")
        ) {
            return `Yeh mera code hai:
function getBotResponse(input) {
    // ...code logic...
}`;
        } else if (msg.includes("hello") || msg.includes("hi") || msg.includes("salam")) {
            return "Hello! How may I assist you today?";
        } else if (msg.includes("app ka name kaya ha") || msg.includes("tumhara naam")) {
            return "Mera naam AI Chatbot hai.";
        } else if (msg.includes("how are you") || msg.includes("app kasa ho")) {
            return "Main theek hoon, shukriya!";
        } else if (msg.includes("bye") || msg.includes("thanks") || msg.includes("shukriya")) {
            return "Shukriya! Agar aap ko mazeed madad chahiye ho to poochain.";
        } else {
            return "Maazrat, mujhe samajh nahi aaya. Aap kuch aur pooch sakte hain!";
        }
    }
});

