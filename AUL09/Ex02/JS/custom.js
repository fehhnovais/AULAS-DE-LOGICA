// exemplo de variaveis, evitar var exceto quando estiver lidando com codigo ligado, funcionamento global

document.writeln("<h2> variavel</h2>");

var nome_aluno= "Fernanda";
var idade_aluno=22;
var curso1 ="Modulo JS";
 
document.writeln("Aluno(a)  " + nome_aluno + " , sua idade de : " + idade_aluno + ", esta cursando o   "+ curso1 + "<br>");


// exemplo de constante, sempre que possivel - const apenas em bloco

const nome_aluno_const= "Matheus";
const idade_aluno_const= 16;
const curso1_const  ="Modulo 01";
 
document.writeln("Aluno(a)  " + nome_aluno_const + " , sua idade de : " 
+ idade_aluno_const + ", esta cursando o   "+ curso1_const + "<br>");


// exemplo de let quando precisar  mudar valor. Let apenas em bloco 

let nome_aluno_let= "Gustavo";
let idade_aluno_let= 23;
let curso1_let  ="super 01";
 
document.writeln("Aluno(a)  " + nome_aluno_let + " , sua idade de : " 
+ idade_aluno_let + ", esta cursando o   "+ curso1_let + "<br>");


//condicao 

if(true){

    const x=10;
    let y= 20;
    var z=30;
}

// constante 
//console.log(x);
//console.log(y);


console.log(z);

