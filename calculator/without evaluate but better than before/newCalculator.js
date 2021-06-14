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
    fch = passVal.charAt(0);
    lch = passVal.charAt(passVal.length - 1);
    bol = false;
    if (isNaN(fch) && fch != '-' && fch != '+' || isNaN(lch)) {
        temp.value = "Syntax Error"
        return;
    }
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

    if (fch == '-') {
        v[1] = -1 * v[1];
        o.splice(0, 1);
        v.splice(0, 1);
    } else if (fch == '+') {
        o.splice(0, 1);
        v.splice(0, 1);

    }
    //---above all code working fine as my excpectation---//

    for (let index = 0; index < o.length; index++) {
        if (o[index] == '/') {
            o[index] = o[index].replace('/', 4)
        }
        if (o[index] == '*') {
            o[index] = o[index].replace('*', 3)
        }
        if (o[index] == '+') {
            o[index] = o[index].replace('+', 2)
        }
        if (o[index] == '-') {
            o[index] = o[index].replace('-', 1)
        }

    }
    for (let index = 0; index < o.length; index++) {
        o[index] = parseFloat(o[index]);
    }
    saveOLength = o.length;
    ansGet = 0;
    for (let index = 0; index < saveOLength; index++) {
        MaxNum = Math.max(...o);
        op = null;
        opIndex = 0;
        for (let index2 = 0; index2 < o.length; index2++) {
            if (o[index2] == MaxNum) {
                op = o[index2];
                opIndex = index2;
                break;
            }
        }
        switch (op) {
            case 4:
                v[opIndex] = v[opIndex] / v[opIndex + 1];
                o.splice(opIndex, 1);
                v.splice(opIndex + 1, 1);
                break;
            case 3:
                v[opIndex] = v[opIndex] * v[opIndex + 1];
                o.splice(opIndex, 1);
                v.splice(opIndex + 1, 1);
                break;
            case 2:
                v[opIndex] = v[opIndex] + v[opIndex + 1];
                o.splice(opIndex, 1);
                v.splice(opIndex + 1, 1);
                break;
            case 1:
                v[opIndex] = v[opIndex] - v[opIndex + 1];
                o.splice(opIndex, 1);
                v.splice(opIndex + 1, 1);
                break;

        }


    }
    ansGet = v[0];
    if (isNaN(ansGet)) {
        temp.value = "Bad expression"
        return;
    } else {
        temp.value = ansGet;
    }
}

//author-- @surajkushvaha
//project-- make a calculator with use of js
//this is my third calc using push
//darshan university