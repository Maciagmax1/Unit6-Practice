class Player {
  public name: string;
  public jersey: number;
  constructor(name: string, jersey: number) {
    this.name = name;
    this.jersey = jersey;
  }
  public describeThePlayer(): string {
    return `${this.name} wears ${this.jersey}`;
  }
}

class TeamPlayer extends Player {
  team: string;
  constructor(name: string, jersey: number, team: string) {
    super(name, jersey);
    this.team = team;
  }
  describeThePlayer(): string {
    return `${super.describeThePlayer()} and plays for the ${this.team}`;
  }
}

const mj: TeamPlayer = new TeamPlayer("Michael Jordan", 23, "Bulls");
const lebron: TeamPlayer = new TeamPlayer("Lebron James", 6, "Lakers");
console.log(mj.describeThePlayer());
console.log(lebron.describeThePlayer());

class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle1: Circle = new Circle(5);
const circle2: Circle = new Circle(4);

console.log(circle1.getArea());
console.log(circle2.getArea());

class Bike {
  speed: number = 0;
  go(): void {
    this.speed++;
  }
}

class GearedBike extends Bike {
  gear: number = 1;
  shiftUp(): void {
    this.gear++;
  }
  shiftDown(): void {
    this.gear--;
  }
}

class ColorfulBike extends Bike {
  color: string;
  constructor(color: string) {
    super();
    this.color = color;
  }
}

class Counter {
  count: number = 0;
  tick(): void {
    this.count++;
  }
}

class FastCounter extends Counter {
  tick(): void {
    this.count += 10;
  }
}

// const myColorfulBike: ColorfulBike = new ColorfulBike("green");

// console.log(myColorfulBike.color);

// const coolGearedBike: GearedBike = new GearedBike();
// coolGearedBike.go();
// coolGearedBike.go();
// coolGearedBike.go();
// coolGearedBike.go();
// coolGearedBike.go();
// console.log(coolGearedBike.speed);
// console.log(coolGearedBike.gear);

export { Circle };
