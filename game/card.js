//BGM and SE
const audio = new Audio();
audio.src = "/bgm/bgm.mp3";
audio.volume = 0.2;
audio.loop = true;

const ls = localStorage;
let player = {
   "name": "GEST",
   "gold": 0,
   "counts": 0,
   "session": {
      "depth": 0,
      "hp": 9,
      "san": 9,
      "cost": 9,
      "treasure": 0
   }
}
let events;
let maxDepth;

function gameSet() {
   player.session = {
      "depth": 0,
      "hp": 9,
      "san": 9,
      "cost": 9,
      "treasure": 0
   }
   events = cards;
   maxDepth = Math.floor(Math.random()*7)+3;
   //UI呼び出し。
   LoadUI();
}

function gameOver() {
   if (10 <= player.session.hp) player.session.hp = 9;
   if (10 <= player.session.san) player.session.san = 9;
   if (10 <= player.session.cost) player.session.cost = 9;
   LoadUI();
   if (0 > player.session.hp || 0 > player.session.san || 0 > player.session.cost) {
      let text = ``;
      if (0 > player.session.hp) text = `力尽きてしまった。`;
      if (0 > player.session.san) text = `精魂が尽きてしまった。`;
      if (0 > player.session.cost) text = `気力が無くなって引き返した。`;
      player.counts = 0;
      const UI = `
      <h1>GAME OVER!</h1>
      <p>${text}</p>
      <input id="continue" type="button" value="続ける" onclick="gameSet();"></input>
      `;
      $("body").html(UI);
      $("body").css({
       "text-align":"center"
      });
      $("input").css({
       "font-size":"25px"
      });
   } else if (maxDepth == player.session.depth) {
      //clear!
      const UI = `
      <h1>GAME OVER!</h1>
      <p>ダンジョンをクリアした。</p>
      宝物は、すべて換金された。<br>
      手に入れた宝物額(G) - (建造物侵入罪による過料(G) + 冒険者組合費(G) + 葬祭執行税(G)) = 収入(G)<br>
      ${player.session.treasure} - (13 + 2 + 3) = ${player.session.treasure-18}<br>
      <input id="continue" type="button" value="続ける" onclick="gameSet();"></input>
      `;
      $("body").html(UI);
      $("body").css({
         "text-align":"center"
      });
      $("input").css({
         "font-size":"25px"
      });
      player.gold += player.session.treasure-18;
      player.counts++;
   }
}

function gameUp() {
   const R = events[Math.floor(Math.random()*events.length)];
   let delEvent = [];
   for (let i = 0; i < events.length; i++) {
      if (R != events[i]) {
         delEvent.push(events[i]);
      }
   }
   events = delEvent;
   return R;
}

