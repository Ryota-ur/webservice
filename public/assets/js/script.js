jQuery('.drawer__icon').on('click',function(e){
e.preventDefault();

jQuery('.drawer__icon').toggleClass('is-active');
jQuery('.drawer__content').toggleClass('is-active');
return false;

});
