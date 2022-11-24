class Queue {
    data: any = []
    push(item: any ){this.data.push(item)}
    pop(){return this.data.shift()}
}

class NumberQueue extends Queue {
    push(item: number) {
        super.push(item)
    }
    pop() {
        return super.pop()
    }
}

class StringQueue extends Queue {
    push(item: string) {
        super.push(item)
    }
    pop() {
        return super.pop()
    }
}


/** To avoid above case duplicate code we should use the generics */

class GenericsQueue<T> {
    data: T[] = []
    push(item: T) {this.data.push(item)}
    pop(){ return this.data}
}

const stringQueue = new GenericsQueue()
stringQueue.push(123);
stringQueue.push(456);
stringQueue.push("aaaa");


console.log(stringQueue.pop());
