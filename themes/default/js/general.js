$(document).ready(function() {
//Prevent Page Reload on all # links
$("a[href='#']").click(function(e) {
	e.preventDefault();
});

// On scroll header small
$(window).scroll(function(e) {
	if($(window).scrollTop() > 0)
		$(".wrapper").addClass('small-header');
	else
		$(".wrapper").removeClass('small-header');
});

// Menu Show Hide
$('.nav-menu').click(function(){
	if($('body').hasClass('collapsed-menu')) {
		$('body').removeClass('collapsed-menu');
	}
	else{
		$('body').addClass('collapsed-menu');
	}
});

//icheck(checkbox & radio)
$('.icheck').iCheck({
	checkboxClass: 'icheckbox_square',
	radioClass: 'iradio_square',
    increaseArea: '20%' // optional
});

//Addition & Subtraction
$(".btn-control.addition").click(function(e){
	e.preventDefault();
	var $this = $(this);
	var randomNo = parseInt(Math.floor((Math.random() * 100000) + 1));
	var template = $this.attr("data-row");
	template = template.replace(/{random}/g, randomNo);
	$this.closest("li").append(template);
	$('#'+randomNo).iCheck({
		checkboxClass: 'icheckbox_square',
		increaseArea: '20%' // optional
	});
	

	$(".btn-control.substract").click(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.closest(".row").remove();
	});

	/*$('.icheck').iCheck({
		checkboxClass: 'icheckbox_square',
		radioClass: 'iradio_square',
		increaseArea: '20%'
	});*/
});

//Generating Dynamic ids for checkbox
//$('.form-control-block label').each(function(i, e){
//	$this = $(this).closest("li");
//	$this.find('input[type="radio"]').attr("name", "radio_" + i);
//});

// Sub nav Open
$(".menu-left li a").click(function(){
	var $this = $(this).closest('li');
	var bodyClass = $("body").attr("class");
	if(bodyClass == 'collapsed-menu')
	{
		$this.find(".sub-menu-nav").stop(true,true).slideToggle();
	}else{
		if($this.hasClass('active')){
			$this.removeClass('active');
			$this.find(".sub-menu-nav").stop(true,true).slideUp();
		}else{
			$this.siblings('li').removeClass('active').find(".sub-menu-nav").stop(true,true).slideUp();
			$this.addClass('active');
			$this.find(".sub-menu-nav").stop(true,true).slideDown();
		}
	}
});

if($(".side-bar-menu .menu-left li.nav-parent .sub-menu-nav li.active").length > 0) {
    var menu_parent_id = $(".side-bar-menu .menu-left li.nav-parent .sub-menu-nav li.active").parents(".nav-parent")    
    menu_parent_id.addClass('active');
    menu_parent_id.find(".sub-menu-nav").stop(true,true).slideDown();
}
/*if($(".side-bar-menu .sub-menu-nav li.active").length > 0) {
    $(".side-bar-menu .sub-menu-nav li.active").length
}*/
// Custom Dropdown
$("select[data-type='custom-dropdown']").dropkick({
	mobile: true
});

$('.utility_select').multiselect({
	//enableClickableOptGroups: true,
	nonSelectedText : 'Select utility to generate report chart'
});

// Custom File Upload 
$('input[type=file]').customFile();

// Footer Bottom
$('.fluid-wrap').css({"min-height": $(window).height() - $('.header').height()});

});

$("[placeholder]").each(function () {
	$(this).attr("data-placeholder", this.placeholder);

	$(this).bind("focus", function () {
		this.placeholder = '';
	});
	$(this).bind("blur", function () {
		this.placeholder = $(this).attr("data-placeholder");
	});
});