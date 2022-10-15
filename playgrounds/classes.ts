class Vehicle {
  constructor(private color: string, private price: number) {
    this.color = color;
    this.price = price;
  }

  protected getColor() {
    console.log(this.color);
  }

  protected getPrice() {
    console.log(this.price);
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color, 600000);
  }

  getOptionDataCar() {
    console.log(this.wheels);
  }

  getAllDataCar() {
    this.getColor();
    this.getPrice();
    this.getOptionDataCar();
  }
}

const car = new Car(4, "pink");

car.getAllDataCar();
