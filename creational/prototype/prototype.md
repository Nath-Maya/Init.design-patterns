# 🤖 Prototype

El patrón Prototype es un patrón de diseño creacional que se utiliza para crear objetos duplicándolos a partir de un objeto existente, conocido como prototipo. En lugar de crear un objeto desde cero, se clona un prototipo existente y se modifica según sea necesario.

###Estructura del Patrón Builder:
- **Builder (Constructor):** Define una interfaz abstracta para crear partes de un producto.
- **ConcreteBuilder (Constructor Concreto):** Implementa la interfaz Builder y construye y ensambla partes del producto.
- **Director:** Construye un objeto usando la interfaz Builder.
- **Producto:** Representa el objeto complejo que se está construyendo.

![Prototype](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns-articles%2Fprototype-diagram.png&w=3840&q=75)

**Ventajas:**

✅ **Flexibilidad en la Creación de Objetos:** Permite crear nuevos objetos duplicando objetos existentes, lo que facilita la creación de objetos complejos o con configuraciones específicas.

✅ **Mejora el Rendimiento:** La clonación de objetos es a menudo más eficiente que crear nuevos objetos desde cero, especialmente si la inicialización del objeto es costosa.

✅ **Aislamiento de Detalles de Implementación:** El cliente que utiliza el patrón Prototype no necesita conocer los detalles de implementación del objeto que está clonando.

✅ **Facilita la Extensión de la Lógica de Creación:** Puedes crear subclases del prototipo existente para introducir variaciones y extensiones en la lógica de creación.


**Desventajas:**

❌  **Complejidad Potencial:** Al introducir múltiples prototipos y la capacidad de clonar objetos, el código puede volverse más complejo y difícil de entender.

❌ **Manejo de Referencias:** Si el objeto que se clona contiene referencias a otros objetos, es necesario manejar adecuadamente esas referencias para evitar problemas inesperados.


### Cuándo Usar:

Configuración Compleja de Objetos: Utiliza el patrón Prototype cuando la configuración de objetos es compleja y la creación directa de objetos sería impracticable o ineficiente.

Variaciones en la Creación de Objetos: Úsalo cuando necesites crear objetos con variaciones, pero quieras evitar la creación de una jerarquía de clases para cada variación.

Mejora del Rendimiento: Úsalo cuando la creación de un objeto desde cero es más costosa en términos de rendimiento que la clonación de un prototipo existente.

Desacoplamiento de Cliente y Objeto a Crear: Úsalo cuando desees desacoplar el código que utiliza el objeto y el proceso de creación del objeto. El cliente simplemente clona el prototipo sin preocuparse por cómo se crea internamente.

### Ejemplo:

```shell
// Prototipo de Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Método para mostrar información de la persona
Person.prototype.displayInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Factory de personas que utiliza el patrón Prototype
function PersonFactory() {
  this.prototypePerson = new Person("Default", 0);
}

// Método para clonar una nueva instancia de persona
PersonFactory.prototype.createPerson = function (name, age) {
  const newPerson = Object.create(this.prototypePerson);
  newPerson.name = name || this.prototypePerson.name;
  newPerson.age = age || this.prototypePerson.age;
  return newPerson;
};

// Uso del patrón Prototype
const personFactory = new PersonFactory();

const person1 = personFactory.createPerson("Alice", 25);
const person2 = personFactory.createPerson("Bob", 30);

person1.displayInfo(); // Output: Name: Alice, Age: 25
person2.displayInfo(); // Output: Name: Bob, Age: 30


```
