// Declando variáveis importantes para me ajudar //

var seletorCesar = document.querySelector('.seletorCesar')
var cifras = document.getElementById('cipher')
var msg1 = document.getElementById('bloco1')
var msg2 = document.getElementById('bloco2')
var seletor = document.querySelectorAll('.codigo')
var incremento = document.getElementById('posiçãoCesar')
var alfabeto = "abcdefghijklmnopqrstuvwxyz";
var btncodificar = document.getElementById('criptografar');
var btndecodificar = document.getElementById('descriptografar');
var submit = document.getElementById('submit')


//Função para aparecer o complemento para utilização da codificação com Cifra de Cesar.

cifras.addEventListener('change', function() {
    if(cifras.value == 'cesar') {
        seletorCesar.style.display = 'flex'
    } else {
        seletorCesar.style.display = 'none'
    }
})

//Função que exibe o texto 'Codificar mensagem' e 'Decodificar mensagem'

btncodificar.addEventListener('click', function(){
        submit.style.display = 'block'
        submit.value = 'Criptografar'
})

btndecodificar.addEventListener('click', function(){
        submit.style.display = 'block'
        submit.value = 'Descriptografar'
})

//Função para entrar no método Cifra de César ou Base64


//Função para Base64

    function codBase64() {
        var mensagem = document.querySelector('#bloco1').value
        var codificado = btoa(mensagem)
        return codificado
}
    function decBase64(){
        var mensagem = document.querySelector('#bloco2').value
        var decodificado = atob(mensagem)
        return decodificado
}

//Função para Cifra de Cesar

    function codCesar() {
        var elementoDaMensagem = msg1.value;
        var mensagemMinuscula = elementoDaMensagem.toLowerCase();
        var transformarNumero = (Number(incremento.value) % 26);
        var mensagemCodificada = '';
      
        for(var i = 0; i < mensagemMinuscula.length; i++){
           for(var j =0; j < alfabeto.length; j++){
             if(mensagemMinuscula[i] == alfabeto[j]){
               mensagemCodificada += alfabeto [j + transformarNumero]
               break;
           } else if (mensagemMinuscula[i] == ' ') {
               mensagemCodificada += ' ';
               break;
           }
          }    
      }
      return mensagemCodificada
      }
      
          function decCesar() {
          var elementoDaMensagem = msg1.value;
          var mensagemMinuscula = elementoDaMensagem.toLowerCase()
          var transformarNumero = (Number(incremento.value) % 26)
          var mensagemCodificada = '';
        
          for(var i = 0; i < mensagemMinuscula.length; i++){
             for(var j = alfabeto.length - 1; j >= 0; j--){
               if(mensagemMinuscula[i] == alfabeto[j]){
                 mensagemCodificada += alfabeto [j - transformarNumero]
                 break;
             } else if (mensagemMinuscula[i] == ' ') {
                 mensagemCodificada += ' ';
                 break;
             }
            }       
        }
        return mensagemCodificada
      }

      submit.addEventListener('click', function(e){
        e.preventDefault();
        if(btncodificar.checked && cifras.value === "base"){
            bloco2.innerText = codBase64();

        } else if(btndecodificar.checked && cifras.value === "base"){
            bloco2.innerText = decBase64();

        } else if(btncodificar.checked && cifras.value === "cesar"){
            bloco2.innerText = codCesar()

        } else if(btndecodificar.checked && cifras.value === "cesar"){
            bloco2.innerText = decCesar()

        } else{
            bloco2.innerText = "Por favor, digite novamente."
        }
    })