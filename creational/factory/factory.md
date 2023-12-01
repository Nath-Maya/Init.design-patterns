# 🏭 Factory

El patrón de diseño Factory, también conocido como el patrón de fábrica, es un patrón creacional que proporciona una interfaz para la creación de objetos en una superclase, pero permite que las subclases alteren el tipo de objetos que se crearán. El objetivo principal de este patrón es abstraer el proceso de creación de objetos, desacoplar el código cliente de las clases concretas y proporcionar flexibilidad y extensibilidad en la creación de objetos.

![singleton](https://jhoniernegretem.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7f487237-5d87-478f-8863-da07f0fd2f32%2FUntitled.png?table=block&id=c0c97094-a7bc-414b-91d4-3716e4f37a70&spaceId=1c87ec7c-ec9a-43f7-8572-83b574655df1&width=1490&userId=&cache=v2)

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