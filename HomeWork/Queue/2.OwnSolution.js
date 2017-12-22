/**
  * In this solution we get solution to both the problems that is
  * the one of creating a mapping for each object and function in this
  * solution we create only one function
  * The soultion to other problem that is of getting a feel of object and
  * function together is also possible.
  * But we introduce a new problem that is we need to pass a reference
  * to the object and because of this the calling of a function becomes
  * ugly.
*/

function enQueue(queue,data) {
  if (queue.front == -1) {
    queue.front++;
    queue.rear++;
  } else {
    queue.rear++;
  }
  queue.data[queue.rear] = data;
}

function deQueue(queue) {
  if (queue.rear == queue.front) {
    queue.rear = -1;
    queue.front = -1;
  }
  queue.front++;
}

function print(queue) {
  console.log("-----------Printing Queue---------------");
  for (var i = queue.front; i <= queue.rear; i++) {
    console.log(queue.data[i]);
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

queue_1.print(queue_1);
queue_1.enQueue(queue_1,4);
queue_1.enQueue(queue_1,5);
queue_1.enQueue(queue_1,6);
queue_1.enQueue(queue_1,7);
queue_1.enQueue(queue_1,34);
queue_1.print(queue_1);
queue_1.deQueue(queue_1);
queue_1.deQueue(queue_1);
queue_1.deQueue(queue_1);
queue_1.print(queue_1);


// queue_1.print();
// queue_1.enQueue(4);
// queue_1.enQueue(5);
// queue_1.enQueue(6);
// queue_1.enQueue(7);
// queue_1.enQueue(34);
// queue_1.print();
// queue_1.deQueue();
// queue_1.deQueue();
// queue_1.deQueue();
// queue_1.print();
