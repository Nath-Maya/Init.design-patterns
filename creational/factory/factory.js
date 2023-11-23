// Abstract Factory
class AbstractFactory {
   createPersonaje() {
     throw new Error("Método abstracto createPersonaje() no implementado.");
   }
 }
 
 // Concrete Factory
 class ConcreteFactory extends AbstractFactory {
   createPersonaje() {
     return new Guerrero();
   }
 }
 
 // Product Interface
 class Personaje {
   atacar() {
     throw new Error("Método abstracto atacar() no implementado.");
   }
 
   defender() {
     throw new Error("Método abstracto defender() no implementado.");
   }
 }
 
 // Concrete Product
 class Guerrero extends Personaje {
   atacar() {
     console.log("El Guerrero ataca con su espada.");
   }
 
   defender() {
     console.log("El Guerrero levanta su escudo para defenderse.");
   }
 }
 
 // Cliente
 class Juego {
   constructor(factory) {
     this.factory = factory;
     this.personaje = this.factory.createPersonaje();
   }
 
   jugar() {
     this.personaje.atacar();
     this.personaje.defender();
   }
 }
 
 // Uso del Factory
 const juegoConGuerrero = new Juego(new ConcreteFactory());
 juegoConGuerrero.jugar();
 