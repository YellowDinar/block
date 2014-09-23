localStorage['show'] = 0;
$(function() {
    $('body').bind('mouseleave', function(e) {
        if (localStorage['show'] == 0) {
            
            document.querySelector('.md-trigger').click()
            
            localStorage['show'] = 1;
        }
    });
    
	$('.close').click(function() {
		$('.wrapModal').hide();
	});

	$('.head .btn, .footer .btn, .count2 .btn').click(function() {
		$('.wrapModal').show();
	});

        $(window).bind('scroll', function() {
        var prem = $('.howworkTitle').offset().top;
        var scroll = $(window).scrollTop();
        var arrow = $('#up');
        if(scroll > prem) {
            $(arrow).show();
            $(arrow).animate({
                'opacity': 1
            });
        }else {
            $(arrow).hide();
            $(arrow).css('opacity', 0);
        }
    });

});

var price = 0;

function on_select(val){
    price = 0;
    document.querySelector('#params').style.display = 'none';
    if (!Number(val)) {
        document.querySelector('#params').style.display = 'block';
    } else {
        price = Number(val) / 1000000 * 1800;
    }
}

function calculate() {
    var s = $('#s').val();


    if (s) {
        if (price) {
            $('.summ')[0].innerHTML = s * price + ' руб';
            $('.count2').css('display','inline-block');
        } else {
            if (document.querySelector('#params').style.display || document.querySelector('#params').style.display == 'block'){
                var l = document.querySelector('#c_length').value;
                var w = document.querySelector('#c_width').value;
                var h = document.querySelector('#c_height').value;

                if (l && w && h) {
                    if (Boolean(Number(l)) && Boolean(Number(w)) && Boolean(Number(h))) {
                        price = Number(l)/100 * Number(w)/100 * Number(h)/100 *1800;
                        $('.summ')[0].innerHTML = s * price + ' руб';
                        $('.count2').css('display','inline-block');
                    } else {
                        alert('Параметр должен быть числом!');
                    }
                } else {
                    alert('Заполните размеры блока!');
                }
            } else {
                alert('Выберете тип блока!');
            }
        }
    } else {
        alert ('Заполните площадь!');
    }

}

$(function() {
    var position = $('.weTitle').offset().top - $(window).height()/2;
    var first = $('.we').find('.text').get(0);
    var second = $('.we').find('.text').get(1);
    var third = $('.we').find('.text').get(2);
    $(window).bind('scroll', function() {
        var windowScroll = $(window).scrollTop();
        if(windowScroll>position) {
            setTimeout(function() {
                $(first).animate({
                    'opacity': 1,
                    'padding-left': 370
                }, 300);
            },0);
            setTimeout(function() {
                $(second).animate({
                    'opacity': 1,
                    'padding-left': 370
                }, 300);
            },300);
            setTimeout(function() {
                $(third).animate({
                    'opacity': 1,
                    'padding-left': 370
                }, 300);
            },600);
            $(window).unbind('scroll');
        }
    });
});

$(function() {
    var firstImg = $('.firsthow').find('img').get(0);
    var firstText = $('.firsthow').find('span').get(0);
    var secondImg = $('.secondhow').find('img').get(0);
    var secondText = $('.secondhow').find('span').get(0);
    var thirdImg = $('.thirdhow').find('img').get(0);
    var thirdText = $('.thirdhow').find('span');
    var position = $('.howworkTitle').offset().top - $(window).height()/2;
    $(window).bind('scroll', function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop>position) {
            setTimeout(function() {
                $(firstImg).animate({
                    'opacity':1,
                    'margin-top':0
                 },300);
            },0);                
            setTimeout(function() {
                $(firstText).animate({
                    'opacity':1,
                    'margin-left':0
                },300);
            },600);
            setTimeout(function() {
                $('.firstarr').animate({
                    'opacity':1
                },300);
            },900);
            setTimeout(function() {
                $(secondImg).animate({
                    'opacity':1,
                    'margin-top':0
                 },300);
            },1200);                
            setTimeout(function() {
                $(secondText).animate({
                    'opacity':1,
                    'margin-left':0
                },300);
            },1500);
            setTimeout(function() {
                $('.secondarr').animate({
                    'opacity':1
                },300);
            },1800);
            setTimeout(function() {
                $(thirdImg).animate({
                    'opacity':1,
                    'margin-top':0
                 },300);
            },2100);                
            setTimeout(function() {
                $(thirdText).animate({
                    'opacity':1,
                    'margin-left':0
                },300);
            },2400);

        }
    });
     
});

$(document).ready(function() {


    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 700,
            easing: "swing"
        });
        return false;
    });


});