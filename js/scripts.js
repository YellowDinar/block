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