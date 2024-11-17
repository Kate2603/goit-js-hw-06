const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

// Виклики методів
customer.setDiscount(0.15);

// Вивід в консоль customer.getDiscount()
console.log(customer.getDiscount()); // 0.15

const discount = customer.getDiscount(); // 0.15

customer.addOrder(5000, 'Steak');

// Вивід в консоль customer.getBalance()
console.log(customer.getBalance()); // 19750

const balance = customer.getBalance(); // 19750

// Вивід в консоль customer.getOrders()
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

const orders = customer.getOrders(); // ["Burger", "Pizza", "Salad", "Steak"]

// Виведення інформації в HTML
const customerInfoDiv = document.getElementById('customer-info');
customerInfoDiv.innerHTML = `
  <p>Current Discount: ${discount}</p>
  <p>Current Balance: ${balance}</p>
  <p>Current Orders: ${orders.join(', ')}</p>
`;
