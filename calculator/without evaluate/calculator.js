//author-- @surajkushvaha
//project-- make a calculator with use of js
//this is my first claculator improper
//darshan university
opcount = 0;

function clickOnButton(val) {
    document.querySelector("audio").play();
    temp = document.getElementById("answer");
    if (opcount <= 1) {
        switch (val) {
            case 'CE':
                temp.value = "";

                break;
            case 'DEL':
                str = temp.value;
                newStr = str.substring(0, str.length - 1);
                temp.value = newStr;
                break;
            case '+/-':
                temp.value = -1 * temp.value;
                break;
            default:
                {

                    if ((!isNaN(val)) || val == '.') {
                        temp.value = temp.value + val;
                    } else if (val == '\u00F7' || val == 'X' || val == '+' || val == '-') {
                        opcount += 1;
                        storeVar = temp.value;
                        temp.value = "";
                        opChar = val;
                    } else if (val == '=') {
                        opcount = 0;
                        operation(storeVar, opChar)

                        break;
                    }
                }
        }
    } else {
        temp.value = "Syntax Error";
        opcount = 0;
    }

}

function operation(storeVar, opChar) {
    tempVar = temp.value;
    if (opChar == '\u00F7' && tempVar > 0) {
        ANS = parseFloat(storeVar) / parseFloat(tempVar);
    } else
    if (opChar == 'X') {
        ANS = parseFloat(tempVar) * parseFloat(storeVar);
    } else
    if (opChar == '+') {
        ANS = parseFloat(tempVar) + parseFloat(storeVar);
    } else
    if (opChar == '-') {
        ANS = parseFloat(storeVar) - parseFloat(tempVar);
    } else {
        temp.value = "Math Error"
    }
    temp.value = ANS;

}
//author-- @surajkushvaha
//project-- make a calculator with use of js
//this is my first calculator improper
//darshan university