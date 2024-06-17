let chatinput=document.getElementById("mytext")
let send=document.getElementById("send-btn")
let chatbox=document.getElementById("chatbox")
let userMessage;


function createChatLi(message,className){
    //create li element with passed message and classname
    let chatli=document.createElement("li")
    chatli.classList.add("chat",className)
    let chatcontent=className==="outgoing" ? `<p>${message}</p>` :`<span class="material-symbols-outlined">smart_toy</span> <p>${message}</p>`
    chatli.innerHTML=chatcontent
    return chatli
}

send.addEventListener("click",function(){
    userMessage=chatinput.value.trim();
    if(!userMessage) return;
    //append message when user type to chekbox
    chatbox.appendChild(createChatLi(userMessage,"outgoing"))

    setTimeout(function(){
        chatbox.appendChild(createChatLi("Thinking...","incoming"))
    },600)
})
