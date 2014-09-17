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