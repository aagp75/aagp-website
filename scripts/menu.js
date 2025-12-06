(function(d){
	
	// d = document
	
	const $nav = d.querySelector('nav');
	const $btn = d.querySelector('.btn-menu');
	
	$btn.addEventListener('click', function(){		

		/* change the show/hide state of the nav element */
		$nav.classList.toggle('show');	

		/* swap the symbol each time user clicks the show hide menu button...*/
		if($btn.innerHTML == "☰"){
			$btn.innerHTML = "✕";
		}else{
			$btn.innerHTML = "☰";
		}		

	});
	
	
})(document);