const Shape = require("./shapes")



class Circle extends Shape {
    render(){
        return `<circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>`
    }
}
module.exports = Circle