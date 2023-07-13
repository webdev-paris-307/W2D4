// document.addEventListener("click", () => {
// 	document.documentElement.style.setProperty("--font-size", "48px");
// });

const startGameButton = document.getElementById("play");
const mainScreen = document.getElementById("main-screen");
const gameScreen = document.getElementById("game-screen");
const dialogElement = document.getElementById("dialog");
const closeDialogButton = document.getElementById("close-dialog");

const playstationSound = document.getElementById("playstation");

startGameButton.addEventListener("click", () => {
	mainScreen.classList.add("hidden");
	gameScreen.classList.remove("hidden");
	playstationSound.volume = 0.2;
	playstationSound.play();
	playstationSound.loop = true;
});

setTimeout(() => {
	dialogElement.showModal();
}, 4000);

closeDialogButton.addEventListener("dblclick", () => {
	dialogElement.close();
});
