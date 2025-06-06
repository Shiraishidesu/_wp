// 向量物件加減與內積：class Vector
class Vector {
  constructor(values) {
    this.values = values;
  }

  add(other) {
    return new Vector(this.values.map((v, i) => v + other.values[i]));
  }

  sub(other) {
    return new Vector(this.values.map((v, i) => v - other.values[i]));
  }

  dot(other) {
    return this.values.reduce((sum, v, i) => sum + v * other.values[i], 0);
  }

  toString() {
    return `[${this.values.join(", ")}]`;
  }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);

console.log(a.add(b).sub(b).dot(b)); 
// 32