var pageAudio=new Audio()
pageAudio.src="./asset/Audio/intro-music-black-box-trap-beat-13221.mp3"


function playAudio()
{
    pageAudio.play()
    document.getElementById("loadingPage").style.display="none"
    document.getElementById("audioIcon").setAttribute("class","fa-solid fa-volume-xmark fa-bounce")
}
function pauseAudio()
{
    document.getElementById("audioIcon").setAttribute("class","fa-solid fa-volume-off fa-bounce")
    pageAudio.pause()
}
function buttonLoad()
{
    document.getElementById("enterToWebPage").style.display="block"
}
setTimeout(buttonLoad,10000)