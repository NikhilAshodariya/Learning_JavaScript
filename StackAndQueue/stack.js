class Stack {
  constructor() {
    this.stk = [];
    this.ptr = -1;
  }
  push(value) {
    this.stk[++this.ptr] = value;
  }

  pop() {
    if (this.ptr <= -1) {
      return "emptyStack";
    } else {
      var val = this.stk[this.ptr--];
      return val;
    }
  }

  statement(textArea) {
    if (this.ptr < -1) {
      console.log("Stack is empty");
    } else {
      if (textArea != undefined) {
        textArea.val("");
      }
      for (var i = this.ptr; i >= 0; i--) {
        if (textArea != undefined) {
          // textArea.value += this.stk[i];
          textArea.val(textArea.val() + this.stk[i] + "\n");
          // textArea.val(textArea.val()+"\n");
        } else {
          console.log(`Stack value is ${this.stk[i]}`);
        }
      }
    }
  }
}
