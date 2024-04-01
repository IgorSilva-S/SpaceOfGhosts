// Developer Mode (DevMode or DevKeys) script
let isDev = localStorage.getItem('devMode')
if (isDev == '1') {
    document.getElementById('gameName').src = 'assets/img/non-sprites/gameName/devKeys.png'
    document.getElementById('devKeysEnter').removeAttribute('style')
    document.getElementById('devKeysDisclaimer').removeAttribute('style')
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        console.log( localStorage.getItem( localStorage.key( i ) ) );
      }
}