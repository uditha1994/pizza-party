class WeirdPizza {
    constructor() {
        this.description = " A pizza with pineapple";
        this.cooktime = "15 min";
    }

    weirdBake() {
        return `Baking with wierd pizza for ${this.cooktime}`;
    }
}

class PizzaAdapter {
    constructor(weirdPizza) {
        this.weirdPizza = weirdPizza;
    }

    bake() {
        const result = this.weirdPizza.weirdBake();
        return `${result} (adapted to normal pizza baking process)`;
    }
}

export { WeirdPizza, PizzaAdapter };