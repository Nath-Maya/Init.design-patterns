# 📌 Singleton

![singleton](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Singleton_UML_class_diagram.svg/1200px-Singleton_UML_class_diagram.svg.png)

Garantiza que una **clase** tenga una sola **instancia**, al tiempo que proporciona un punto de acceso global a esta instancia. 


1. Crear el constructor privado.
2. Crear un método static que guarde una instancia. 

Aquí hay algunos escenarios comunes y problemas para los cuales el patrón Singleton puede ser útil:

* **Configuración Global:** Cuando necesitas una única instancia que almacene configuraciones globales para toda la aplicación, como la configuración de conexión a una base de datos, configuraciones de seguridad, o cualquier otro dato compartido.
* **Gestión de Recursos Compartidos:** Si tienes un recurso compartido único que debe ser accesible desde múltiples partes del código, como un pool de conexiones, un sistema de registro, o un administrador de recursos.
* **Control de Acceso a Recursos:** En situaciones en las que necesitas un control centralizado de acceso a un recurso, como un contador que lleva el seguimiento de las instancias creadas o un servicio que gestiona conexiones a servicios externos.
* **Singleton en Patrones de Diseño más Complejos:** A veces, el patrón Singleton se utiliza como parte de un diseño más complejo, como en el patrón Monostate o en combinación con otros patrones de diseño creacionales.

### Ejemplo:

```shell
class InventarioVehiculos {
  // La instancia única se guarda como una propiedad estática de la clase
  static _instancia = null;

  constructor() {
    // Inicializaciones específicas, si es necesario
    this.vehiculos = [];
  }

  static obtenerInstancia() {
    // Verifica si ya existe una instancia, si no, crea una nueva
    if (!this._instancia) {
      this._instancia = new InventarioVehiculos();
    }
    return this._instancia;
  }

  agregarVehiculo(vehiculo) {
    this.vehiculos.push(vehiculo);
  }

  mostrarInventario() {
    for (const vehiculo of this.vehiculos) {
      vehiculo.mostrarInformacion();
    }
  }
}

// Creamos instancias de la clase InventarioVehiculos
const inventario1 = InventarioVehiculos.obtenerInstancia();
const inventario2 = InventarioVehiculos.obtenerInstancia();

// Ambas instancias apuntan al mismo objeto
console.log(inventario1 === inventario2); // true

// Creamos algunos vehículos (suponiendo que tengamos las clases Vehiculo y Automovil definidas)
const vehiculoGenerico = new Vehiculo("Generico", "Modelo");
const automovilRojo = new Automovil("Toyota", "Camry", "Rojo");

// Agregamos los vehículos al inventario usando cualquier instancia
inventario1.agregarVehiculo(vehiculoGenerico);
inventario2.agregarVehiculo(automovilRojo);

// Mostramos el inventario usando cualquier instancia
inventario1.mostrarInventario();
inventario2.mostrarInventario();


```