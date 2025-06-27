class PizzaFactory {

    createPizza(type) {
        switch (type.toLowerCase()) {
            case "veggie":
                return {
                    name: "Veggie Delight",
                    ingredients: [
                        "tomato sauce",
                        "mozzarella",
                        "bell peppers", "mushroom",
                        "olives"
                    ],
                    price: 10
                }
            case "neapolitan":
                return {
                    name: "Neapolitan Style",
                    ingredients: [
                        "tomato sauce",
                        "garlic",
                        "basil", "oregano",
                        "virgin olive oil"
                    ],
                    price: 18
                }
            case "chicago":
                return {
                    name: "Chicago Deep-Dish",
                    ingredients: [
                        "onion",
                        "mozzarella",
                        "green peppers", "sausages",
                        "ground beef"
                    ],
                    price: 20
                }
            default:
                throw new Error(`Unknown pizza type: ${type}`);
        }
    }

}

export default PizzaFactory;