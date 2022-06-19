let music = document.getElementById("music")
let playerBtn = document.getElementById("player")

playerBtn.addEventListener("click", player)

// function to play or pause #music with the event "click" on #player and change the icons of the latter.
function player() {
	if(music.paused) {
		playerBtn.innerHTML = `<i class="fa-solid fa-volume-high" aria-hidden="true"></i>`
		music.play()
	} else {
		playerBtn.innerHTML = `<i class="fa-solid fa-volume-xmark" aria-hidden="true"></i>`
		music.pause()
	}
}
