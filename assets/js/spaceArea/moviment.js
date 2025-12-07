let ghost = document.getElementById('ghost');
let shield = document.getElementById('ghostShield')
let posi = 48;
let maxTop = 90
let minTop = 0

let pressing = false
let keyPressing = undefined

const upAnimTime = 360
const downAnimTime = 400

function restartGif(src) {
    ghost.src = src + "?t=" + Date.now();
}

function pressingKey() {
    if (pressing) {
        if (keyPressing == 'ArrowUp') {
            posi--;
            if (posi < minTop) {
                posi = minTop
            }
            ghost.style.top = `${posi}%`;
            shield.style.top = `${posi - 3}%`
        } else if (keyPressing == 'ArrowDown') {
            posi++;
            if (posi > maxTop) {
                posi = maxTop
            }
            ghost.style.top = `${posi}%`;
            shield.style.top = `${posi - 3}%`
        }
    }
}

setInterval(() => {
    pressingKey()
}, 40);

document.addEventListener('keydown', (e) => {

    if (e.repeat) return

    if (e.key === "ArrowUp") {
        pressing = true
        keyPressing = 'ArrowUp'
        restartGif(upAnim);
    }

    if (e.key === "ArrowDown") {
        pressing = true
        keyPressing = 'ArrowDown'
        restartGif(downAnim); // animação começa DO ZERO
    }
});

document.addEventListener('keyup', (e) => {
    restartGif(fly)
    pressing = false
    keyPressing = undefined
});
