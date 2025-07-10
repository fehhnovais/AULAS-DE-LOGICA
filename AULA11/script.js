    
    // exercicio 01 
    function mudarTexto(){

        const titulo = document.getElementById(" titulo");
        titulo.textContent= " Titulo alterado com JS!";

    }

    // exercicio 02
    function mudarCor(){
         const p = document.getElementById ("paragrafo");
         p.style.color= "red";
         p.style.fontWeight="bold";
         paragrafo.textContent="Cor e texto alterada com sucesso"
    }

    // exercicio 03

    function adicionarIem (){
        const lista = document.getElementById("lista");
        const novoItem= document.createElement("li");
        novoItem.textContent=" Item adicionado ";
        lista.appendChild(novoItem);

    }
    
    // exercicio 04
    function removerUltimo(){
        const lista= document.getElementById("lista2");
        if(lista.lastChild){
            lista.removeChild(lista.lastChild);
        }
    }


    //exercicio 05
    function destacar(){
        const caixa = document.getElementById("caixa");
        caixa.style.background ="orange";

    }

    function removerDestaque(){
        const caixa= document.getElementById("caixa");
        caixa.style.background="lightblue";

    }

