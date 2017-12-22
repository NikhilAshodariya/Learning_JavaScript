/**
  * In this solution we have modified the __proto__ type of object and
  * since this field is present in all the obejcts so no cost is incured.
  *
  * But the problem with this solution is that all environments do not
  * allow to modifiy __proto__ so we need some other solution
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


var baseFunction = {
  enQueue: enQueue,
  deQueue: deQueue,
  print: print
}

function Queue() {
  var queue = {
    front: -1,
    rear: -1,
    data: [],
    __proto__: baseFunction
  };
  return queue;
}

/**
 * The method Queue is actually a special object let's name it as functor
 * Now in __proto__ we keep the name of baseFunction by doing that we
 * are making baseFunction as parent of queue object so all the properties
 * of the baseFunction are now visible in queue object.
 */

queue_1 = Queue();

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

queue_2 = Queue();
console.log(queue_2);
