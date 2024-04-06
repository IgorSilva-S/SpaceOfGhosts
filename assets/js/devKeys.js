// Developer Mode (DevMode or DevKeys) script
let isDev = localStorage.getItem('devMode')
if (isDev == '1') {
  document.getElementById('gameName').src = 'assets/img/non-sprites/gameName/devKeys.png'
  document.getElementById('devKeysEnter').removeAttribute('style')
  document.getElementById('devKeysDisclaimer').removeAttribute('style')
  function regeditDevKeys() {
    for (var i = 0, len = localStorage.length; i < len; i++) {
      var key = localStorage.key(i);
      var value = localStorage[key];
      let keyId = `KID${i}`
      let nameTable = document.createElement('div')
      nameTable.className = 'cellDiv'
      nameTable.innerText = key
      let nameColumn = document.getElementById('keyNameRow')
      nameColumn.insertAdjacentElement('beforeend', nameTable)
      let valueTable = document.createElement('div')
      valueTable.className = 'cellDivVal'
      valueTable.id = keyId
      valueTable.innerText = value
      let valueColumn = document.getElementById('keyValueRow')
      valueColumn.insertAdjacentElement('beforeend', valueTable)
    }
  }
  function clearRegKeys() {
    document.getElementById('keyNameRow').innerHTML = ''
    document.getElementById('keyValueRow').innerHTML = ''
  }
  regeditDevKeys()
  makeButtonsWork()
  function refreshPane() {
    clearRegKeys()
    organizeSound()
    enableOldControls()
    skinChanger()
    enableSoloSlots()
    organizeCursor()
    organizeColor()
    rearrangeShop()
    setTimeout(() => {
      regeditDevKeys()
      makeButtonsWork()
    }, 1);
  }

  function addNewKey() {
    let nkName = prompt('Insira o novo nome da chave')
    if (nkName == null, nkName == '') {
      alert('Inserção de valor cancelada')
    } else {
      let nkValue = prompt(`Insira o valor da nova chave ${nkName} \n Caso não insira, o valor será como undefined`)
      localStorage.setItem(nkName, nkValue)
    }
    refreshPane()
  }

  document.getElementById('addKey').addEventListener('click', () => {
    addNewKey()
  })

  document.getElementById('refreshData').addEventListener('click', () => {
    refreshPane()
  })

  function makeButtonsWork() {
    let valueCells = document.querySelectorAll('.cellDivVal')
    valueCells.forEach((i) => {
      i.addEventListener('click', () => {
        let valueKey = i.id
        valueKey = valueKey.replace('KID', '')
        let valueName = localStorage.key(valueKey)
        let newValue = prompt(`Digite o valor da chave ${valueName}: \n Palavras-chaves: \n delKey - Deleta a chave \n notChange - Não altera o valor da chave`)
        if (newValue == null || newValue == "") {
          alert('Sem valor inserido, o valor será tratado como 0')
          localStorage.setItem(valueName, 0)
          if (valueName == 'devMode') {
            document.getElementById('devKeysTitle').innerText = 'DevKeys Central - Alerta: Chave devMode alterada, o devKeys será desligado ao recarregar'
          }
          refreshPane()
        } else if (newValue == 'delKey') {
          alert(`A chave ${valueName} será deletada`)
          localStorage.removeItem(valueName)
          refreshPane()
        } else if (newValue == 'notChange') {
          alert(`O valor da chave ${valueName} não foi alterado`)
        } else {
          alert(`O valor da chave ${valueName} foi trocado para ${newValue}`)
          localStorage.setItem(valueName, newValue)
          setTimeout(() => {
            refreshPane()
            if (valueName == 'devMode') {
              
            document.getElementById('devKeysTitle').innerText = 'DevKeys Central'
            }
          }, 1);
        }
      })
    })
  }
}