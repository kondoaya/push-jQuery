const fortuneResultsMoney = [
  { stars: '★★★', detail: '最高の金運です！いつの間にかお金が溜まっているかも・・・？'},
  { stars: '★★', detail: 'まずまず金運です！使いすぎには注意しましょう！'},
  { stars: '★', detail: '悪い傾向が見られます！財布の紐は絞めておくと吉です！'}
];

const fortuneResultsWork = [
  { stars: '★★★', detail: '最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？'},
  { stars: '★★', detail: 'まずまず仕事運です！普段通り仕事が進むでしょう！'},
  { stars: '★', detail: '悪い傾向が見られます！自信過剰にならないように注意しましょう'}
];

const fortuneResultsHealth = [
  { stars: '★★★', detail: '最高の健康運です！ランニングの距離を伸ばしても良いですね！'},
  { stars: '★★', detail: 'まずまず健康運です！無理せず体を動かしましょう！'},
  { stars: '★', detail: '悪い傾向が見られます！ケガにご注意を・・・'}
];



$(function () {
  $('.js-fortune-start').click(function() {
    let js_fortune_num = Math.floor( Math.random() * 3 );
    return js_fortune_num;
  });
});


for(let stars in detail) {
  if(js_fortune_num == 0){
      console.log(`${stars} : ${detail[0][key]}`);
    }else if(js_fortune_num == 1){
      console.log(`${stars} : ${detail[1][key]}`);
    }else if(js_hand_num == 2){
      console.log(`${stars} : ${detail[2][key]}`);
    }
}
