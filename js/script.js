$(function() {

	/* Isotope for product grid */

	var $container = $('.product-grid.masonry');
	$container.isotope({
	  masonry: {
	  	columnWidth: '.product-sizer',
	  	gutter: 0
	  },
	  itemSelector: '.product'
	});

	/* Isotope for blog grid */

	var $container = $('.post-grid.masonry');
	$container.isotope({
	  masonry: {
	  	columnWidth: '.post-sizer',
	  	gutter: 0
	  },
	  itemSelector: '.post'
	});

	/* Isotope for image grid */
	var $imageContainer = $('.image-grid');
	$imageContainer.isotope({
	  masonry: {
	  	columnWidth: '.grid-image-sizer',
	  	gutter: 0
	  },
	  itemSelector: '.grid-image'
	});

	/* Flexslider for homepage/lookbook */
    $('.full-slider').flexslider({
    	directionNav: false
    });

    /* Filter Dropdown */
    $(".toggle-filter").on("click", function(){
    	$(".filter-bar").slideToggle();
    	return false;
    });

});






















