function calcular(tipo, valor) {
   if(tipo === 'acao') {

      if(valor === 'c') {
         document.getElementById('resultado').value = ''
      }

      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
         document.getElementById('resultado').value += valor
      }

   } else if(tipo === 'valor') {
    document.getElementById('resultado').value += valor
   }
}