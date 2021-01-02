$('ul').on("click", "li", function(){
	$(this).toggleClass("done");
});

$('ul').on("click", "span", function( event ){
	$(this).parent().fadeOut( function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
	if( event.which === 13 ){
		var newTodo = $(this).val();
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
})