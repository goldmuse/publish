$(document).ready(function () {

  
  $(window).on ("scroll", function(){
  
    var etc_height = $(window).height();
     
    if( $(window).scrollTop() < 100 ){
      $('.gnb').removeAttr('style');
    } else {
      $('.gnb').css('background', 'rgba(255,255,255,1)').css('border-bottom','1px solid rgba(211,211,211,1)');
    }
  });

  //select design 
  $('select').wrap('<span class="select_wrapper"></span>')
  $('select').parent().prepend('<span>'+ $(this).find(':selected').text() +'</span>');

  $('select').css('display', 'none');					
  $('select').parent().append('<ul class="select_inner"></ul>');
  $('select').children().each(function(){
    var opttext = $(this).text();
    var optval = $(this).val();
    $('select').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
  });

  $('select').parent().find('li').on('click', function (){
    var cur = $(this).attr('id');
    $('select').parent().children('span').text($(this).text());
    $('select').children().removeAttr('selected');
    $('select').children('[value="'+cur+'"]').attr('selected','selected');					
    //console.log($('select').children('[value="'+cur+'"]').text());
    $('select').parent().removeClass('openSelect');
    $('select').parent().find('ul').hide();
  });

  $('select').parent().find('span').on('click', function (){
    $('select').parent().find('ul').slideToggle(200);
    $('select').parent().toggleClass('openSelect');
  });
  
 $('#calendar + .header').append('');

//댓글 바로가기 링크 
 $('#comment').on('click', function(){
  var docHeight = $('.substance').height() + 132;
  $(window).scrollTop(docHeight);
 });

$('.ceomass .btn_lnkks').on('click', function(){
  $('.layerPopup').addClass('on');
  $('.ceomass').css('display', 'none');
});
//메인 팝업 닫기
$('.layerPopup .btn_close').on('click', function(){
  $('.layerPopup').removeClass('on');
  $('.ceomass').css('display', 'block');

}); 
  
});