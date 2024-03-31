// Developer Mode (DevMode or DevKeys) script
let isDev = localStorage.getItem('devMode')
if (isDev == '1') {
    document.getElementById('devAlert').innerText = 'Developer Keys Enabled'
    document.getElementById('devKeysEnter').removeAttribute('style')
    document.getElementById('devKeysDisclaimer').removeAttribute('style')
}