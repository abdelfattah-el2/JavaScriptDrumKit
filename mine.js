

window.addEventListener("keydown" , function(e){
 
   const auide = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   if(!auide) return
   auide.currentTime = 0
    auide.play()
})