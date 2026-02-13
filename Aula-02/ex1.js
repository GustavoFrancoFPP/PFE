let snowInterval;
let fireInterval;

function converterTemperatura() {
    const input = document.getElementById("celsiusInput");
    if (input.value === "") return alert("Por favor, digite um valor!");

    let celsius = Number(input.value);
    let kelvin = (celsius + 273.15).toFixed(2);
    let fahrenheit = (celsius * 1.8 + 32).toFixed(2);

    alert(`Resultados:\nKelvin: ${kelvin}K\nFahrenheit: ${fahrenheit}°F`);

    const snowCanvas = document.getElementById("snowCanvas");
    const fireCanvas = document.getElementById("fireCanvas");

    if (fahrenheit > 80) {
        document.body.style.backgroundColor = "coral";
        snowCanvas.style.display = "none";
        fireCanvas.style.display = "block";
        stopSnowAnimation();
        startFireAnimation();
    } else {
        document.body.style.backgroundColor = "lightskyblue";
        fireCanvas.style.display = "none";
        snowCanvas.style.display = "block";
        stopFireAnimation();
        startSnowAnimation();
    }
}

// Lógica da Neve
function startSnowAnimation() {
    stopSnowAnimation();
    const canvas = document.getElementById("snowCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let snowflakes = [];
    for (let i = 0; i < 100; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3 + 2,
            d: Math.random() * 1 + 0.5
        });
    }

    snowInterval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (let f of snowflakes) {
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            f.y += f.d;
            if (f.y > canvas.height) f.y = -10;
        }
        ctx.fill();
    }, 30);
}

function stopSnowAnimation() {
    clearInterval(snowInterval);
}

// Lógica do Fogo
function startFireAnimation() {
    stopFireAnimation();
    const canvas = document.getElementById("fireCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let flames = [];
    for (let i = 0; i < 60; i++) {
        flames.push({
            x: Math.random() * canvas.width,
            y: canvas.height,
            r: Math.random() * 15 + 5,
            alpha: Math.random() * 0.5 + 0.5
        });
    }

    fireInterval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let f of flames) {
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, ${Math.floor(Math.random() * 100 + 50)}, 0, ${f.alpha})`;
            ctx.fill();
            
            f.y -= 2;
            f.alpha -= 0.01;
            if (f.alpha <= 0) {
                f.y = canvas.height;
                f.alpha = Math.random() * 0.5 + 0.5;
                f.x = Math.random() * canvas.width;
            }
        }
    }, 30);
}

function stopFireAnimation() {
    clearInterval(fireInterval);
}