
$(document).ready(function(){
  // 떨어지는 돈, 2초 정도 후에 실행
  setTimeout(function(){
    $('#_splitCoin').animate({
      top: '+=478',
    }, 200, function() {
  
    });
  }, 2000);

  
  
  // 송금 페이지
  $('#_sendmoneyTop').animate({
    top: '+=368',
  }, 500, function() {
  });

  $('#_sendmoneyBottom').animate({
    bottom: '+=368',
  }, 500, function() {
  });
});
