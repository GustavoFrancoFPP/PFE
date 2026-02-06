let diaatual = new Date();
let evento = new Date('2026-05-09');

let ms = evento.getTime() - diaatual.getTime();

let dia = ms / 24 / 60 / 1000 / 60

let resu = Math.ceil(dia)
alert(` Falta ${dia} dias para o evento`)
