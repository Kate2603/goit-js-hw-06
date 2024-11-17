class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Ініціалізація екземпляра та виклики методів для перевірки коректності роботи
const builder = new StringBuilder('.');

// Вивід в консоль builder.getValue(".")
console.log(builder.getValue()); // "."

const outputDiv = document.getElementById('task-3-output'); // Див для виводу на сторінку
outputDiv.innerHTML += `<p>${builder.getValue()}</p>`; // Вивід на сторінку

builder.padStart('^');

// Вивід в консоль builder.getValue("^")
console.log(builder.getValue()); // "^"
outputDiv.innerHTML += `<p>${builder.getValue()}</p>`; // Вивід на сторінку

builder.padEnd('^');

// Вивід в консоль builder.getValue("^.^")
console.log(builder.getValue()); // "^.^"
outputDiv.innerHTML += `<p>${builder.getValue()}</p>`; // Вивід на сторінку

builder.padBoth('=');

// Вивід в консоль builder.getValue("=^.^=")
console.log(builder.getValue()); // "=^.^="
outputDiv.innerHTML += `<p>${builder.getValue()}</p>`; // Вивід на сторінку
