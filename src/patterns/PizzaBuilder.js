class PizzaBuilder {
    constructor(){
        this.pizza = {
            base:null,
            sauce: null,
            size: null,
            cheese: null,
            toppings: []
        };
    }

    setBase(base){
        this.pizza.base = base;
        return this; 
    }

    setSause(sauce){
        this.pizza.sauce = sauce;
        return this;
    }

    addCheese(cheese){
        this.pizza.cheese = cheese;
        return this;
    }

    addToppings(topping){
        this.pizza.toppings.push(topping);
        return this;
    }

    setSize(size){
        this.pizza.size = size;
        return this;
    }

    build(){
        alert("Building your costom pizza")
        return this.pizza;
    }
}

export default PizzaBuilder;