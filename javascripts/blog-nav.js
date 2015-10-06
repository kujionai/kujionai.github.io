$(window).scroll(
{
  previousTop: 0
},
function () {
  var currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop) {
    $(".blog-nav").css({ 'opacity': "1" });
  } else {
    $(".blog-nav").css({ 'opacity': "0" });
  }
  this.previousTop = currentTop;
});