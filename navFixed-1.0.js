$.fn.navFixed = function(){
	$_this = $(this);
	_topPosition = $(document).scrollTop();
	_navPosition = $_this.prev().height();
	_if();

	$(document).scroll( function() {
		_topPosition = $(document).scrollTop();
		_if();
	});

	$(window).resize(function(){ 
		_navPosition = $_this.prev().height();
		_if();
	}); 

	function _if(){
		if (_topPosition>=_navPosition){
			$_this.css("position", "fixed");
			$_this.next().css("margin-top", $_this.height());
		}else{
			$_this.css("position", "relative");
			$_this.next().css("margin-top", "0");
		}
	}
}
