function clickOnButton(val) {
    //replace kre che unicode thi
    if (val == 'X') {
        val = val.replace('X', '*')
    }
    if (val == "\u00F7") {
        val = val.replace('\u00F7', '/')
    }
    document.querySelector("audio").play();
    temp = document.getElementById("answer");

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
            if (val != '=') {
                temp.value = temp.value + val;
            } else {
                answerAapiDe(temp.value);
            }
            break;
    }
}

function answerAapiDe(passVal) {
    s = ""; //passvalue mathi number liye
    v = []; //number ne store kre
    o = []; //operater store kre
    for (let i = 0; i <= passVal.length; i++) {
        ch = passVal.charAt(i);

        if (ch == '/' || ch == '*' || ch == '+' || ch == '-') {
            v.push(parseFloat(s)); //number ne push kre v ma
            o.push(ch); //operator push kre o ma
            s = '';

        } else {
            s = s + ch; //digits ne bhegu kre jya sudhi operator na aave

        }

    }
    v.push(parseFloat(s));
    ansGet = v[0];
    for (let i = 0; i < o.length; i++) {
        switch (o[i]) {
            case '/':
                ansGet = ansGet / v[i + 1];
                break;
            case '*':
                ansGet = ansGet * v[i + 1];
                break;
            case '+':
                ansGet = ansGet + v[i + 1];
                break;
            case '-':
                ansGet = ansGet - v[i + 1];
                break;
        }
        temp.value = ansGet;

    }

}
//author-- @surajkushvaha
//project-- make a calculator with use of js
//this is my third calc using push
//darshan university