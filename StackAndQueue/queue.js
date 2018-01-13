class Queue {
  constructor() {
    this.first = -1;
    this.last = -1;
    this.stk = [];
  }

  enqueue(val) {
    if (this.first == -1) {
      this.first = 0;
      this.last = 0;
      this.stk[this.last] = val;
    } else {
      this.stk[++this.last] = val;
    }
  }

  dequeue() {
    if (this.last == -1) {
      return "queueEmpty";
    } else if (this.last == this.first) {
      var val = this.stk[this.last];
      this.last = -1;
      this.first = -1;
      return val;
    } else {
      var val = this.stk[this.first++];
      return val;
    }
  }

  printQueue(textArea) {
    if (textArea != undefined) {
      $(textArea).val("");
    }
    for (var i = this.first; i <= this.last && this.last != -1; i++) {
      if (textArea != undefined) {
        $(textArea).val($(textArea).val() + this.stk[i] + "\n");
      } else {
        console.log(this.stk[i]);
      }
    }
  }
}
