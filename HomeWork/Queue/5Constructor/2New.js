/**
 * If we create object like using new like 'new PiggyBank()' then internally
 * a object is created and an all the code in the method of PiggyBank is
 * executed. Like 'this.a = 0' and then a object a is introduced in the object
 * and then the address of the object is returned to you.
 *
 * Now JavaScript does a trick to avoid the previous problem in Factory and
 * OwnSolution. When the object is created using new then the JavaScript
 * copies the reference of the object which is placed in prototype
 * in __proto__ of the newly created object so this solution works in the
 * environments were we cannot write to __proto__ field of the object.

 * In this solution the baseFunction becomes the parent of Queue since we have
 * put the reference of baseFunction in prototype of Queue because of which
 * the __proto__ of the object created using Queue gets loaded with
 * baseFunction
 *
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


var baseFunctions = {
  enQueue: enQueue,
  deQueue: deQueue,
  print: print
}

function Queue() {
  this.front = -1;
  this.rear = -1;
  this.data = [];
}
Queue.prototype = baseFunctions;


queue_1 = new Queue();
queue_2 = new Queue();
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

console.log(queue_1);
console.log(queue_2);
