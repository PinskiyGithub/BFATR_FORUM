document.querySelector('#messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var usernameInput = document.querySelector('#usernameInput');
    var messageInput = document.querySelector('#messageInput');
    var username = usernameInput.value;
    var message = messageInput.value;
    
    var chatContent = username + ': ' + message + '\n';
    appendMessageToChat(chatContent);
    
    usernameInput.value = '';
    messageInput.value = '';
});

function appendMessageToChat(message) {
    var fs = require('fs');
    fs.appendFile('chat.txt', message, function(err) {
        if (err) throw err;
        console.log('Сообщение сохранено в файле "chat.txt"');
        
        displayMessage(message);
    });
}

function displayMessage(message) {
    var chatMessages = document.querySelector('#chatMessages');
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}