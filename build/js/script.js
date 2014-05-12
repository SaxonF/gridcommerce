$(function() {

  /* Parallax effect on header */
  if($("header.cover").length > 0)
  {

    // Global vars
    var viewportHeight = $(window).height();
    var $imageHeader = $('header.cover');
    var $imageInner = $('.image-inner');
    var $imageTitle = $imageHeader.find('h1');
    var $imageSubtitle = $imageHeader.find('p');
    var $imageArrow = $imageHeader.find('a.scroll-down');
    var windowScroll;
    var isMobile = false;

    if ( jQuery(window).width() < 1025 ) {
      $imageHeader.height(viewportHeight - 116);
    }
    else{
      $imageHeader.height(viewportHeight);
    }
    // If large viewport and not mobile, parallax the title
    if(!isMobile) {
      $(window).scroll(function() {
        slidingTitle();
      });
    }
    // Resize image header
    $(window).resize(function() {
      var viewportHeight = $(window).height();
      if ( jQuery(window).width() < 1025 ) {
        $imageHeader.height(viewportHeight - 116);
      }
      else{
        $imageHeader.height(viewportHeight);
      }
    });

    // Functional parallaxing calculations
    function slidingTitle() {
    
      //Get scroll position of window
      windowScroll = $(this).scrollTop();

      //Slow scroll of .art-header-inner scroll and fade it out
      
      $imageInner.css({
        'top' : (windowScroll/2)+"px",
        'opacity' : 1-(windowScroll/400)
      });

      //Slowly parallax the background of .art-header
      $imageHeader.css({
        'background-position' : 'center ' + (-windowScroll/2)+"px"
      });

    }

  }

	/* Isotope for product grid */
  if($('.product-grid.masonry').length > 0){
    var $container = $('.product-grid.masonry').imagesLoaded( function() {
      $container.isotope({
        masonry: {
          columnWidth: '.product-sizer',
          gutter: 0
        },
        itemSelector: '.product'
      });
    }).progress( onProgress );
  }
	/* Isotope for blog grid */

  if($('.post-grid.masonry').length > 0){
    var $blogContainer = $('.post-grid.masonry').imagesLoaded( function() {
    	$blogContainer.isotope({
    	  masonry: {
    	  	columnWidth: '.post-sizer',
    	  	gutter: 0
    	  },
    	  itemSelector: '.post'
    	});
    }).progress( onProgress );
  }

	/* Isotope for image grid */
  if($('.image-grid.masonry').length > 0){
  	var $imageContainer = $('.image-grid').imagesLoaded( function() {
    	$imageContainer.isotope({
    	  masonry: {
    	  	columnWidth: '.grid-image-sizer',
    	  	gutter: 0
    	  },
    	  itemSelector: '.grid-image'
    	});
    }).progress( onProgress );
  }
	/* Flexslider for homepage/lookbook */
  $('.full-slider').flexslider({
  	directionNav: false
  });

  /* Filter Dropdown */
  $(".toggle-filter").on("click", function(){
  	$(".filter-bar").slideToggle();
  	return false;
  });

  /* Responsive menu */
  $(".nav-toggle").on("click", function(){
  	$(this).toggleClass("active");
  	$(".site-nav").toggleClass("active");
  });

  /* Product image slider on mobile */
  if ( jQuery(window).width() < 768 ) {
    $('.mobile-slider').flexslider({
      directionNav: false
    });
  }

  /* Affix */
  var $affix = $('.affixed');
  if ($affix.length > 0){
    var top = $affix.offset().top - 65;
    var $section = $affix.closest('article');
    var viewportHeight = $(window).height();
  	var sidebarHeight = $affix.offset().top + $affix.height();
  	if((sidebarHeight) < viewportHeight){
  	    var bottom = $(document).height() + 65 - ($section.offset().top + $section.outerHeight());
  	    $('.affixed').affix({
  	          offset: {
  	            top: top,
  	            bottom: bottom
  	          }
  	    });
  	 } 
  }

});

jQuery(window).load(function() {
  /**** Fading in elements sequentially ****/

  $('.fade-sequence').each(function(i) {
    var $item = $(this);
    setTimeout(function() {
        $item.addClass('in');
    }, (i++) * 1000);
  })
});

/* Product image slider when resizing */
jQuery(window).resize( function () {
  if ( jQuery(window).width() < 768 ) {
    $('.mobile-slider').flexslider({
      directionNav: false
    });
  }
});


/* Image loader class */
function onProgress( imgLoad, image ) {
  // change class if the image is loaded or broken
  var $item = $( image.img ).parent().parent();
  console.log($item);
  $item.removeClass('is-loading');
  if ( !image.isLoaded ) {
    $item.addClass('is-broken');
  }
}



















