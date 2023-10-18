function calculoCirculo(){
    let raioCirculo = parseFloat(document.getElementById("raio").value);
    if(raioCirculo > 0){
        let areaCirculo = (raioCirculo * raioCirculo) * Math.PI;
        document.getElementById("resultado").textContent = "Área do Círculo: " + areaCirculo.toFixed(2) + "m²";
    }else{
        alert("Informe um valor maior que 0");
    }
}

function calculoTronco(){
    let baseMaior = parseFloat(document.getElementById("baseMaior").value);
    let baseMenor = parseFloat(document.getElementById("baseMenor").value);
    let areaLateral = parseFloat(document.getElementById("areaLateral").value);
    
    if(baseMaior > 0 && baseMenor > 0 && areaLateral > 0 && baseMaior > baseMenor){
        let areaTronco = baseMaior + baseMenor + areaLateral;
        document.getElementById("resultado").textContent = "Área do Tronco da Pirâmide: " + areaTronco.toFixed(2) + "m²";
    }else if(baseMenor > baseMaior){
        alert("O valor informado na base menor deve ser inferior ao da base maior")
    }else{
        alert("Um dos três valores informados é inválido");
    }
}

function calculoRetangulo(){
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if(base > 0 && altura > 0){
        let areaRetangulo = base * altura;
        document.getElementById("resultado").textContent = "Área do Retângulo: " + areaRetangulo.toFixed(2) + "m²";
    }else{
        alert("Um dos valores informados é inválido");
    }
}

function calculoCoroa(){
    let raioMaior = parseFloat(document.getElementById("raioMaior").value);
    let raioMenor = parseFloat(document.getElementById("raioMenor").value);

    if (raioMaior > 0 && raioMenor > 0 && raioMaior > raioMenor){
        let areaCoroa = Math.PI * (Math.pow(raioMaior, 2) - Math.pow(raioMenor, 2));
        document.getElementById("resultado").textContent = "Área da Coroa do Círculo: " + areaCoroa.toFixed(2) + "m²";
    }else if (raioMaior < raioMenor){
        alert("O valor informado no raio menor deve ser inferior ao do raio maior")
    }else{
        alert("Um dos valores informados é inválido");
    }
}

function calculoTrapezoideIrregular(){
    let baseMaior = parseFloat(document.getElementById("baseMaior").value);
    let baseMenor = parseFloat(document.getElementById("baseMenor").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (baseMaior > 0 && baseMenor > 0 && altura > 0 && baseMaior > baseMenor){
        let areaTrapezoideIrregular = ((baseMaior + baseMenor) * altura) / 2;
        document.getElementById("resultado").textContent = "Área do Trapezóide Irregular: " + areaTrapezoideIrregular.toFixed(2) + "m²";
    }else if (baseMaior < baseMenor){
        alert("O valor informado na base menor deve ser inferior ao da base maior")
    }else{
        alert("Um dos valores informados é inválido");
    }
}

function calculoPoligono(){

    let numeroLados = parseInt(document.getElementById("numeroLados").value);
    let lado = parseFloat(document.getElementById("lado").value);

    if(numeroLados === 5 && lado > 0){
        apotema = lado / (2 * Math.tan(Math.PI/numeroLados));
        areaTriangulo = (lado * apotema)/2;
        areaPoligono = areaTriangulo * numeroLados;

        document.getElementById("resultado").textContent = "Área do Pentágono: " + areaPoligono.toFixed(2) + "m²";
    }else if(numeroLados === 6 && lado > 0){
        apotema = lado / (2 * Math.tan(Math.PI/numeroLados));
        areaTriangulo = (lado * apotema)/2;
        areaPoligono = areaTriangulo * numeroLados;

        document.getElementById("resultado").textContent = "Área do Hexágono: " + areaPoligono.toFixed(2) + "m²";
    }else if(numeroLados === 7 && lado > 0){
        apotema = lado / (2 * Math.tan(Math.PI/numeroLados));
        areaTriangulo = (lado * apotema)/2;
        areaPoligono = areaTriangulo * numeroLados;

        document.getElementById("resultado").textContent = "Área do Héptagono: " + areaPoligono.toFixed(2) + "m²";
    }else{
        alert("O valor informado do lado é inválido");
    }
}

function calculoQuadrado(){
    let lado = parseFloat(document.getElementById("lado").value);

    if(lado > 0){
        let areaQuadrado = lado * lado;
        document.getElementById("resultado").textContent = "Área do quadrado: " + areaQuadrado.toFixed(2) + "m²";
    }
}

function calculoSetor(){
    let raio = parseFloat(document.getElementById("raio").value);
    let angulo = parseFloat(document.getElementById("angulo").value);

    let areaSetor = (angulo / 360) * Math.PI * Math.pow(raio, 2);
    let raioTriangulo = raio * Math.sin((angulo / 2) * (Math.PI / 180));
    let areaTriangulo = 0.5 * Math.pow(raioTriangulo, 2);
    let areaCirculoMaior = Math.PI * Math.pow(raio, 2);

    if(raio > 0 && angulo > 0){
        areaTotalSetor = areaSetor - areaTriangulo + areaCirculoMaior;
        document.getElementById("resultado").textContent = "Área do Setor Circular: " + areaTotalSetor.toFixed(2) + "m²";
    }else{
        alert("Um dos valores informados é inválido");
    }
}




