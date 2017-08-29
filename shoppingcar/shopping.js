function eventBinding(type, ele, fn, isBubble) {
    var reg1 = /#/;
    var reg2 = /\./;
    var elem;
    if (reg1.test(ele)) {
        elem = ele.substring(1);
        elem = document.getElementById(elem);
    } else if (reg2.test(ele)) {
        elem = ele.substring(1);
        elem = document.getElementsByClassName(elem);
    } else {
        elem = document.getElementsByTagName(ele);
    }
            if (document.all) {
                elem[0].attachEvent("on" + type, fn);
            }
            else {
                elem[0].addEventListener(type, fn, !isBubble);
            }
}

var amount = document.getElementsByTagName("input")[0];
var amount_2 = document.getElementsByTagName("input")[1];
var total = document.getElementsByClassName("total")[0];
eventBinding("click", ".add", add, true);
var num=0;
function add() {
        num++;
        amount.value=num;
        total.value=(num*6999)+(sub*99);
}

eventBinding("click", ".del", del, true);
function del() {
    if(num>0){
        num--;
        amount.value = num;
        total.value = (num*6999)+(sub*99);
    }
}

eventBinding("click", ".add_2", add_2, true);
var sub=0;
function add_2() {
    sub++;
    amount_2.value=sub;
    total.value=(sub*99)+(num*6999);
}

eventBinding("click", ".del_2", del_2, true);
function del_2() {
    if(sub>0){
        sub--;
        amount_2.value = sub;
        total.value =(sub*99)+(num*6999);
    }
}