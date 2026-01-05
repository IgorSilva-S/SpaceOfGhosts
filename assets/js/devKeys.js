let devKeys = true

let cannotHurt = false
let cannotPlaysound = false

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

function devGID() {
    let quickGID = {
        "saveName": 'Developer',
        "lastUse": '30/07/2006',
        "stardusts": 4336,
        "museum": -1,
        "worlds": 5,
        "pic": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB50lEQVRoge2Zv26DMBCHf6mqRpmZbFVqpD4CU3l/kYl3SBczVeqaLOlATdyrHWN8Z9qIb8k/B3J8d2cTbyCEUuqSMr7v+03O+R5zvjyV/cs++Nnx/chyjqyr4BIyEAqiPbQAAK219/NUQw8pg1OJBcFJthFqwhgDAGjemh/jpv54amiqGREjc4PIYXaxh0zkYo9jzdjzxMywG1nCBpBRI/ZKuSYkgphaM6JdqyRsE6LPxrYenp+64ZFe3VBd+cbFakbcyKnDGJAkyYEopS6p6yjAP4OnvGeMudkZWVKLptX1vaHYTx2g9e9UCi1Ppo5zSe5atFv5ggCA7nwNghMbVJEa6c4t6qcGz5+vReoDYF7Gj0tyNTzf7Xach7+JyP1I1Wt8qCH1uFMrRHYg7aEd89ZXpL4il2Cd2V1sGm3rcqlEYTNS9XqcxUt1Khe2Yrfroer79bY2gDLFDInVSNXHZ2NOWNsv7U6SKUZXwdlGlqgHH1lG3C5VumM59/YXQLBGSpvKMuLeNLk2ljCVXexLTYAUkUVjyBQn9L5E7N/40qaKbCtwEPt/a139SpO6b7IakeJP7Y8sweJG/sUeYkmKG+EyQFmNpDK3G01lNRJDqhZCrEYssU0YKQOUuzEye8eKUurKh7gbI1+Ahcrgf76sDwAAAABJRU5ErkJggg=="
    }

    localStorage.setItem(`gid4336`, JSON.stringify(quickGID))
}

function loadDevGID() {
    devGID()
    setTimeout(() => {
        localStorage.setItem('loadedGID', 4336)
        autoLoadGID()

        let saveArray = localStorage.getItem('gid4336')
        saveArray = JSON.parse(saveArray)

        document.getElementById('saveName').innerHTML = saveArray.saveName
        document.getElementById('lastSave').innerHTML = `Último uso: ${saveArray.lastUse}`
        document.getElementById('saveStardusts').innerHTML = `Stardusts: ${saveArray.stardusts}`
        document.getElementById('museumPieces').innerHTML = `Peças do museu: ${saveArray.museum}`
        document.getElementById('worldExplored').innerHTML = `Mundos explorados: ${saveArray.worlds}`
        document.getElementById('saveName-M').innerHTML = saveArray.saveName
        document.getElementById('lastSave-M').innerHTML = `Último uso: ${saveArray.lastUse}`
        document.getElementById('saveStardusts-M').innerHTML = `Stardusts: ${saveArray.stardusts}`
        document.getElementById('museumPieces-M').innerHTML = `Peças do museu: ${saveArray.museum}`
        document.getElementById('worldExplored-M').innerHTML = `Mundos explorados: ${saveArray.worlds}`
    }, 2);
}

function maxEnergy() {
    energy = 10
    checkEnergy()
}

function maxLife() {
    life = 10
    checkLife()
}

function toggleCH() {
    if (!cannotHurt) {
        cannotHurt = true
    } else {
        cannotHurt = false
    }

    console.log(`Cannot Hurt: ${cannotHurt}`)
}