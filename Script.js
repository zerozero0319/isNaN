// P.88 3-7-2
function checkNum() {
    var v = document.getElementById("number").value;
    var r = document.getElementById("result");
    if (v == "") {
        r.textContent = "入力しろよ、あくしろよ";
    } else if (v == 810) {
        r.textContent = "オォン！";
    } else if (v == 114514) {
        r.textContent = "いいよ！来いよ！";
    } else if (isNaN(v)) {
        r.textContent = "("+ v + "は数字じゃ)ないです。";
    } else if (v % 2 == 0) {
        r.textContent = v + "は偶数だよ";
    } else if (v % 2 != 0) {
        r.textContent = v + "は奇数だよ";
    }
}
