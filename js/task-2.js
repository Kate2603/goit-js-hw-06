class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Ініціалізація екземпляра та виклики методів для перевірки
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

// Вивід в консоль storage.getItems()
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

const storageInfoDiv = document.getElementById('storage-info');

// Вивід інформації на веб-сторінку
storageInfoDiv.innerHTML += `<p>Initial items: ${storage
  .getItems()
  .join(', ')}</p>`; // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
storageInfoDiv.innerHTML += `<p>After adding Droid: ${storage
  .getItems()
  .join(', ')}</p>`; // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// Вивід в консоль storage.getItems()
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
storageInfoDiv.innerHTML += `<p>After removing Prolonger: ${storage
  .getItems()
  .join(', ')}</p>`; // ["Nanitoids", "Antigravitator", "Droid"]

// Вивід в консоль storage.getItems()
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
