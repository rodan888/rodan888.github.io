$(document).ready(function() {
	tabs();
	marquee();
	scrollBut();
	foto();

	$('.tog_mnu').on('click',function(){
		$(this).toggleClass('tog_active').next().toggle(800);
	});
	
	$('#topsearch input').focusin(function(){
		$(this).next().css('right','0px');
	}).focusout(function(){
		$(this).next().css('right','-40px');
	});

});

function foto(){
	var mainBlock = $('.cat');
	var actImg = $('.cat ul img');
	var sortBut = $('.cat_list li');

	sortBut.on('click',function(){
		sortBut.removeClass('active');
		$(this).addClass('active');	
		mainBlock.not('#'+$(this).attr('data-show')).css('display','none');
		if($(this).attr('data-show') == "all"){
			mainBlock.fadeIn('fast');
		}else if(mainBlock.is(':hidden')){			
			$('#'+$(this).attr('data-show')).fadeIn('fast');
		}		
	});
	actImg.on('click',function(){
		$(this).fadeOut('fast');
		if($(this).parents('ul').find('li:eq(1) img').is(':hidden')){
			$(this).parents('ul').find('img').fadeIn('fast');
		}
	});
}

function tabs(){
	var but = $('.tabs_link p');
	var tabsCont = $('.tabs_cont ul');

	but.on('click',function(){
		but.removeClass('activ_tab');
		$(this).addClass('activ_tab');
		tabsCont.css('display','none');
		$('.'+$(this).attr('data-show')).fadeIn('fast');
	});
}

function marquee(){
	var marquee = $("#marquee");
	var itemLeng = marquee.find('.item').length;
	var itemWidth = $('#marquee .item'), max = 0, elem;
	itemWidth.each(function () {
		if (this.offsetWidth > max)
			max = this.offsetWidth, elem = this;
	});
	var wrapWidth = max*itemLeng;	
	marquee.wrapInner('<div class="item_wrap">');
	marquee.find(".item_wrap").css("width",  wrapWidth+ 'px');
	var reset = function() {
		$(this).css("margin-left", "100%");
		$(this).animate({ "margin-left": -wrapWidth + 'px' }, wrapWidth*20, 'linear', reset);
		$(this).mouseover(function(){
			$(this).stop();
		}).mouseout(function() {
			$(this).animate({ "margin-left": -wrapWidth + 'px' }, wrapWidth*20, 'linear', reset);
		});
	};
	reset.call(marquee.find("div"));
}

function scrollBut(){
	$('<button type="button" class="up"><i class="fa fa-chevron-up"></i></button>').appendTo('body');
	var up = $('.up');
	up.css({
		position: 'fixed',
		border: 'none',			
		bottom: '20px',
		right: '0',
		display: 'none',
		width: '50px',
		height: '50px',
		lineHeight: '25px',
		textAlign: 'center',
		fontSize: '30px',	
		color: '#fff',
		backgroundColor: '#A43125',
		"box-shadow": "rgb(0, 0, 0) 1px 2px 3px",
		zIndex: '10'
	});
	$(window).scroll(function(){		
		if ($('body').scrollTop() > 600) {
			up.fadeIn('slow');
		}else{
			up.fadeOut('slow');
		};
	});
	up.click(function() {
		$('body').animate({scrollTop:0}, 1000);
	});			
};
