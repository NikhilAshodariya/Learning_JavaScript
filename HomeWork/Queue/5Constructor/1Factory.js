/**
  * In this code we provide the solution to the problem of repeating the
  * code of object creation.
  * Here we create a function that create a local object and return the
  * reference of that object each time the function is called a new
  * object is returned.

  * This solution also needs to be optimized since three handle are loaded
  * in each object and in each object each handle points to same object.
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


function Queue() {
  var queue = {
    front: -1,
    rear: -1,
    data: [],
    enQueue: enQueue,
    deQueue: deQueue,
    print: print
  };
  return queue;
}




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
