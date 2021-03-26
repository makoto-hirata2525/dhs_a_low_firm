$(window).on("resize orientationchange", function (e) {
	var wsw = window.screen.width;
	if (wsw <= 767) {
		$("meta[name='viewport']").attr("content", "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no");
	} else if (wsw < 1125) {
		$("meta[name='viewport']").attr("content", "width=1124");
	} else {
		$("meta[name='viewport']").attr("content", "width=device-width");
	}
}).trigger("resize");

// accordion.js
$(function() {
	$('.accordion dl dd').hide();
	$('.accordion dl dt.opened').nextUntil('.accordion dl dt').show();
	$('.accordion dl dt').click(function(e) {
		$(this).toggleClass('opened');
		$(this).nextUntil('.accordion dl dt').slideToggle('normal');
	});

});
$(function() {
	$('.drop_menu #NavWrap li.drop_wrap').click(function(e) {
		$(this).toggleClass('opened');
	});
});
// Page Top Fade
$(function() {
    //ロード or スクロールされると実行
    $(window).on('load scroll', function(){
        
        //ヘッダーの高さ分(79px)スクロールするとfixedクラスを追加
        if ($(window).scrollTop() > 108) {
            $('#fix_menu').addClass('fixedMenu');
            $('#content').addClass('fixed_link');
            $('.page_links').addClass('fixed_link');
        } else {
            //80px以下だとfixedクラスを削除
            $('#fix_menu').removeClass('fixedMenu');
            $('#content').removeClass('fixed_link');
            $('.page_links').removeClass('fixed_link');
        }
        
    });
});
$(function() {
	var topBtn = $('#pageTop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 108) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
    });
});

$(function(){
  $('a[href^="#"]').click(function(){
  var headerHight = 300; //ヘッダの高さ
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(document).ready(function(){
		$(function() {
			$('.action').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
				if(isInView){
					$(this).addClass('once');
		    	} 
			});
		});
});
/*$(function () {
 var headerHight = 200; //ヘッダの高さ
 $('a[href^=#]').click(function(){
     var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
     $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
   });
});*/