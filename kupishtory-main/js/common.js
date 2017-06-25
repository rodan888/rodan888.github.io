$(document).ready(function() {

	$("#owl").owlCarousel({ 
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
       // autoPlay: true,
       pagination: true,
       singleItem:true
     });  

	$('#clock').countdown('2015/12/17', function(event) {
		$(this).html(event.strftime('<div> %D <span>дней</span></div><div>%H<span>часов</span></div> <div>%M<span>минут</span></div> '
		 ));
	});


	selectColor('.color_select li');
});

function selectColor(el){
	var element = $(el); 
	var colorItem = [];
	var count = 0;
	for(var i = 0; i < element.length; i++){
		var dataColor = element.eq(i).find('span').attr('data-color');
		colorItem.push(dataColor);
		element.eq(i).find('span').css({
			background: "#" + colorItem[i]
		});
	};
	$('.next_color').click(function(){
		count++;
		if (count == $(this).parents('.color_select').find(element).length ) {
			count = 0;
		};
		$(this).parents('.color_select').find(element).removeClass('active');
		$(this).parents('.color_select').find(element).eq(count).addClass('active');

	});
	$('.prev_color').click(function(){
		count--;
		if (count < 0 ) {
			count = $(this).parents('.color_select').find(element).length;		
		};
		$(this).parents('.color_select').find(element).removeClass('active');
		$(this).parents('.color_select').find(element).eq(count).addClass('active');
	});
	element.click(function(){
		count = $(this).index();
		$(this).parents('.color_select').find(element).removeClass('active');
		$(this).addClass('active');
	});
}