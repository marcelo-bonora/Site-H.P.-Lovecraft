 // url padrão da api
 let url = 'http://localhost:3333';

 let problem = 0;

 function validação() {
    problem = 0;

     // LIMPANDO TDS AS DIVS DE VALIDAÇÃO
     div_nomeUsuario.innerHTML = ``;
     div_email.innerHTML = ``;
     div_senha.innerHTML = ``;
     div_confirmeSenha.innerHTML = ``;

     // VALIDAÇÃO DE ESPAÇO EM BRANCO 
     nomeUsuario.value = nomeUsuario.value.trimStart().trimEnd();
     senha.value = senha.value.trimStart().trimEnd();
     email.value = email.value.trimStart().trimEnd();
     confirmeSenha.value = confirmeSenha.value.trimStart().trimEnd();

     // VALIDAÇÃO DO NOME DE USUÁRIO
     if (nomeUsuario.value.length < 4){
         div_nomeUsuario.innerHTML += `O nome de usuário deve conter mais de 3 caracteres`;
         nomeUsuario.style.borderBottomColor = '#be1e37';
         problem++;

     // VALIDAÇÃO DO EMAIL
     } if (email.value.indexOf("@") == -1) {
         div_email.innerHTML = `Insira um endereço de e-mail válido`;
         email.style.borderBottomColor = '#be1e37';
         problem++;
         } else {
             let parts = email.value.split("@");
             let dominio = parts[1];

             if (dominio.indexOf(".") == -1) {
                div_email.innerHTML = `Insira um endereço de e-mail válido`;
                email.style.borderBottomColor = '#be1e37';
                problem++;
             } else {
                 let dominioParts = dominio.split(".");
                 let ext = dominioParts[1];
                 if (ext.length >= 4 || ext.length < 2) {
                    div_email.innerHTML = `Insira um endereço de e-mail válido`;
                    email.style.borderBottomColor = '#be1e37';
                    problem++;
                 }
             }
         
         

     // VALIDAÇÃO DA SENHA
     }  if(senha.value.length < 6){
         div_senha.innerHTML = `A senha deve ter ao menos 6 caracteres`;
         senha.style.borderBottomColor = '#be1e37';
         problem++;


     // VALIDAÇÃO DO CONFIRMAR SENHA
     } if(confirmeSenha.value != senha.value || confirmeSenha.value == ""){
         div_confirmeSenha.innerHTML = `Diferente do campo de senha ou se encontra vazio`;
         confirmeSenha.style.borderBottomColor = '#be1e37';
         problem++;
    }
}

function cadastrar(){    
        let erros = validação();
        if( problem == 0){ 

            nomeUsuario.style.borderBottomColor = '#7e633b';
            email.style.borderBottomColor = '#7e633b';
            senha.style.borderBottomColor = '#7e633b';
            confirmeSenha.style.borderBottomColor = '#7e633b';
            button_cadastro.style.backgroundImage = 'url("img/looding.gif")';
            button_cadastro.style.backgroundPosition = 'center center';
            button_cadastro.style.backgroundSize = 'cover';
            button_cadastro.style.color = 'transparent';


        fetch(url + '/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ 
                name: nomeUsuario.value,
                email: email.value, 
                password: senha.value
            })
            
        }).then(resposta => {
            if(resposta.ok) {
                resposta.json().then(json => {
                    console.log(json.message)
                    if(json.message == "Usuário criado com sucesso!") {
                        setTimeout(() => {
                            window.location.href = 'login.html'
                        }, 1200);
                    }
                    if(json.message == "Esse usuário já existe!") {
                        div_email.innerHTML = `Esse email já foi cadastrado`;
                    }
                });
            }
        });
    }
}