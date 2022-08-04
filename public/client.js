const socket = io.connect("http://localhost:4000");

const message = document.getElementById("message");
const button = document.getElementById("send");
const username = document.getElementById("username");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  socket.emit("sendingMessage", {
    message: message.value,
    username: username.value,
  });
});

socket.on("broadcastMessage", (data) => {
  output.innerHTML +=
    "<p><string>" + data.username + ": </strong>" + data.message + "</p>";
});
