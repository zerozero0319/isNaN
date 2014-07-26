// P.88 3-7-2
function checkNum() {
    //BODY SENSOR...
    var v = document.getElementById("number").value;
    //CAPTURED...
    var r = document.getElementById("result");
    //戊辰戦争...
    if (v == "") {
        r.textContent = "入力しろよ、あくしろよ";
    //EMURATED
    } else if (v == 810) {
    //E M U R A T E D
        r.textContent = "オォン！";
    } else if (v == 114514) {
    //E  M  U  R  A  T  E  D
        r.textContent = "いいよ！来いよ！";
    } else if (isNaN(v)) {
    //VIRTUAL SEX
        r.textContent = "("+ v + "は数字じゃ)ないです。";
    } else if (v % 2 == 0) {
    //114 514 810
        r.textContent = v + "は偶数だよ";
    } else if (v % 2 != 0) {
    //1919
        r.textContent = v + "は奇数だよ";
    }
    //お前のことが好きだったんだよ！（迫真）
    alert("やめちゃうの？怒ってんの？（棒読み）");
    //二人は幸せなキスをして終了
}
