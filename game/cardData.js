let cards = []
function createCard(probability,name,context,hp,san,cost,treasure,img,se1,se2) {
  for (let i = 0; i < probability; i++) {
    cards.push({
      "name": name,
      "context": context,
      "img": img,
      "hp": hp,
      "san": san,
      "cost": cost,
      "treasure": treasure,
      //確率
      "probability": probability
    });
  }
}
createCard(1,"金属製の容器","旧世代の技術で作られた容器だ。水聖教の言い伝えでは、飲み水を保管するに使っていたらしい。",1,0,-3,0,"/img/NoImage.png");
createCard(1,",竹の水筒","かなり古い竹でできた水筒だ。無印の水筒だ。",-1,-1,1,0,"/img/NoImage.png");
createCard(1,"竹の水筒","かなり古い竹でできた水筒だ。底に水聖教の印が印字されている。",1,0,-3,1,"/img/NoImage.png");
createCard(1,"竹の水筒","竹でできた水筒だ。無印の水筒だ。",1,0,-3,0,"/img/NoImage.png");
createCard(1,"地下水","地下水だ。濁っている。",-1,-2,-3,0,"/img/NoImage.png");
createCard(1,"地下水","地下水だ。透き通った色をしている。",1,1,-3,0,"/img/NoImage.png");
createCard(1,"古代の食糧","昔の人が食べていたとされるものだ。箱は、ベタベタしていない。",1,0,-3,0,"/img/NoImage.png");
createCard(1,"古代の食糧","昔の人が食べていたとされるものだ。箱は、緑のベタベタした液体の包まれている。",3,-3,-3,0,"/img/NoImage.png");
createCard(1,"茶色の三角形の小瓶","旧世代に用いられていた薬だ。暗い気持ちを和らげるらしい。",0,3,-3,0,"/img/NoImage.png");
createCard(1,"緑色の三角形の小瓶","旧世代に用いられていた薬だ。痛みを和らげるらしい。",1,1,-3,0,"/img/NoImage.png");
createCard(1,"白い筒","旧世代に用いられていた医療品らしい。肌に当てて使うらしい。",5,3,4,3,"/img/medicine.png");
createCard(1,"水聖教の印が入った箱","水聖教が、買い取ってくれる物の一つだ。",0,0,-2,1,"/img/NoImage.png");
createCard(1,"小型拳銃","旧世代に用いられていた帯電式小型拳銃という武器らしい。水聖教が、買い取ってくれる物の一つだ。",0,0,-2,1,"/img/NoImage.png");
createCard(1,"画面が割れた黒い板","水聖教が、買い取ってくれる物の一つだ。",0,0,-2,1,"/img/NoImage.png");
createCard(1,"何かの種が入った三角形の小瓶","水聖教が、買い取ってくれる物の一つだ。",0,0,-2,3,"/img/NoImage.png");
createCard(1,"黒い石","水聖教が、買い取ってくれる物の一つだ。",0,0,-2,1,"/img/NoImage.png");
createCard(1,"タイムパラドミック鉱石","水聖教が、買い取ってくれる物の一つだ。",0,0,-2,9,"/img/NoImage.png");
createCard(1,"豪華な宝飾品","水聖教が、買い取ってくれる物の一つだ。",0,0,-2,7,"/img/NoImage.png");
createCard(1,"薄い四角形の小箱","水聖教が、買い取ってくれる物の一つだ。",0,0,-2,3,"/img/NoImage.png");
createCard(1,"金で装飾された緑色の板","水聖教が、買い取ってくれる物の一つだ。",0,0,-2,2,"/img/NoImage.png");
createCard(1,"三角形の人工的な石","遺品回収連盟が、買い取ってくれるだ。",0,0,-2,1,"/img/NoImage.png");
createCard(1,"古代言語の板","最後の一行に「ス、戸長任」と書かれている。コレクターが高値で買い取ってくれる物らしい。",0,0,-2,6,"/img/NoImage.png");
createCard(1,"宝石","こういった宝石は、貴族が高値で買い取ってくれるらしい。",0,0,-2,7,"/img/NoImage.png");
createCard(1,"誰かの遺品","遺品回収連盟が買い取って、遺族に返却するらしい。",0,0,-2,1,"/img/NoImage.png");
createCard(1,"迫り来る壁","壁がものすごい勢いで迫ってきた。。旧世代の防衛装置だ。",-3,-1,-1,0,"/img/NoImage.png");
createCard(1,"地雷","急に地面が吹き飛んだ。旧世代の防衛装置の一つだ。",-6,-1,-1,0,"/img/NoImage.png");
createCard(1,"転がる岩","岩がものすごい勢いで転がってきた。旧世代の防衛装置だ。",-3,-1,-1,0,"/img/NoImage.png");
createCard(1,"崩落","建物の天井が、崩壊した。",-2,-1,-2,0,"/img/NoImage.png");
createCard(1,"水没","奥が水で水没している。先に進むには覚悟が必要だ。",-1,-1,-1,0,"/img/NoImage.png");
createCard(1,"煙","煙が、噴出しだした。逃げられるだろうか？",-1,-2,-1,0,"/img/NoImage.png");
createCard(1,"炎スライム","火のスライムが飛び出してきた。",-2,0,-1,0,"/img/NoImage.png");
createCard(1,"水スライム","水のスライムが飛び出してきた。",-1,0,-1,0,"/img/NoImage.png");
createCard(1,"毒スライム","毒のスライムが飛び出してきた。",-3,0,-1,0,"/img/NoImage.png");
createCard(1,"幽霊","奥のほうに青白い人間がいて、こちらを見た。",0,-4,-1,0,"/img/NoImage.png");
createCard(1,"擬人","人の姿をした。明らかに人でない何かがこちらに向かってきた。",-3,-2,-1,0,"/img/NoImage.png");
createCard(1,"狼の群れ","オオカミの群れが襲ってきた。",-3,0,-1,0,"/img/NoImage.png");
createCard(1,"熊","クマが現れた。",-6,-1,-1,0,"/img/NoImage.png");
createCard(1,"奇怪な人工物","昔は、きちんとした形であっただろう機械がこちらに向かってきた。",-4,0,-1,0,"/img/NoImage.png");
createCard(1,"洞窟人","洞窟に住む洞窟人が襲ってきた。彼に目はない。",-4,-4,-1,0,"/img/NoImage.png");
createCard(1,"盗賊","盗賊が現れた。",-3,1,-1,0,"/img/NoImage.png");