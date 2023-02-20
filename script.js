/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.querySelector("#output");

function getDataAndDisplay() {
    fetch("cars.json")
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const brand = data[i].brand;
                const models = data[i].models;
                createCard(brand, models);
            }
        })
        .catch(error => alert(error));
}

function createCard(brand, model) {
    const carCard = document.createElement("div");
    const carBrand = document.createElement("h2");
    const modelUl = document.createElement("ul");
    const modelh3 = document.createElement("h3");
    carCard.classList.add("car-card");
    modelUl.classList.add("model-ul");
    modelh3.classList.add("model-h3");
    modelh3.textContent = "Models:";
    carBrand.style.fontSize = "30px";
    carBrand.textContent = `Brand: ${brand}`;

    output.append(carCard);
    carCard.append(carBrand, modelh3, modelUl);
    
    for (let i = 0; i < model.length; i++) {
        const modelLiItem = document.createElement("li");
        modelUl.append(modelLiItem);
        modelLiItem.textContent = model[i];
        modelLiItem.style.fontSize = "20px";
        modelLiItem.style.textAlign = "center";
    }
}

getDataAndDisplay();