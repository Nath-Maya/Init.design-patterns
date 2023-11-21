class Singleton {
  //instancia static
  static instance = undefined;

  constructor(version) {
    this.version = version;
  }

  static getInstance(version) {
    //Validar si la instancia existe, en caso de que no creara una nueva y retornarla
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }
    return Singleton.instance;
  }
}
function appSingleton() {
  const singleton1 = Singleton.getInstance("version-1");
  const singleton2 = Singleton.getInstance("version-2");
  const singleton3 = Singleton.getInstance("version-3");

  console.log(singleton1 === singleton2)
  console.log(singleton1 === singleton3) //indicar si ambas instancias apuntan al mismo objeto
}
appSingleton();
