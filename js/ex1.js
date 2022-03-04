/* Tutorial 4
    Example 1 JavaScript code
*/
 class Square {
     constructor(side) {
         this.side = side;
     }

     perimeter(){
         return this.side * 4;
     }

     area(){
         return this.side*this.side
     }

     diagonal() {
         return Math.sqrt(2*this.side*this.side).toFixed(3);
     }
     describe() {
         return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`;
     }
 }

 const first = new Square(2);
 console.log(first.describe())

