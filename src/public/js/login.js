 // url padrão da api
 let url = 'http://localhost:3333';

 function logar(){
     fetch(url + '/login', {
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         method: "POST",
         body: JSON.stringify({ 
             email: input.value, 
             senha: input_senha.value
          })
         
     }).then(resposta => {
         if(resposta.ok) {
             resposta.json().then(json => {
                 console.log(json.message)

                 if(json.message == "Login feito com sucesso!") {
                     setTimeout(() => {
                         window.location.href = 'index.html'
                     }, 1200);
                 }
                 if(json.message == "Opps.. Usuário ou Senha inválidos!") {
                     erro.style.display = "block";
                 }
             });
         }
     });
}