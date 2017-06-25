$(document).ready(function() {

	$("#carousel").owlCarousel({		
		navigation : true, 
		slideSpeed : 300,
		paginationSpeed : 400,		
		pagination: false,
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [991,2],			 
		singleItem:false
	}); 

	$(window).scroll(function(){
		var scrollPos = $(this).scrollTop();	
		if(scrollPos > 450){
			$('#contacts').css('left','-155px');
		}else{
			$('#contacts').css('left','0px');
		}
	});



	popup.init('.wiew_more','.popup');
	number();
	tabs();
});

function scrollW(el){	
	return $(el).scrollTop();	
}

function tabs(){
	var but = $('.uslugi li');
	var tabsCont = $('.tab_container .tab_item');

	but.on('click',function(){
		but.removeClass('activ_ser');
		$(this).addClass('activ_ser');
		tabsCont.css('display','none');
		$('.'+$(this).attr('data-tabs')).fadeIn('fast');
	});
}

function number(){
	var main 	= $('.numbers');
	var elPos = main.offset().top;
	var numbersBlock = $('.content span');
	console.log(numbersBlock.eq(2).html());	

	var count = 0;
	$(window).scroll(function(){
		var scrollT = $(this).scrollTop();	
		if(scrollT >= elPos - main.height()){
			main.find('.number').addClass('active_class');
			setInterval(function(){	
				for(var i = 0; i < numbersBlock.length; i++){						
					var dataNumber = numbersBlock.eq(i).attr('data-number');
					if(count < dataNumber){
						numbersBlock.eq(i).html(count);
					}else{
						numbersBlock.eq(i).html(dataNumber);
					}
				};
				count+=2;								
			}, 100);						
		}else{
			main.find('.number').removeClass('active_class');	
		}
	});
}

var popup = {
	windowH: function(){
		return $(window).height();
	},
	blockPos: function(el){
		$(el).css({
			paddingTop: $(el).height() - (popup.windowH() /2) +'px'
		});	
	},
	init: function(but,block){
		$(but).on('click',function(){	
			$(this).next().append('<span class="fade_out">&#9587;</span>').fadeIn('slow');

			// popup.blockPos(block);

			$('.fade_out').click(function(){
				$(block).fadeOut('slow');
				$(this).detach();
			});
		});
	}
}






















function windowHeight(elem){
	elem.height($(window).height());
}
function hParallax(){
	$('header').mousemove(function(e){
		// положение элемента
		var pos = $(this).offset();
		var elem_left = pos.left;
		var elem_top = pos.top;
		// положение курсора внутри элемента
		var Xinner = e.pageX - elem_left;
		var Yinner = e.pageY - elem_top;

		$(this)
		.css({
			backgroundPosition: -Yinner / 15+'px '+ (-Xinner / 20) +'px'
		}).find('.wrap_header')
		.css({
			backgroundPosition: Yinner / 20+'px '+ (Xinner / 30) +'px'
		})
		.children('h1').css({
			transform: 'translate(-'+ Yinner / 40 +'px, '+ Xinner / 50 +'px)'						
		});
	});
};	

var pageScroll = {
	itemAc: $('menu ul li a'),
	init: function(){
		pageScroll.itemAc.on('click',function(){
			var pos = $($(this).attr('data-id')).offset().top;
			$('body').animate({scrollTop: pos}, 1000);
			console.log(pos);
		});
	}
}

function tile(){
	var main = $('#container');
	var item = $('.tile');
	var itemLength = item.length;

	var firstCol = $('#container .tile:nth-child(3n+1)');
	var secondCol = $('#container .tile:nth-child(3n+2)');
	var firdCol = $('#container .tile:nth-child(3n+3)');

	var firstColSmall = $('#container .tile:nth-child(2n+3)');
	var secondColSmall = $('#container .tile:nth-child(2n+2)');
	if($(window).width() > 767){
		firstCol.wrapAll('<div class="firstCol"></div>');
		secondCol.wrapAll('<div class="secondCol"></div>');
		firdCol.wrapAll('<div class="firdCol"></div>');
	}else{
		firstColSmall.wrapAll('<div class="firstColSmall"></div>');
		secondColSmall.wrapAll('<div class="secondColSmall"></div>');
	}

	var fl = firstCol.length;
	var sl = secondCol.length;
	var fil = firdCol.length;
}
