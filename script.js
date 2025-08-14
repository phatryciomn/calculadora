function calcular(tipo, valor) {
   if(tipo === 'acao') {

      if(valor === 'c') {
         document.getElementById('resultado').value = ''
      }

   } else if(tipo === 'valor') {
    document.getElementById('resultado').value += valor
   }
}