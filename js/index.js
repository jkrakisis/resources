$(document).ready(function() {
	// main page list
		$('div.list >ul').children().each(function (i)
			{
				if (i>0) { 
					$(this).hide();
				}
				else {
					$(this).show(); 
				}
		});
		
		$('div.list').find('a').click(function()
		{
			$('div.list >ul').children().hide();
			
			$($(this).attr('href')).show();
			
			return false;
		});

	//원페이지
	
	$(window).scroll(function (event) {
		var $window = $(this).scrollTop();
		if ($window >= 320) {
			$('#lnb').addClass('fix');
		} else {
		   $('#lnb').removeClass('fix');
		}
	});

	// get sections top position
	function getTargetTop(elem) {

		var id = elem.attr("href"),
			offset = 1;

		// gets the distance from the top and subtracts the height of the nav
		return $(id).offset().top - offset;
	}

	// @action: mark the current navigation item


	function checkSectionSelected(scrolledTo) {
		var sections = $('.lnb-menu li a[href^="#"]'),
			threshold = 100,
			// how close the top has to be to the section
			i;
		sections.parent().removeClass("active");
		for (i = 0; i < sections.length; i++) {

			var section = $(sections[i]),
				target = getTargetTop(section);

			// if section is at the top of the page
			if (scrolledTo > target - threshold && scrolledTo < target + threshold) {

				// remove all selected elements
				sections.parent().removeClass("active");

				// add current selected element
				section.parent().addClass("active");
			}

		}
	}

	// if page is already scrolled to a section
		checkSectionSelected($(window).scrollTop());
		$(window).scroll(function (e) {
			checkSectionSelected($(window).scrollTop());
		});

	// @action: scroll to an element by id
		$(function () {
			$('.lnb-menu li a[href*="#"]:not([href="#"])').click(function () {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var $target = $(this.hash);
					var customoffset = 85;
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
					if ($target.length) {
						var targetOffset = $target.offset().top
						$('html,body').animate({
							scrollTop: targetOffset - customoffset 
						
						}, 800);
						$this.hash.replace(/^#/, '');
						
						return false;
					}
				}
			});
		});
		// @action: scroll to top
		$('.btn-top').hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() !== 0) {
				$('.btn-top').slideDown();
				//$('.btn-top').removeClass("active");
			} else {
				$('.btn-top').slideUp();
				//$('.btn-top').addClass("active");
			}
		});
		$(".btn-top").click(function () {
			$('body,html').stop().animate({
				scrollTop: 0
			}, 800);
		});
	
});
		