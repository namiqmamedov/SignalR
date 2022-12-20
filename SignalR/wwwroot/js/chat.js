

var connection = new signalR.HubConnectionBuilder().withUrl("/chathub").build();

connection.start();

console.log(connection);

$(document).on("click", "#sendButton", function (e)
{
    e.preventDefault();

    let name = $("#userInput").val();
    let message = $("#messageInput").val();


    let li = `<li>${name} Says, ${message}</li>`;

    ${"#messagesList"}.append(li);

})