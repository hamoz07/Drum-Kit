window.addEventListener("keydown",(event)=>{
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing")
})
// select all keys
let keys = document.querySelectorAll(".key")
function onTransEnd(e) {
    if(e.propertyName !== "transform") return;    
    this.classList.remove("playing")
}
keys.forEach(k => k.addEventListener("transitionend", onTransEnd))