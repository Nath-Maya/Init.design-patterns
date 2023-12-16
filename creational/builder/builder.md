# ⚒️ Builder



![Builder](https://reactiveprogramming.io/_next/image?url=%2Fbooks%2Fpatterns%2Fimg%2Fpatterns-articles%2Fbuilder-diagram.png&w=3840&q=75)

✅ Abstracción de la Creación: Permite al cliente crear objetos sin conocer los detalles específicos de su implementación, abstrayendo la creación de objetos.

✅ Desacopla el Código del Cliente: El cliente puede trabajar con objetos a través de una interfaz común sin preocuparse por las clases concretas que están instancias.

✅ Flexibilidad en la Creación: Facilita la introducción de nuevas clases concretas sin cambiar el código d

Desventajas:

❌  Complejidad Adicional: Introducir una jerarquía de clases adicionales para la creación puede aumentar la complejidad del código.

❌ Aumento del Número de Clases: Puede llevar a un mayor número de clases en el sistema, especialmente si se utilizan fábricas co

❌ Confusión en la Selección de Fábricas: Puede haber confusión sobre qué fábrica

### Cuándo Usar:

Cuando un sistema debe ser independiente de cómo se crean, componen y representan sus objetos.

Cuando un sistema debe ser confiado

Cuando se necesita una jerarquía de clases para la creación de objetos.

### Ejemplo:

```shell
+----------------------+         +---------------------+
|    AbstractFactory   |         |   ConcreteFactory   |
+----------------------+         +---------------------+
| +createPersonaje()   |         | +createPersonaje()  |
+----------------------+         +---------------------+
                  \                      /
                   \                    /
                    \                  /
              +-------------+   +-------------+
              |  Personaje  |   |  Guerrero   |
              +-------------+   +-------------+
              | +atacar()    |   | +atacar()   |
              | +defender()  |   | +defender() |
              +-------------+   +-------------+



```

## Challenge

![imagen]()