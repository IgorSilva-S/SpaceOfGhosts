crystal1.addEventListener("animationiteration", () => {
    let typeCrystal = Math.floor((Math.random() * 6) + 1)
    let delayCrystal = Math.floor(Math.random() * 5)
    crystal1.className = 'crystal'
    crystal1.style.display = 'none'
    setTimeout(() => {
        crystal1.removeAttribute('style')
        crystal1.classList.add(`cType${typeCrystal}`)
        crystal1.style.animationDelay = `${delayCrystal}s`
    }, 1);
})

crystal2.addEventListener("animationiteration", () => {
    let typeCrystal = Math.floor((Math.random() * 6) + 1)
    let delayCrystal = Math.floor(Math.random() * 5)
    crystal2.className = 'crystal'
    crystal2.style.display = 'none'
    setTimeout(() => {
        crystal2.removeAttribute('style')
        crystal2.classList.add(`cType${typeCrystal}`)
        crystal2.style.animationDelay = `${delayCrystal}s`
    }, 1);
})