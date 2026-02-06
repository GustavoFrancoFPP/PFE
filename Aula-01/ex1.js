let horario = Number(prompt("Digite o horário (0-23):"));
let prioridade = Number(prompt("Digie a prioridade (1-10):"));

if (prioridade < 1 || prioridade > 10) {
    alert("Prioridade inválida");
} else if (horario < 0 || horario > 23) {
    alert("Horário inválido");
} else {
    let turno = "";
}

if (horario >= 0 && horario <= 11) {
    horario = "Manhã";
}
else if (horario >= 12 && horario <= 17) {
    horario = "Tarde";
}
else if (horario >= 18 && horario <= 23) {
    horario = "Noite"
}
else {
    horario = "Horário inválido";
}
if (prioridade >= 8 && (horario === "Manhã" || horario === "Tarde")) {
    alert("Tarefa Urgente");
}
else if (prioridade >= 7 && prioridade <= 9 && (horario === "Manhã" || horario === "Tarde")) {
    alert("Tarefa Importante");
}
else if (horario === "Noite") {
    alert("Tarefa não importante");
}
else {
    alert("Prioridade inválida");
}