//Observer Pattern
// Observer - Notify customers when their pizza is ready
class PizzaOrder {
    constructor() {
        this.customers = [];
        this.orderStatus = "not started";
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    removeCustomer(customer) {
        this.customers = this.customers.filter((c) => c !== customer);
    }

    notifyCustomers() {
        this.customers.forEach((customer) =>
            customer.update(this.orderStatus)
        );
    }

    updateStatus(status) {
        this.orderStatus = status;
        console.log(`Order status changed to: ${status}`);
        this.notifyCustomers();
    }
}

// Customer class that observes the order
export class Customer {
    constructor(name) {
        this.name = name;
    }

    update(status) {
        console.log(
            `${this.name} says: "My pizza order is now: ${status}"`
        );
    }
}

export default PizzaOrder;