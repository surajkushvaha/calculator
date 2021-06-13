//author-- @surajkushvaha
//project-- make a calculator with use of js
//this is my second calc using eval function
//darshan university
function clickOnButton(val) {
    if (val == 'X') {
        val = val.replace('X', '*')
    }
    if (val == "\u00F7") {
        val = val.replace('\u00F7', '/')
    }

    temp = document.getElementById("answer");


    document.querySelector("audio").play();

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
        case '=':
            temp.value = eval(temp.value);
            break;
        default:
            temp.value = temp.value + val;
    }


}
//author-- @surajkushvaha
//project-- make a calculator with use of js
//this is my second calc using eval function
//darshan university