let devKeys = true

let cannotHurt = false
let cannotPlaysound = true

// DevKeys Menu
let devKeysOpened = false
function devKeysToggle() {
    if (devKeys) {
        if (!devKeysOpened) {
            document.getElementById('devKeys').style.display = 'block'
            setTimeout(() => {
                document.getElementById('dmTop').style.top = '0%'
                document.getElementById('dmContainer').style.bottom = '0%'
            }, 1);
            devKeysOpened = true
        } else {
            document.getElementById('dmTop').removeAttribute('style')
            document.getElementById('dmContainer').removeAttribute('style')
            setTimeout(() => {
                document.getElementById('devKeys').removeAttribute('style')
                devKeysOpened = false
            }, 400);

        }
    }
}