function cambiarFigura() {
    const figura = document.getElementById("figura").value;
    const ladoContainer = document.getElementById("lado-container");
    const baseContainer = document.getElementById("base-container");
    const alturaContainer = document.getElementById("altura-container");
    const radioContainer = document.getElementById("radio-container");

    ladoContainer.style.display = "none";
    baseContainer.style.display = "none";
    alturaContainer.style.display = "none";
    radioContainer.style.display = "none";

    if (figura === "cuadrado" || figura === "rectangulo") {
        ladoContainer.style.display = "block";
        baseContainer.style.display = figura === "rectangulo" ? "block" : "none";
        alturaContainer.style.display = figura === "rectangulo" ? "block" : "none";
    } else if (figura === "circulo") {
        radioContainer.style.display = "block";
    }
}

function calcular() {
    const figura = document.getElementById("figura").value;
    const lado = parseFloat(document.getElementById("lado").value) || 0;
    const base = parseFloat(document.getElementById("base").value) || 0;
    const altura = parseFloat(document.getElementById("altura").value) || 0;
    const radio = parseFloat(document.getElementById("radio").value) || 0;

    let area = 0;
    let perimetro = 0;

    if (figura === "cuadrado") {
        area = lado * lado;
        perimetro = 4 * lado;
    } else if (figura === "rectangulo") {
        area = base * altura;
        perimetro = 2 * (base + altura);
    } else if (figura === "circulo") {
        area = Math.PI * radio * radio;
        perimetro = 2 * Math.PI * radio;
    }

    mostrarResultado(area, perimetro);
}

function mostrarResultado(area, perimetro) {
    document.getElementById("area").textContent = "Área: " + area.toFixed(2);
    document.getElementById("perimetro").textContent = "Perímetro: " + perimetro.toFixed(2);
}
