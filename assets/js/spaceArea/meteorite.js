const meteoritesSize = {
    1: 40,
    2: 80,
    3: 120,
    4: 160,
    5: 200
}

const meteorites = document.getElementsByClassName('meteorite')
const manipulableMeteorites = [...meteorites]
manipulableMeteorites.forEach(meteorite => {
    let topPosi = Math.floor(Math.random() * 80)
    let meteoriteSpeed = Math.floor((Math.random() * 5) + 4)
    let meteoriteDelay = Math.floor(Math.random() * 2)
    let meteoriteType = Math.floor((Math.random() * 5) + 1)
    let thatMeteorCanHurt = true

    meteorite.classList.add(`type${meteoriteType}`)
    meteorite.style.animationDuration = `${meteoriteSpeed}s`
    meteorite.style.top = `${topPosi}%`
    meteorite.style.animationDelay = `${meteoriteDelay}s`

    meteorite.addEventListener('animationiteration', () => {
        meteorite.removeAttribute('style')
        meteorite.style.display = 'none'
        topPosi = Math.floor(Math.random() * 80)
        meteoriteSpeed = Math.floor((Math.random() * 5) + 4)
        meteoriteDelay = Math.floor(Math.random() * 2)
        meteoriteType = Math.floor((Math.random() * 5) + 1)

        meteorite.className = 'meteorite'
        meteorite.classList.add(`type${meteoriteType}`)
        meteorite.style.animationDuration = `${meteoriteSpeed}s`
        meteorite.style.top = `${topPosi}%`
        meteorite.style.animationDelay = `${meteoriteDelay}s`
        setTimeout(() => {
            meteorite.style.display = 'block'
            thatMeteorCanHurt = true
        }, 1);
    })

    setInterval(() => {
        const meteorRect = meteorite.getBoundingClientRect();
        const ghostRect = ghost.getBoundingClientRect();

        const meteorTop = meteorRect.top;
        const meteorLeft = meteorRect.left;

        const ghostTop = ghostRect.top;
        const ghostLeft = ghostRect.left;

        if (
            meteorTop < ghostTop + ghostRect.height &&
            meteorTop + meteorRect.height > ghostTop &&
            meteorLeft < ghostLeft + ghostRect.width &&
            meteorLeft + meteorRect.width > ghostLeft &&
            thatMeteorCanHurt
        ) {
            let resp = colisionMeteorite()
            if (resp == 'broked') {
                meteorite.style.opacity = '0'
                thatMeteorCanHurt = false
                if (meteoriteType == 1) {
                    stardustsNum = stardustsNum + 2
                } else if (meteoriteType == 2) {
                    stardustsNum = stardustsNum + 4
                } else if (meteoriteType == 3) {
                    stardustsNum = stardustsNum + 6
                } else if (meteoriteType == 4) {
                    stardustsNum = stardustsNum + 8
                } else if (meteoriteType == 5) {
                    stardustsNum = stardustsNum + 10
                }
            }
        }
    }, 16);

});

// Stardust
const stardusts = document.getElementsByClassName('stardust')
const manipulableStardusts = [...stardusts]
manipulableStardusts.forEach(stardust => {
    let topPosi = Math.floor(Math.random() * 80)
    let stardustSpeed = Math.floor((Math.random() * 3) + 6)
    let stardustDelay = Math.floor(Math.random() * 10)

    stardust.style.animationDuration = `${stardustSpeed}s`
    stardust.style.top = `${topPosi}%`
    stardust.style.animationDelay = `${stardustDelay}s`

    stardust.addEventListener('animationiteration', () => {
        stardust.removeAttribute('style')
        stardust.style.display = 'none'
        topPosi = Math.floor(Math.random() * 80)
        stardustSpeed = Math.floor((Math.random() * 3) + 4)
        stardustDelay = Math.floor(Math.random() * 2)

        stardust.style.animationDuration = `${stardustSpeed}s`
        stardust.style.top = `${topPosi}%`
        stardust.style.animationDelay = `${stardustDelay}s`
        setTimeout(() => {
            stardust.style.display = 'block'
        }, 1);
    })

    setInterval(() => {
        const stardustRect = stardust.getBoundingClientRect();
        const ghostRect = ghost.getBoundingClientRect();

        const stardustTop = stardustRect.top;
        const stardustLeft = stardustRect.left;

        const ghostTop = ghostRect.top;
        const ghostLeft = ghostRect.left;

        if (
            stardustTop < ghostTop + ghostRect.height &&
            stardustTop + stardustRect.height > ghostTop &&
            stardustLeft < ghostLeft + ghostRect.width &&
            stardustLeft + stardustRect.width > ghostLeft
        ) {
            colisionStardust()
            stardust.style.opacity = '0'
        }
    }, 16);

});