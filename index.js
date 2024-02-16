function sendMessage() {
    var userInput = document.getElementById("userInput").value
    var chatLog = document.getElementById("chatLog")

    var userMessage = document.createElement("div")
    userMessage.classList.add("message")
    userMessage.innerHTML = "<p>" + userInput + "</p>"
    chatLog.appendChild(userMessage)

    var botMessage = document.createElement("div")
    botMessage.classList.add("message", "message-bot")
    if (userInput != "") {
        if (userInput === "./prueb_text") {
            botMessage.innerHTML = "<p> La ejecución del comando para la prueba de texto se ha realizado con exito. El archivo ./index.js se está ejecutando con total normalidad. </p>"
        }
        if (userInput === "./cls") {
            chatLog.innerHTML = ""
        }
        else {
            botMessage.innerHTML = "<p> Aún no tengo respuesta para dicho mensaje, actualmente solo funcionan comandos: (./prueb_text, ./cls)"
        }
        if (userInput == "Hola" || userInput == "ola" || userInput ==  "hola"){
            botMessage.innerHTML = "<p>Hola! ¿Como puedo ayudarte el día de hoy?</p>"
        }
        chatLog.appendChild(botMessage)
    }
    else {
        document.getElementById("userInput").value = ""
    }

    document.getElementById("userInput").value = ""
    chatLog.scrollTop = chatLog.scrollHeight
}