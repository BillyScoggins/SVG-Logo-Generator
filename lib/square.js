// const obj = {
//     name: "fido",
//     age: 5,
//     bark: function(){
//         console.log("woof")
//     },
//     diet: {
//         morning: "dog food",
//         luncuh: " "
//     },
//     toys: ["ball", ""]
// }

const Shape = require ("./shapes");

class Square extends Shape {
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill = "${this.color}" />`
    }
}
module.exports = Square

