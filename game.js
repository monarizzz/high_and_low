// 開始ボタンにID付与
const startbtn = document.getElementById("startbtn");
// 左の画像にID付与
    const leftimg = document.getElementById('leftimg');
    leftimg.src = "card/card_back.png";

//右の画像にID付与
    const rightimg = document.getElementById('rightimg');
    rightimg.src = "card/card_back.png";

// high,low ボタン
    const highbtn = document.getElementById('highbtn');
    const lowbtn = document.getElementById('lowbtn');

// カードの種類
    const cardType = ["diamond","heart","spade","club"];

// 
    const win = document.getElementById("win");
    const lose = document.getElementById("lose");


// 初期関数
    function inilaizeGame () {
// カードの種類をランダム化
        const leftcardTypeRan = cardType[ Math.floor(Math.random() * (3 + 1))];
        const rightcardTypeRan = cardType[ Math.floor(Math.random() * (3 + 1))];
// カードの数字のランダム化
        const leftcardNum = Math.floor(Math.random() * (12+1)+1 );
        const rightcardNum = Math.floor(Math.random() * (12+1)+1 );
    // ゼロ詰め
            const leftcardNumZero = ("00" + leftcardNum ).slice( -2 );
            const rightcardNumZero = ("00" + rightcardNum ).slice( -2 );
    // 左の画像
    leftimg.src = "./card/card_" + leftcardTypeRan + "_" + leftcardNumZero + ".png";
    
    
    
 // 数字の判定
    highbtn.addEventListener("click",high)
    lowbtn.addEventListener("click",low)

//判定の関数    
    function high(){
   rightimg.src = "./card/card_" + rightcardTypeRan + "_" + rightcardNumZero + ".png";
            if (rightcardNumZero > leftcardNumZero){
                win.classList.remove("hide")
            }
            else{
                lose.classList.remove("hide")
                    }
                }
        
    function low (){
        rightimg.src = "./card/card_" + rightcardTypeRan + "_" + rightcardNumZero + ".png";
            if (rightcardNum < leftcardNum){
                win.classList.remove("hide")
            }
            else{
                lose.classList.remove("hide")
                    }
                }
         


//high,low ボタンの非表示
highbtn.addEventListener('click',
        function(){
            highbtn.classList.add("hide");
            lowbtn.classList.add("hide");
            
         
            // リトライボタンの表示
            retrybtn.classList.remove("hide");
            retrybtn.addEventListener("click",
            function(){

                retrybtn.classList.add("hide");
                startbtn.classList.remove("hide");
                leftimg.src = "card/card_back.png";
                rightimg.src = "card/card_back.png";
                win.classList.add("hide");
                lose.classList.add("hide");
                
            })
        } )

lowbtn.addEventListener('click',
        function(){
            highbtn.classList.add("hide");
            lowbtn.classList.add("hide");

           
            
            // リトライボタンの表示
            retrybtn.classList.remove("hide");
            retrybtn.addEventListener("click",
            function(){

                retrybtn.classList.add("hide");
                startbtn.classList.remove("hide");
                leftimg.src = "card/card_back.png";
                rightimg.src = "card/card_back.png";
                win.classList.add("hide");
                lose.classList.add("hide");
                
            })
        } )
    }

    //開始ボタンにイベント追加
    startbtn.addEventListener('click',
    function(){
    // 開始ボタンを消す
        startbtn.classList.add("hide");
        
    // high,low ボタンの表示
        highbtn.classList.remove("hide");
        lowbtn.classList.remove("hide");

        inilaizeGame () ;

    })

    