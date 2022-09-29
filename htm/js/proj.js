(function($, undefined){ 
$(function(){
		
	//
	// price with spaces
	function add_spaces(n) {
		return n.toLocaleString('ru');
	}

	
	//
	// data to template
	const data = [
		{
			id: 1,
			name: 'Коптильня 10л',
			price: 1200
		},
		{
			id: 2,
			name: 'Коптильня 20л',
			price: 1400
		},
		{
			id: 3,
			name: 'Коптильня 30л',
			price: 1600
		},
	];
	
	$(".cat .item").each(function(){
		let ind = $(this).index();
		
		let $name = $(this).find(".item__h a");
		$name.text(data[ind].name);
		
		let $price = $(this).find(".item__price");
		$price.text(add_spaces(data[ind].price) + " руб.");
	});

	
	//
	// btn clicks
	$(".cat").on("click", ".item__but", function(e) {
		let $i = $(this);
		
		if(!$i.prop('disabled')) {
			$(this)
				.prop('disabled', true)
				.text("Добавлено");
			
			let price = +$i.parents(".item").find(".item__price").text().replace(/\D/g, '');
			let $sum = $i.parents(".cat").find(".cat__sum .sum__val");
			let sum = add_spaces(+$sum.text().replace(/\D/g, '') + price);
			$sum.text(sum);
		}	
		
		return false;
	});
	
});
})(jQuery);