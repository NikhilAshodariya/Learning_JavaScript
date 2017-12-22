/**
  * We wanted to create a piggy bank so the simplest method is to create
  * a one to one mapping of object and methods.
  * So that means that for each object we need to write the method with only
  * the reference address changed. But this solution is not feasible since
  * in real world the number of components used may increase exponentially.

  * The other problem with this solution is that it doesn't give a feeling
  * like queue and enqueue and other operations are part of each other.
  * It feels that just one normal method is called.  
  */

var queue_1 = {
  front: -1,
  rear: -1,
  data: []
};

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

printQueue1();
enQueue1(4);
enQueue1(5);
enQueue1(6);
enQueue1(7);
enQueue1(34);
printQueue1();
deQueue1();
deQueue1();
deQueue1();
printQueue1();
