//constantes para ligares aos campos do form

const form= document.querySelectror("#form");
const nameInput= document.querySelectror("#nome");
const emailInput= document.querySelectror("#email");
const messagetext= document.querySelectror("#message");



//cada envio acusará os campos para validação dos campos vazios

form.addEventListener("submit",(event) =>{
event.preventDefaut();
//verificar os campos  estao vazios
 if (nameInput.value=== ""){
    alert("Preencha o campo de nome ");
     return;
 }

 //verificar validaçao de email
//  OU se for falso a validaçao de caracteres for falsa
 if (emailInput.value === "" || !isEmailValid()){
    alert("preencha o campo de email");
    return;
 }
 //verificar acaixa de texto se ha mensagem 
 if (messagetext.value === ""){
    alert("Por favor, escreva uma mensagem");
    return;

   }



 //enviar form se todos os campos estiverem  preenchidos 
 form.submit();
 //funçao para validar email
 function isEmailValid(email){
    //cri uuma regex para validar email com @
    const emailRegex = new RegExp(
        //validacao de caracteres
        /^[a-zA-Z9-0._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        
    );
    if(emailRegex.test(email)){
      
        return true;
    }
    return false;
 }

});