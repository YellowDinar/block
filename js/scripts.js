localStorage['show'] = 0;
$(function() {
    $('body').bind('mouseleave', function(e) {
        if (localStorage['show'] == 0) {
            
            document.querySelector('.md-trigger').click()
            
            localStorage['show'] = 1;
        }
    });
    
	$('.close a').click(function() {
		$('.wrapModal').hide();
	});

	$('.head .btn, .footer .btn, .count2 .btn').click(function() {
		$('.wrapModal').show();
	});
});

function calculate() {
    var l = $('#c_length').val();
    var w = $('#c_width').val();
    var h = $('#c_height').val();
    var a = $('#c_amount').val();
    if (l && w && h && a) {
        if (Boolean(Number(l)) && Boolean(Number(w)) && Boolean(Number(h)) && Boolean(Number(a))) {
            $('.summ')[0].innerHTML = l*w*h*a*1000 + ' руб';
            $('.count2').css('display','inline-block');
        } else {
            alert('Параметр должен быть числом!');
        }
    } else {
        alert('Заполните все поля!');
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