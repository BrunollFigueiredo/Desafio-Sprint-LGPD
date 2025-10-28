

let carArr = [];
const infos = ['image', 'modelo', 'alturaCacamba', 'alturaVeiculo', 'alturaSolo', 'capacidadeCarga', 'motor', 'potencia', 'volumeCacamba', 'roda','preco'];
class Car {


    constructor(image, modelo, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, preco) {
        this.image = image;
        this.modelo = modelo;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.preco = preco;
    }
}


function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].modelo === carClass.modelo)
            return i;
    }
    return -1;
}



function SetCarToCompare(el, carClass) {

    if (carClass instanceof Car) {

        let i = GetCarArrPosition(carArr, carClass)

        if (el.checked) {

            carArr.push(carClass);
            return carArr[i]

        } else {

            carArr.splice(i, 1)

        }
    } else {
        throw "You need set a Car Class";
    }
}



function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    } else if (carArr.length > 2) {
        alert("Só pode marcar 2 carros para apresentar a comparação");
        return;
    }
    console.log('botao clicado')
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}


function HideCompare() {
    document.getElementById("compare").style.display = "none";
}


 
function UpdateCompareTable() {



carArr.forEach((carro, i) => {

    infos.forEach((info) => {

        const idSelect = document.getElementById(`compare_${info}_${i}`)

        if (!idSelect) return; 

        if(info == 'image'){
            
            idSelect.innerHTML = `<img src="${carro[info]}" alt="Foto do carro" width="150">`;
        } else {
            
            idSelect.textContent = carro[info];
        }
    })
}) 

}