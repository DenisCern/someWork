var k = 0;

function GetResult() {
  numberFromForm = eval(form.num.value);
  var numberWord = true;
  let arr = new Array();

  let player = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock",
    "fire",
    "watermellon"
  ];

  for (let i = 0; i < player.length; i++) {
    numberWord = false;
    if (player[i] == "paper" || player[i] == "lizard" || player[i] == "fire") {
      arr.push("Word: it's " + player[i]);
      numberWord = true;
    } else {
      arr.push("Word: " + player[i]);
    }
    if (numberWord == true) {
      var length = parseInt(player[i].length) + 3;
      arr.push("Number of letter's are: " + length);
    } else {
      arr.push("Number of letters: " + player[i].length);
    }
  }
  alert(arr);

  fn = factorialNumber(numberFromForm);
  form.res.size = String(fn).length;
  form.res.type = "text";
  form.res.value = fn;
}

function GetResultFib() {
  numberFromFormFib = eval(form.num1.value);
  fibonaciNumbers(numberFromFormFib);
}

function factorialNumber(numberFromForm) {
  var e = parseInt(numberFromForm);
  var num1 = 1;
  var k = 1;

  while (num1 <= e) {
    k = k * num1;
    num1 += 1;
  }

  return k;
}

function fibonaciNumbers(numberFromForm) {
  var e = parseInt(numberFromForm);
  var f = 0;
  var g = 1;
  var h = 0;
  num = 0;
  let numbers = [];
  while (num < e) {
    h = f + g;
    if (f == 0) {
      numbers.push(0);
    }
    numbers.push(h);
    g = f;
    f = h;
    num += 1;
  }

  if (numbers.length != num) {
    numbers.splice(numbers.length - 1, 1);
  }

  var result = num + " of Fibonacci numbers: " + numbers;
  form.resFib.type = "text";
  form.resFib.size = result.length;
  form.resFib.value = num + " of Fibonacci numbers: " + numbers;
}
