//State - Track the delivery state of pizza

class PizzaDelivery {
    constructor() {
        this.state = new OrderedState();
    }

    updateState(state) { }

    nextState() { }

    previousState() { }
}

class DeliveryState {
    constructor(name){
        this.name = name;
    }

    next(){
        console.log(`Moving from ${this.name} to next State`);
    }

    previos(){
        console.log(`Moving from ${this.name} to previous state`);
    }

    updateUI(){
        console.log(`Updating UI ti show ${this.name} state`);
    }
}

class OrderedState extends DeliveryState{
    constructor(){
        super("Ordered");
    }

    next(delivery){
        console.log('Pizza being prepared');
        delivery.updateState(new PreparingState());
    }
}

class PreparingState extends DeliveryState{
    constructor(){
        super("preparing");
    }

    previos(delivery){
        console.log("Going back to ordered state");
        delivery.updateState(new OrderedState());
    }

    next(delivery){
        console.log('Pizza is in the oven');
        delivery.updateState(new BakingState());
    }
}

class BakingState extends DeliveryState{
    constructor(){
        super("baking");
    }

    previos(delivery){
        console.log("Going back to preparing state");
        delivery.updateState(new PreparingState());
    }

    next(delivery){
        console.log('Pizza is on the way!');
        delivery.updateState(new DeliveringState());
    }
}

class DeliveringState extends DeliveryState{
    constructor(){
        super("delivering");
    }

    previos(delivery){
        console.log("Going back to baking state");
        delivery.updateState(new BakingState());
    }

    next(delivery){
        console.log('Pizza has been delivered');
        delivery.updateState(new DeliveredState());
    }
}

class DeliveredState extends DeliveryState{
    constructor(){
        super("delivered");
    }

    previos(delivery){
        console.log("Going back to delivering state");
        delivery.updateState(new DeliveringState());
    }

}

export default PizzaDelivery;