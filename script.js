'use strict'

let elements = document.getElementsByName("flexRadioDefault");
let resultImg = document.getElementById("resultImg");
let resultText = document.getElementById("resultText");
let nowplaying = document.getElementById("nowPlaying")

document.getElementById("decideBtn").onclick = function() {
    resultImg.src = "./images/readygo.png";
    resultText.innerHTML = "スタート";
    //入力(ラジオボタン)をチェック
    let checkValue = ""
    for (let i = 0; i < elements.length; i++) {
        if (elements.item(i).checked === true) {
            checkValue = elements.item(i).value;
            //console.log("your sign is: ", checkValue);
        }
    }
    //ランダムにこちらの手を選択
    const mySignkey = Math.floor(Math.random() * 3);
    const objectOfsign = {
        0: "rock",
        1: "scissors",
        2: "paper"
    };

    nowplaying.innerHTML = "じゃん"

    function callKen() {
        nowplaying.innerHTML = "けん";
    }

    function callPon() {
        nowplaying.innerHTML = "ぽん";
    }

    setTimeout(callKen, 500);
    setTimeout(callPon, 1000);

    setTimeout(function() {

        //勝ち負け・あいこ　を確認
        if (checkValue === objectOfsign[mySignkey]) {
            resultImg.src = "./images/draw.png";
            resultText.innerHTML = "あいこです";
        } else if (checkValue === "rock") {
            if (objectOfsign[mySignkey] === "scissors") {
                resultImg.src = "./images/win.png";
                resultText.innerHTML = "あなたの勝ちです";
            } else {
                resultImg.src = "./images/lose.png";
                resultText.innerHTML = "あなたの負けです";
            }
        } else if (checkValue === "scissors") {
            if (objectOfsign[mySignkey] === "paper") {
                resultImg.src = "./images/win.png";
                resultText.innerHTML = "あなたの勝ちです";
            } else {
                resultImg.src = "./images/lose.png";
                resultText.innerHTML = "あなたの負けです";
            }
        } else if (checkValue === "paper") {
            if (objectOfsign[mySignkey] === "rock") {
                resultImg.src = "./images/win.png";
                resultText.innerHTML = "あなたの勝ちです";
            } else {
                resultImg.src = "./images/lose.png";
                resultImg.innerHTML = "あなたの負けです";


            }
        }
    }, 1500)
}
