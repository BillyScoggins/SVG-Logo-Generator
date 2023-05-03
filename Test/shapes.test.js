

 const Circle = require("../lib/circle")
 const Triangle = require("../lib/triangle")
const Square = require("../lib/square")


 describe("Circle", () => {
     test("should render a red circle element", () => {
         const circle = new Circle();
         circle.setColor("blue");
         expect(circle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

     })
     
 })
 describe("Triangle", () => {
     test("should render a blue triangle element", () => {
         const triangle = new Triangle();
         triangle.setColor("blue");
         expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

     })
    
 })

describe("Square", () => {
    test("should render a red square element", () => {
        const square = new Square();
        square.setColor("red");
        expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill = "red" />');

    })
     
})

 
