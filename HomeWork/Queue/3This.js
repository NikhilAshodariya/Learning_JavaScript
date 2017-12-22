/**
  * In this solution we the language feature of this reference.
  * The previous solution is implementated at language level.
  * This solution solves both the problem of one to one mapping of object
  * and function and getting a feeling of coupling of object and function
  *
  * This solution is also not that efficient and can be made more
  * efficient.
  * Here we need to write the code for object creation again and again
  * So this part can be optimized.
*/

function enQueue(data) {
  if (this.front == -1) {
    this.front++;
    this.rear++;
  } else {
    this.rear++;
  }
  this.data[this.rear] = data;
}

function deQueue() {
  if (this.rear == this.front) {
    this.rear = -1;
    this.front = -1;
  }
  this.front++;
}

function print() {
  console.log("-----------Printing Queue---------------");
  for (var i = this.front; i <= this.rear; i++) {
    console.log(this.data[i]);
  }
  console.log("----------End of Printing------------");
}

var queue_1 = {
  front: -1,
  rear: -1,
  data: [],
  enQueue: enQueue,
  deQueue: deQueue,
  print: print
};


queue_1.print();
queue_1.enQueue(4);
queue_1.enQueue(5);
queue_1.enQueue(6);
queue_1.enQueue(7);
queue_1.enQueue(34);
queue_1.print();
queue_1.deQueue();
queue_1.deQueue();
queue_1.deQueue();
queue_1.print();
