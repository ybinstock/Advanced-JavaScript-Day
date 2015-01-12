var socket = io.connect("http://27a459e6.ngrok.com/");

// socket.emit("chat", {
//   chatText: " to the rescue",
//   userName: " Captain Planet"
// });

socket.emit("chat", {
    chatText: $("#chatText").val(),
    userName: $("#userName").val(),

});

socket.on("submit", function (chatInfo) {
  console.log(chatInfo);
});
