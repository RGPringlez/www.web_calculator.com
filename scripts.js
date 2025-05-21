//declaring variables and buttons 

equals = document.getElementById("equal");
plus = document.getElementById("plus");
minus = document.getElementById("minus");
multiply = document.getElementById("multiply");
divide = document.getElementById("divide");
decimal = document.getElementById("decimal");
clear = document.getElementById("clear");

butt_one = document.getElementById("one");
butt_two = document.getElementById("two");
butt_three = document.getElementById("three");
butt_four = document.getElementById("four");
butt_five = document.getElementById("five");
butt_six = document.getElementById("six");
butt_seven = document.getElementById("seven");
butt_eight = document.getElementById("eight");
butt_nine = document.getElementById("nine");
butt_zero = document.getElementById("zero");

display = document.getElementById("output");

let prevNum = '0'
let currNum = '0'
let currOp = '+'
let bResult = false;

//declaring functions 

function num_click(butt_text) {
    
    if (butt_text == '+' || butt_text == '-' || butt_text == '/' || butt_text == 'x' || butt_text == 'AC' || butt_text == '=') {

        if (butt_text == 'AC') {

            currNum = '0';
            prevNum = '0';
            bResult = false;
            currOp = '+';
            display.textContent = '0';


        }

        else {
            prevNum = currNum;
            currNum = display.textContent;
            display.textContent = currNum;
            bResult = true;
            
            if (currOp == '+') {

                currNum = parseFloat(currNum) + parseFloat(prevNum);

            };

            if (currOp == '-') {

                currNum = parseFloat(prevNum) - parseFloat(currNum);

            };

            if (currOp == 'x') {

                currNum = parseFloat(prevNum) * parseFloat(currNum);

            };

            if (currOp == '/') {

                currNum = parseFloat(prevNum) / parseFloat(currNum);

            };

            
            display.textContent = currNum;

            currOp = butt_text
        
        }
    }
    else {
    
        if (display.textContent != '0' && display.textContent != '+' && display.textContent != '-' && display.textContent != 'x' && display.textContent != '/' && bResult == false) {
        
            display.textContent = display.textContent + butt_text;

        }
        else {

            display.textContent = butt_text;
            bResult = false;

        };

    }
    
};

butt_one.addEventListener('click', function() {num_click('1')});
butt_two.addEventListener('click', function() {num_click('2')});
butt_three.addEventListener('click', function() {num_click('3')});
butt_four.addEventListener('click', function() {num_click('4')});
butt_five.addEventListener('click', function() {num_click('5')});
butt_six.addEventListener('click', function() {num_click('6')});
butt_seven.addEventListener('click', function() {num_click('7')});
butt_eight.addEventListener('click', function() {num_click('8')});
butt_nine.addEventListener('click', function() {num_click('9')});
butt_zero.addEventListener('click', function() {num_click('0')});

decimal.addEventListener('click', function() {num_click('.')});
plus.addEventListener('click', function() {num_click('+')});
minus.addEventListener('click', function() {num_click('-')});
divide.addEventListener('click', function() {num_click('/')});
multiply.addEventListener('click', function() {num_click('x')});
clear.addEventListener('click', function() {num_click('AC')});
equals.addEventListener('click', function() {num_click('=')});