function LoadUI() {
   const b0 = gameUp();
   const b1 = gameUp();
   const b2 = gameUp();
   const b3 = gameUp();
   //card systeのUIを作成する。
   const UI = `
   <div id="cardSystem">
     <p id="information">
     深度:${player.session.depth} <hp>HP ${player.session.hp}</hp> <san>SAN ${player.session.san}</san> <cost>COST ${player.session.cost}</cost> <tresures>TREASURES ${player.session.treasure}</tresures> 踏破数.${player.counts} <gold>金${player.gold}G(万)</gold> NAME:${player.name}
     </p>
     ${block("b0",b0)}
     ${block("b1",b1)}
     ${block("b2",b2)}
     ${block("b3",b3)}
     <input type="button" value="BGM" onclick="audio.play();"></input>
     <small>音楽:魔王魂</small>   
     <input type="button" value="RULE" onclick="gameRule();"></input>
     <input type="button" value="SAVE" onclick="save();"></input>
     <input type="button" value="LOAD" onclick="load();"></input>
   </div>
   <div id="rule">
    <h3>ゲームの説明</h3>
    <h4>深度について</h4>
    深度は、現在潜っている深さを表しています。基本的に迷宮の深度は、4-13です。
    <h4>HP</h4>
    HPは、体力を表しています。0になると迷宮探索に失敗します。上限は、9です。
    <h4>SAN</h4>
    SANは、正気度を表しています。0になると迷宮探索に失敗します。上限は、9です。
    <h4>COST</h4>
    COSTは、気力を表しています。0になると迷宮探索に失敗します。上限は、9です。
    <h4>TREASURES</h4>
    TREASURESは、その迷宮で、手に入れた財宝の価値です。クリアすると自動で、GOLDに換金されます。
    <h4>GOLD</h4>
    GOLDは、このゲームの通貨です。Endingにかかわる予定です。
    <h4>踏破数</h4>
    踏破数は、踏破した迷宮の数です。踏破中にHPやSAN、COSTが、0になるとリセットされます。Endingにかかわる予定です。
    <h4>NAME</h4>
    NAMEは、現在GESTから変更できません。
    <h4>アップデートについて</h4>
    画像や敵の数は、急ぎで追加する予定です。StoryやGOLDの使い道も今後実装します。
    <br>
    <input type="button" value="閉じる" onclick="back();"></input>
   </div>
   `;
   //css
   $("body").html(UI);
   css();
   $("#rule").css("display","none");
   
   //click event
   button("b0",b0);
   button("b1",b1);
   button("b2",b2);
   button("b3",b3);

   //独自タグのcss 独自タグは、本来使用すべきではない。
   $("hp").css("color","#cc2929");
   $("san").css("color","skyblue");
   $("cost").css("color","greenyellow");
   $("tresures").css("color","yellow");
   $("gold").css("color","gold");
   $("name").css("font-family","impact");
}

function block(id,content) {
   return `
   <div id=${id} class="card" value="${content.hp+content.san+content.cost+content.treasure}">
      <img src=${content.img} alt="Item image." width="160px" height="160px" style="background-color: skyblue">
      <div>
       <name>${content.name}</name><br>
       ${content.context}<br>
       <small>発生する効果</small><br>
       <hp>HP:${content.hp}</hp> <san>SAN:${content.san}</san> <cost>COST:${content.cost}</cost> <tresures>TREASURES:${content.treasure}</tresures>
      </div>
   </div>
   `
}

function button(id,content) {
   $(`#${id}`).click(()=>{
      player.session.hp+=content.hp;
      player.session.san+=content.san;
      player.session.cost+=content.cost;
      player.session.cost++;
      player.session.treasure+=content.treasure;
      player.session.depth++;
      gameOver();
   });
}

//save and load
function save() {
   ls.setItem("save0256",JSON.stringify(player));
   alert("Successful save.");
   gameSet();
}
function load() {
   if (ls.getItem("save0256") !== null) {
      player = JSON.parse(ls.getItem("save0256"));
      gameSet();
   } else {
      alert("Not save data.");
   }
}

//css
function css() {
   const cardSystem = $("#cardSystem");
   const information = $("#information");
   $("body").css({
      "text-align":"left"
   });
   cardSystem.css({
      "border": "solid 3px black",
      "font-size": "25px",
      "background-color": "gray",
      "margin": "0 auto 0",
      "width": "60vw",
   });
   information.css({
      "border": "solid 1px black",
      "width": "85%",
      "height": "30px",
      "background-color": "chocolate",
      "margin": "10px auto 0"
   });
   $(".card").css({
      "background": "chocolate",
      "border": "solid 3px saddlebrown",
      "display": "flex",
      "margin": "10px",
      "padding": "10px 10px 10px 10px"
   });
   $("input").css({
      "font-size":"25px"
   });
   $("#rule").css("display","none");
   $("#rule").css({
      "border": "solid 3px black",
   });
   //スマホのCSS
   if (window.innerWidth <= 1000) {
      cardSystem.css({
         "font-size": "16px",
         "width": "95vw",
      });
      information.css({
         "border": "solid 1px black",
         "width": "90%",
         "height": "50px"
      });
      $("input").css({
         "font-size":"16px"
      });
   }
}

//ここから下のはルール関係
function gameRule() {
   $("#cardSystem").css("display","none");
   $("#rule").css({
      "border": "solid 3px black",
      "display": "block"
   });
}

function back() {
   $("#rule").css("display","none");
   $("#cardSystem").css("display","block");
}

gameSet();
addEventListener("resize",() => {
   css();
});