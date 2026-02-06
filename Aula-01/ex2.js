let salario = Number(prompt("Digite seu salário"))
let aluguel = Number(prompt("Digite o valor do aluguel"))
let alimentacao = Number(prompt("Digite o valor da alimentação"))
let lazer = Number(prompt("Digite o valor do lazer"))
despesas = aluguel + alimentacao + lazer

if (despesas < salario) {
    alert("Saldo Positivo");
}
else if (despesas > salario) {
    alert("Saldo Negativo");
}
else {
    alert("No limite");
}