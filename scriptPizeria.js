let Pizza ={
    estilo:"",
    tipoCorteza:"",
    tipoProteina: [],
    quesos:  [],
    tipoSalsa: [],
    salsas: []        
} 

function randomPizza(){
    let tiposPizza = [pizzaChicago,pizzaAMano,pizzaMarina,pizzaEspanola]
    let idSel = Math.floor(Math.random() * 3);
    
    let myPizza; 

    myPizza = tiposPizza[idSel]

    return myPizza;
}

function pizzaOven(estilo,tipoCorteza,tipoProteina,tipoSalsa,quesos,salsas){
    let myPizza = {};
    myPizza.estilo = estilo;
    myPizza.tipoCorteza =tipoCorteza;
    myPizza.tipoProteina = tipoProteina;
    myPizza.tipoSalsa = tipoSalsa;
    myPizza.quesos = quesos
    myPizza.salsas = salsas;

    return myPizza;
}

let pizzaChicago = pizzaOven("estilo chicago", "masa Piedra",["peperoni","salchichas"],["salsa tomate"],["mozarella"],["salsa agridulce"])
let pizzaAMano = pizzaOven("Lanzada a Mano", "marinara",["champiñones","aceitunas","cebollas"],["salsa tomate"],["mozarella","feta"],["salsa champiñon"])
let pizzaMarina = pizzaOven("Especialidad de la Casa", "masa piedra",["camarones","pulpo"],["salsa tomate"],["chedar","feta"],["salsa marina"])
let pizzaEspanola = pizzaOven("clasica", "masa normal",["chorizo","choricillo"],["salsa tomate"],["gauda"],["salsa especial"])


console.log(pizzaChicago);
console.log(pizzaAMano);
console.log(pizzaMarina);
console.log(pizzaEspanola);

console.log('********** Pizza Aleatoria ************');
console.log(randomPizza());