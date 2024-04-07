// 開始ボタンにID付与
const startbtn = document.getElementById("startbtn");
// 左の画像にID付与
const leftimg = document.getElementById("leftimg");
leftimg.src = "card/card_back.png";
//右の画像にID付与
const rightimg = document.getElementById("rightimg");
rightimg.src = "card/card_back.png";

// high,low ボタン
const highbtn = document.getElementById("highbtn");
const lowbtn = document.getElementById("lowbtn");
const retrybtn =document.getElementById("retrybtn");
//
const win = document.getElementById("win");
const lose = document.getElementById("lose");

// カードの種類
  const cardType = ["diamond", "heart", "spade", "club"];
  // カードの種類をランダム化
  let leftcardTypeRan;
  let rightcardTypeRan;
  // カードの数字のランダム化
  let leftcardNum ;
  let rightcardNum;
  // ゼロ詰め
  let leftcardNumZero;
  let rightcardNumZero;

startbtn.addEventListener("click", function () {
  leftcardTypeRan = cardType[Math.floor(Math.random() * (3 + 1))];
  rightcardTypeRan = cardType[Math.floor(Math.random() * (3 + 1))];
  leftcardNum = Math.floor(Math.random() * (12 + 1) + 1);
  rightcardNum = Math.floor(Math.random() * (12 + 1) + 1);
  leftcardNumZero = ("00" + leftcardNum).slice(-2);
  rightcardNumZero = ("00" + rightcardNum).slice(-2);

  leftimg.src ="./card/card_" + leftcardTypeRan + "_" + leftcardNumZero + ".png";
  highbtn.classList.remove("hide");
  lowbtn.classList.remove("hide");
  startbtn.classList.add("hide");
});

highbtn.addEventListener("click", function () {
  rightimg.src ="./card/card_" + rightcardTypeRan + "_" + rightcardNumZero + ".png";
  if (rightcardNumZero > leftcardNumZero) {
    win.classList.remove("hide");
  } else {
    lose.classList.remove("hide")};
    retrybtn.classList.remove("hide");
    highbtn.classList.add("hide");
    lowbtn.classList.add("hide");
  });

lowbtn.addEventListener("click", function () {
  rightimg.src ="./card/card_" + rightcardTypeRan + "_" + rightcardNumZero + ".png";
  if (rightcardNum < leftcardNum) {
    win.classList.remove("hide");
  } else {
    lose.classList.remove("hide")};
    retrybtn.classList.remove("hide");
    highbtn.classList.add("hide");
    lowbtn.classList.add("hide");
  });

retrybtn.addEventListener("click", function () {
    retrybtn.classList.add("hide");
    startbtn.classList.remove("hide");
    leftimg.src = "card/card_back.png";
    rightimg.src = "card/card_back.png";
    win.classList.add("hide");
    lose.classList.add("hide");
  })