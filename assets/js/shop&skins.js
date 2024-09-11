let shopButtons = document.querySelectorAll('[shopButton]')
shopButtons.forEach((i) => {
    i.addEventListener('click', () => {
        document.getElementById('shopItems').style.display = 'none'
        document.getElementById('itemDesc').removeAttribute('style')

        let prodImage = document.getElementById('prodImage')
        if (i.id == "femaleSkinPurchase") {
           prodImage.src = 'assets/img/sprites/skins/female/Flying.gif'
        }
    })
})