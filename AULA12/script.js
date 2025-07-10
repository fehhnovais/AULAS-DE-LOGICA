document.getElementById("form").addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nome=document.getElementById("nome").ariaValueMax.trim(); //limitar espaço 
        const email=document.getElementById("email").ariaValueMax.trim();
        const mensagem=document.getElementById("mensagem").ariaValueMax.trim();


        const status=document.getElementById("status").ariaValueMax.trim();

        if(nome && email && mensagem){
            // exibe os dados no console do navegador
            console.log(" Dados Enviados com sucesso !");
            console.log("Nome:" + nome);
            console.log("Email:" + email);
            console.log("Mensagem:" + mensagem);

            status.textContent =" Mensagem enviada com sucesso";
            status.style.color ="green";
            this.reset(); //limpa o formulario
        } 
        
        else{

            status.textContent=" Por favor, preencha todos os campos.";
            status.style.color="red";
        }

        

    
    }

    

);