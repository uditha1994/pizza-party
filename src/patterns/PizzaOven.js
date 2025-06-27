// Singleton Pattern

class PizzaOven {
    constructor(){
        if(PizzaOven.instance){
            return PizzaOven.instance;
        }
        this.isOn = false;
        this.temperature = 0;
        PizzaOven.instance = this;
    }

    turnOn(){
        this.isOn = true;
        this.temperature = 232;
        alert("Oven is heating..🔥");
    }

    bake(pizza){
        if(!this.isOn){
            alert("Please turn on oven first!!");
            return;
        }
        alert(`🍕 Baking ${pizza} at ${this.temperature}`);
    }

}

const OVEN = new PizzaOven(); // there can be only one Oven
Object.freeze(OVEN); //prevent modification

export default OVEN;