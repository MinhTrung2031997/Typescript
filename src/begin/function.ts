type Add = (a: number, b: number) => number
let addFunc: Add

addFunc = function (a: number, b: number): number {
    return a+ b
}
console.log(addFunc(5,6));
