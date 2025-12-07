let screenIdentifier = 1
/* 
    Screens:
    1: Main Menu
    2: Game
*/

function closeAllScreens() {
    document.getElementById('mainMenu').removeAttribute('style')
    document.getElementById('spaceArea').removeAttribute('style')
}
document.getElementById('play').addEventListener('click', startGame)