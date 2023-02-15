/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.querySelector("#output");
output.style.marginTop = "40px";
output.style.display = "flex";
output.style.flexDirection = "column";
output.style.gap = "30px";

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


function createCard(brand, model) {
    const carCard = document.createElement("div");
    const carBrand = document.createElement("h2");
    const modelUl = document.createElement("ul");
    const modelh3 = document.createElement("h3");
    output.append(carCard);
    carCard.append(carBrand, modelh3, modelUl);

    for (let i = 0; i < model.length; i++) {
        const modelLiItem = document.createElement("li");
        
        modelUl.append(modelLiItem);
        modelLiItem.textContent = model[i];
        console.log(model[i])
        modelLiItem.style.fontSize = "20px";
        modelLiItem.style.textAlign = "center";
    }
    modelh3.textContent = `Models:`;
    modelh3.style.fontSize = "24px";
    modelh3.style.borderBottom = "1px solid black";
    modelh3.style.paddingBottom = "4px";
    carBrand.textContent = `Brand: ${brand}`;
    modelUl.style.listStyleType = "none";
    carCard.style.backgroundColor = "#E6EFE9";
    carCard.style.padding = "36px";
    carCard.style.borderRadius = "16px"
    carCard.style.display = "flex";
    carCard.style.flexDirection = "column";
    carCard.style.alignItems = "center"
    carCard.style.gap = "24px";
    carBrand.style.fontSize = "30px";
    modelUl.style.display = "flex";
    modelUl.style.flexDirection = "column";
    modelUl.style.gap = "8px";
}