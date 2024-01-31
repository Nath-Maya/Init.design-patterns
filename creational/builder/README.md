# ⚒️ Builder

El patrón de diseño Builder se utiliza para construir un objeto complejo paso a paso. Este patrón separa la construcción de un objeto de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones.

###Estructura del Patrón Builder:
- **Builder (Constructor):** Define una interfaz abstracta para crear partes de un producto.
- **ConcreteBuilder (Constructor Concreto):** Implementa la interfaz Builder y construye y ensambla partes del producto.
- **Director:** Construye un objeto usando la interfaz Builder.
- **Producto:** Representa el objeto complejo que se está construyendo.

![Builder](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns-articles%2Fbuilder-diagram.png&w=3840&q=75)

**Ventajas:**

✅ **Separación de preocupaciones:** Permite construir un objeto paso a paso y aísla el código de construcción del código de representación

✅ **Reutilización de código:** Los mismos pasos de construcción pueden ser utilizados para construir diferentes representaciones del objeto.

✅ **Facilita la variabilidad:** Puedes tener diferentes Builders para crear productos con variaciones sin cambiar el código del Director.

**Desventajas:**

❌  **Complejidad adicional:** Agrega más clases al sistema, lo que puede ser innecesario si el objeto que estás construyendo no es muy complejo ni su construcción varía significativamente.


### Cuándo Usar:

Cuando quieras evitar un constructor telescópico. 

Cuando se quiera tener control del proceso de creación.

### Ejemplo:

```shell
// Producto
class Car {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }

  showInfo() {
    console.log(`Car parts: ${this.parts.join(', ')}`);
  }
}

// Builder abstracto
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  build() {
    return this.car;
  }

  addWheels() {}
  addEngine() {}
  addInterior() {}
}

// Constructores concretos
class SedanCarBuilder extends CarBuilder {
  addWheels() {
    this.car.addPart('Sedan Wheels');
  }

  addEngine() {
    this.car.addPart('Sedan Engine');
  }

  addInterior() {
    this.car.addPart('Luxury Interior');
  }
}

class SUVCarBuilder extends CarBuilder {
  addWheels() {
    this.car.addPart('SUV Wheels');
  }

  addEngine() {
    this.car.addPart('Powerful SUV Engine');
  }

  addInterior() {
    this.car.addPart('Standard Interior');
  }
}

// Director
class CarDirector {
  constructor(builder) {
    this.builder = builder;
  }

  construct() {
    this.builder.addWheels();
    this.builder.addEngine();
    this.builder.addInterior();
    return this.builder.build();
  }
}

// Uso
const sedanBuilder = new SedanCarBuilder();
const suvBuilder = new SUVCarBuilder();

const sedanDirector = new CarDirector(sedanBuilder);
const suvDirector = new CarDirector(suvBuilder);

const luxurySedan = sedanDirector.construct();
const standardSUV = suvDirector.construct();

luxurySedan.showInfo(); // Output: Car parts: Sedan Wheels, Sedan Engine, Luxury Interior
standardSUV.showInfo(); // Output: Car parts: SUV Wheels, Powerful SUV Engine, Standard Interior


```
