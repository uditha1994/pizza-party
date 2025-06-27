// Decorator - Add extra toppings to our pizza dynamically
class Pizza {
    constructor() {
        this.description = "Plain pizza";
        this.cost = 5;
    }

    getDescription() {
        return this.description;
    }

    getCost() {
        return this.cost;
    }
}

// Base decorator
class PizzaDecorator {
    constructor(pizza) {
        this.pizza = pizza;
    }

    getDescription() {
        return this.pizza.getDescription();
    }

    getCost() {
        return this.pizza.getCost();
    }
}

// Concrete decorators
export class ExtraCheese extends PizzaDecorator {
    getDescription() {
        return `${this.pizza.getDescription()}, extra cheese`;
    }

    getCost() {
        return this.pizza.getCost() + 1.5;
    }
}

export class Pepperoni extends PizzaDecorator {
    getDescription() {
        return `${this.pizza.getDescription()}, pepperoni`;
    }

    getCost() {
        return this.pizza.getCost() + 2;
    }
}

export class Mushrooms extends PizzaDecorator {
    getDescription() {
        return `${this.pizza.getDescription()}, mushrooms`;
    }

    getCost() {
        return this.pizza.getCost() + 1;
    }
}

export default Pizza;