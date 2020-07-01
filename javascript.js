function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` // Mostra o número escolhido, o contador atual e o número vezes o contador.
            item.value = `tab${c}` // Adiciona o Value para o option.
            tab.appendChild(item) // Adiciona o Option na lista do Select.
        }
    }
}