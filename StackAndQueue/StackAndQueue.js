// var Stack = require('./stack.js');

$(document).ready(function() {

  $("#stackRadio").change(function() {
    $("#pushButton").text("Push");
    $("#popButton").text("Pop");
    $("#stack1").html("Stack 1");
    $("#stack2").html("Stack 2");
    // console.log("listener attached");
  });

  $("#queueRadio").change(function() {
    $("#pushButton").text("Enqueue");
    $("#popButton").text("Dequeue");
    $("#stack1").html("Queue 1");
    $("#stack2").html("Queue 2");
  });

  $("#stackRadio").change(loadStackArea);
  $("#pushButton").click(pushListener);
  $("#userInput").keydown(pushListener);
  $("#queueRadio").change(loadStackArea);
  $("#stack1Radio,#stack2Radio").change(loadStackArea);


  $("#popButton").click(popListener);
});

function popListener() {
  var textBox = $("#userInput");
  var textArea = $("#stackTextArea");
  var displayStatus = $("#poppedValue");


  if ($("#stack1").html().includes("Stack")) {
    var val = $("input[name=stackOptions]:checked").val();
    var st = stack[val];
    // st.push(textBox.val());
    var poppedVal = st.pop();
    if (poppedVal == "emptyStack") {
      displayStatus.text("Stack is empty please insert a value");
    } else {
      displayStatus.text("popped value is " + poppedVal);
      st.statement(textArea);
    }
  } else if ($("#stack1").html().includes("Queue")) {
    var val = $("input[name=stackOptions]:checked").val();
    var st = queue[val];
    var poppedVal = st.dequeue();
    if (poppedVal == "queueEmpty") {
      displayStatus.text("Queue is empty please enqueue value");
    } else {
      displayStatus.text("dequeued value is " + poppedVal);
      st.printQueue(textArea);
    }
  }
}

function loadStackArea() {
  console.log($("#stackTextArea").val());
  $("#stackTextArea").val("");
  if ($("#stack1").html().includes("Stack")) {
    var val = $("input[name=stackOptions]:checked").val();
    var st = stack[val];
    st.statement($("#stackTextArea"));
  } else if ($("#stack1").html().includes("Queue")) {
    var val = $("input[name=stackOptions]:checked").val();
    var st = queue[val];
    st.printQueue($("#stackTextArea"));
  }
  $("#poppedValue").text("");
}

function pushListener() {
  var keypressed = event.keyCode || event.which;

  if (keypressed == 13 || this.id == "pushButton") {
    var textBox = $("#userInput");
    var textArea = $("#stackTextArea");
    var displayStatus = $("#poppedValue");

    if ($("#stack1").html().includes("Stack")) {
      var val = $("input[name=stackOptions]:checked").val();
      var st = stack[val];
      st.push(textBox.val());
      textArea.val("");
      st.statement(textArea);
      textBox.val("");
      displayStatus.text("");
      // st.statement($("#stackTextArea"));
    } else if ($("#stack1").html().includes("Queue")) {
      var val = $("input[name=stackOptions]:checked").val();
      var st = queue[val];
      textArea.val("");
      st.enqueue(textBox.val());
      st.printQueue($("#stackTextArea"));
      textBox.val("");
      displayStatus.text("");
    }
  }
}


var stack = [new Stack(), new Stack()];
var queue = [new Queue(), new Queue()];
