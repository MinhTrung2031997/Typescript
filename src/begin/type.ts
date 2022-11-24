type Point = {x: number, y: number}

const center: Point = {
    x: 5,
    y: 5
} 

function add(a: number, b: number) : number {
    return a+b
}

function log(message: string): void {
    console.log("LOG", message);
}

function sum(...values: number[]) {
    return values.reduce((pre, curr) => {
        return pre + curr;
    })
}

const a =  sum(5,6,8)

console.log(a)
