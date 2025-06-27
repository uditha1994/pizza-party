import { useState } from "react";
import OVEN from "./patterns/PizzaOven";
import PizzaBuilder from "./patterns/PizzaBuilder";
import PizzaFactory from "./patterns/PizzaFactory";
import { WeirdPizza, PizzaAdapter } from "./patterns/PizzaAdapter";
import PizzaOrder, { Customer } from "./patterns/PizzaOrder";
import PizzaDelivery from "./patterns/PizzaDelivery";
import Pizza, { ExtraCheese, Pepperoni, Mushrooms } from "./patterns/PizzaDecorator";
import "./styles.css";

function App() {
  const [output, setOutput] = useState([]);

  const log = (message) => {
    setOutput((prev) => [...prev, message]);
  };

  const clearLog = () => {
    setOutput([]);
  };

  // Singleton demo
  const demoSingleton = () => {
    clearLog();
    log("=== Singleton Pattern Demo ===");
    log("There can be only one oven in our kitchen!");

    const oven1 = OVEN;
    const oven2 = OVEN;

    log(`Are both oven references the same? ${oven1 === oven2}`);

    oven1.turnOn();
    oven1.bake("Margherita");
  };

  // Builder demo
  const demoBuilder = () => {
    clearLog();
    log("=== Builder Pattern Demo ===");
    log("Let's build a custom pizza step by step!");

    const builder = new PizzaBuilder();
    const pizza = builder
      .setBase("thin crust")
      .setSauce("tomato")
      .addCheese("mozzarella")
      .addTopping("mushrooms")
      .addTopping("olives")
      .setSize("large")
      .build();

    log("Your custom pizza:");
    log(JSON.stringify(pizza, null, 2));
  };

  // Factory demo
  const demoFactory = () => {
    clearLog();
    log("=== Factory Pattern Demo ===");
    log("Let the factory create pizzas for us!");

    const factory = new PizzaFactory();
    const margherita = factory.createPizza("margherita");
    const pepperoni = factory.createPizza("pepperoni");

    log(`Margherita: $${margherita.price}`);
    log(`Pepperoni: $${pepperoni.price}`);
  };

  // Adapter demo
  const demoAdapter = () => {
    clearLog();
    log("=== Adapter Pattern Demo ===");
    log("Making a weird pizza work with our system");

    const weirdPizza = new WeirdPizza();
    const adapter = new PizzaAdapter(weirdPizza);

    log(adapter.bake());
  };

  // Observer demo
  const demoObserver = () => {
    clearLog();
    log("=== Observer Pattern Demo ===");
    log("Customers will be notified when pizza is ready");

    const order = new PizzaOrder();
    const customer1 = new Customer("Alice");
    const customer2 = new Customer("Bob");

    order.addCustomer(customer1);
    order.addCustomer(customer2);

    log("Updating order status...");
    order.updateStatus("preparing");
    order.updateStatus("baking");
    order.updateStatus("delivered");
  };

  // State demo
  const demoState = () => {
    clearLog();
    log("=== State Pattern Demo ===");
    log("Tracking pizza delivery status");

    const delivery = new PizzaDelivery();
    log("Current state: " + delivery.state.name);

    log("Moving to next state...");
    delivery.nextState();
    log("Moving to next state...");
    delivery.nextState();
    log("Moving to previous state...");
    delivery.previousState();
  };

  // Decorator demo
  const demoDecorator = () => {
    clearLog();
    log("=== Decorator Pattern Demo ===");
    log("Adding toppings to our pizza dynamically");

    let pizza = new Pizza();
    log(pizza.getDescription() + " $" + pizza.getCost());

    log("Adding extra cheese...");
    pizza = new ExtraCheese(pizza);
    log(pizza.getDescription() + " $" + pizza.getCost());

    log("Adding pepperoni...");
    pizza = new Pepperoni(pizza);
    log(pizza.getDescription() + " $" + pizza.getCost());

    log("Adding mushrooms...");
    pizza = new Mushrooms(pizza);
    log(pizza.getDescription() + " $" + pizza.getCost());
  };

  return (
    <div className="app">
      <h1>🍕 Pizza Party Design Patterns 🎉</h1>
      <div className="buttons">
        <button onClick={demoSingleton}>Singleton</button>
        <button onClick={demoBuilder}>Builder</button>
        <button onClick={demoFactory}>Factory</button>
        <button onClick={demoAdapter}>Adapter</button>
        <button onClick={demoObserver}>Observer</button>
        <button onClick={demoState}>State</button>
        <button onClick={demoDecorator}>Decorator</button>
        <button onClick={clearLog}>Clear</button>
      </div>
      <div className="output">
        <h2>Console Output:</h2>
        <div className="output-content">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;