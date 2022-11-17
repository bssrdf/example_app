class Deque {
    constructor(k) {
        this.data = new Array(k); // Or Array, but that really does not add anything useful
        this.capacity = k;
        this.size = 0;
        this.tail = 0;
        this.head = k-1; 
    }

    getdata() {
        let start = this.head+1 == this.capacity ? this.capacity : this.head+1;
        let end = this.tail 
        return this.data.slice(start).concat(this.data.slice(0, end));
    }

    // getsize() {
    //     return this.size;        
    // }

    insertLast(value) {
        if (this.full()){
            this.deleteFront()
        }
        this.data[ this.tail ] = value;
        this.tail = (this.tail + 1) % this.capacity;
        this.size++;
    }

    insertFront(value) {
        if (this.full()){
            this.deleteLast()
        }
        this.data[ this.head ] = value;
        this.head = (this.head - 1) % this.capacity;
        this.size++;
    }

    deleteFront() {
        if (this.size > 0){
            this.head = (this.head+1) % this.capacity
            this.size--;
        }
    }

    deleteLast() {
        if (this.size > 0){
            this.tail = (this.tail-1) % this.capacity
            this.size--;
        }
    }

    full() {
        return this.size === this.capacity;
    }


}

module.exports.Deque = Deque;