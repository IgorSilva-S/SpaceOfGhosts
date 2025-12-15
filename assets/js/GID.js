let GID = null
let saveArray = null
let loadedGID = null

let instaGID = null
let isInstaGIDValid = false

const GIDCards = [...document.getElementsByClassName('card')]
const GIDCards_M = [...document.getElementsByClassName('card-m')]

GIDCards.forEach((g, i) => {
    try {
        saveArray = localStorage.getItem(`gid${i}`)
        saveArray = JSON.parse(saveArray)
        console.log(saveArray.saveName)
    } catch {
        console.log(`GID with index ${i}: NO SAVE`)
    }
})

for (let i = 0; i < GIDCards_M.length; i++) {
    GIDCards_M[i].addEventListener('click', () => {
        try {
            saveArray = localStorage.getItem(`gid${i}`)
            saveArray = JSON.parse(saveArray)
            document.getElementById('GIDSkin-M').style.backgroundImage = "url('./assets/sprites/skins/ghost/idle.gif')"
            document.getElementById('saveName-M').innerHTML = saveArray.saveName
            document.getElementById('lastSave-M').innerHTML = `Último uso: ${saveArray.lastUse}`
            document.getElementById('saveStardusts-M').innerHTML = saveArray.stardusts
            document.getElementById('museumPieces-M').innerHTML = `Peças do museu: ${saveArray.museum}`
            document.getElementById('worldExplored-M').innerHTML = `Mundos explorados: ${saveArray.worlds}`
        } catch {
            document.getElementById('GIDSkin-M').style.backgroundImage = "url('./assets/sprites/skins/blank.png')"
            document.getElementById('saveName-M').innerHTML = 'NO SAVE'
            document.getElementById('lastSave-M').innerHTML = `NO SAVE`
            document.getElementById('saveStardusts-M').innerHTML = 'NO SAVE'
            document.getElementById('museumPieces-M').innerHTML = 'NO SAVE'
            document.getElementById('worldExplored-M').innerHTML = 'NO SAVE'
        }
    })
}

for (let i = 0; i < GIDCards.length; i++) {
    GIDCards[i].addEventListener('click', () => {
        try {
            saveArray = localStorage.getItem(`gid${i}`)
            saveArray = JSON.parse(saveArray)
            document.getElementById('GIDSkin').style.backgroundImage = "url('./assets/sprites/skins/ghost/idle.gif')"
            document.getElementById('saveName').innerHTML = saveArray.saveName
            document.getElementById('lastSave').innerHTML = `Último uso: ${saveArray.lastUse}`
            document.getElementById('saveStardusts').innerHTML = saveArray.stardusts
            document.getElementById('museumPieces').innerHTML = `Peças do museu: ${saveArray.museum}`
            document.getElementById('worldExplored').innerHTML = `Mundos explorados: ${saveArray.worlds}`
            document.getElementById('gidManager').innerText = 'Usar GID'
            instaGID = i
            isInstaGIDValid = true
        } catch {
            document.getElementById('GIDSkin').style.backgroundImage = "url('./assets/sprites/skins/blank.png')"
            document.getElementById('saveName').innerHTML = 'NO SAVE'
            document.getElementById('lastSave').innerHTML = `NO SAVE`
            document.getElementById('saveStardusts').innerHTML = 'NO SAVE'
            document.getElementById('museumPieces').innerHTML = 'NO SAVE'
            document.getElementById('worldExplored').innerHTML = 'NO SAVE'
            document.getElementById('gidManager').innerText = 'Criar GID'
            instaGID = i
            isInstaGIDValid = false
        }
    })
}

document.getElementById('gidManager').addEventListener('click', () => {
    if (isInstaGIDValid) {
        loadedGID = instaGID
    } else {
        let quickGID = {
            "saveName": "Quick",
            "lastUse": "15/12/2025",
            "stardusts": Math.floor(Math.random() * 1200),
            "museum": 0,
            "worlds": 0
        }

        localStorage.setItem(`gid${instaGID}`, JSON.stringify(quickGID))
        GIDCards[instaGID].click()
    }
})