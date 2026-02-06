let nome = prompt("escreva seu nome")
let novonome = nome.trim().toUpperCase();
let qtdPalavras = novonome.split(" ").length;
alert(`seu nome antigo com espaço: ${nome} seu nome formatado \n é: ${novonome} e possui ${qtdPalavras} palavras`)