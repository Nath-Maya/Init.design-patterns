//? OBJECT PRODUCT
class Product {
  constructor(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  //! METHODS PRODUCT
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCost() {
    return this.cost;
  }
}

//? CLASS SHOPPING CART
class ShoppingCart {
  //Static instance
  static instance = undefined;

  constructor() {
    this.products = [];
  }
  //  Llama internamente al constructor privado para crear una nueva clase.
  // - instancia y la guarda en un campo estático.
  // -
  // - Todas las siguientes llamadas a este método devuelven el objeto almacenado en caché

  //! METHODS SHOPPING CART

  //validar que la instancia exista, si no se crea una nueva
  static getInstance() {
    if (!ShoppingCart.instance) {
      ShoppingCart.instance = new ShoppingCart();
    }
    return ShoppingCart.instance;
  }

  getProducts() {
    return this.products;
  }

  //Adicionar producto al shopping cart en el array de productos
  add(product) {
    this.products.push(product);
  }

  deleteById(id) {
    this.products = this.products.filter((produt) => product.id !== id);
  }
}

//? EJECT APP SINGLETON

function appSingleton() {
  // Creo un shopping car nuevo, llamando la instancia
  const shoppingCar = ShoppingCart.getInstance();

  // First product
  shoppingCar.add(new Product(
      "BK001","Design Patterns: Elements of Reusable Object-Oriented Software",750));

  // Second product
  shoppingCar.add(new Product("BK002", "Introduction to Algorithms", 1000));

  console.log(shoppingCar)
}

appSingleton();
