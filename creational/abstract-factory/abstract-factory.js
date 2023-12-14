// STEP 1
//Declare base products classes/interfaces for each product in catalogo
class MastodonCar {
   useGPS() {
     throw new Error('Method not implemented!');
   }
 }
 
 class RhinoCar {
   useGPS() {
     throw new Error('Method not implemented!');
   }
 }
 
 // STEP 2
 //Implement concrete products classes that inherits/implements
 //base products classes/interfaces, the number of concrete prodcuts
 //will depend on the number of families.
 class MastodonSedanCar extends MastodonCar {
   /** @override useGPS() method */
   useGPS() {
     console.log('[SEDAN] Mastodon GPS');
   }
 }
 
 class MastodonHatchbackCar extends MastodonCar {

   useGPS() {
     console.log('[HATCHBACK] Mastodon GPS');
   }
 }
 
 class RhinoSedanCar extends RhinoCar {

   useGPS() {
     console.log('[SEDAN] Rhino GPS');
   }
 }
 
 class RhinoHatchbackCar extends RhinoCar {

   useGPS() {
     console.log('[HATCHBACK] Rhino GPS');
   }
 }
 
 // STEP 3
 //Declare abstract factory class/interface that declare creation
 //methods for each base product. The return value could be the base
 //products types or concrete products types.
 class CarAbstractFactory {
   createMastodon() {
     throw new Error('Method not implemented!');
   }
 
   createRhino() {
     throw new Error('Method not implemented!');
   }
 }
 
 // STEP 4
//Create concrete factories that implements/inherits from the
 //abstract factory behaviour and implements all the products creation
 //methods. The number of concrete factories will depend of the number
//of product families.
 class SedanCarFactory {

   createMastodon() {
     return new MastodonSedanCar();
   }
 

   createRhino() {
     return new RhinoSedanCar();
   }
 }
 
 class HatchbackCarFactory {

   createMastodon() {
     return new MastodonHatchbackCar();
   }
 

   createRhino() {
     return new RhinoHatchbackCar();
   }
 }
 

 function appAbstractFactory(factory) {
   console.log('--- [JS] Calling appAbstractFactory ---\n');
   if (!factory) {
     console.log('--- No factory provided ---');
     return;
   }
 
   const mastodon = factory.createMastodon();
   const rhino = factory.createRhino();
 
   mastodon.useGPS();
   rhino.useGPS();
 }
 

 appAbstractFactory(new HatchbackCarFactory());
 appAbstractFactory(new SedanCarFactory());
 

 function createFactory(name) {
   const factories = {
     sedan: SedanCarFactory,
     hatchback: HatchbackCarFactory,
   };
 
   const Factory = factories[name];
   return new Factory();
 }
 
 
 appAbstractFactory(createFactory('hatchback'));
 appAbstractFactory(createFactory('sedan'));