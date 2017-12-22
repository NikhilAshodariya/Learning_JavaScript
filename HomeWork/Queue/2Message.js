/**
  * In this code we try to unite the code and the object and try to give a
  * feel like method and object are part of each other and they exist together.
  * Here we call enqueue with the handle of queue object so we get a feel
  * that the method is called on the object of queue and enQueue will help on
  * that object. So this solution is better than the previous one.
  */

function enQueue1(data) {
  if (queue_1.front == -1) {
    queue_1.front++;
    queue_1.rear++;
  } else {
    queue_1.rear++;
  }
  queue_1.data[queue_1.rear] = data;
}

function deQueue1() {
  if (queue_1.rear == queue_1.front) {
    queue_1.rear = -1;
    queue_1.front = -1;
  }
  queue_1.front++;
}

function printQueue1() {
  console.log("-----------Printing Queue---------------");
  for (var i = queue_1.front; i <= queue_1.rear; i++) {
    console.log(queue_1.data[i]);
  }
  console.log("----------End of Printing------------");
}

var queue_1 = {
  front: -1,
  rear: -1,
  data: [],
  enQueue: enQueue1,
  deQueue: deQueue1,
  print: printQueue1
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
