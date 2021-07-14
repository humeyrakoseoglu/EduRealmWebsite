//accordioin
$(function() {
var Accordion = function(el, multiple) {
this.el = el || {};
this.multiple = multiple || false;

var links = this.el.find('.link');

links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
}

Accordion.prototype.dropdown = function(e) {
var $el = e.data.el;
$this = $(this),
$next = $this.next();

$next.slideToggle();
$this.parent().toggleClass('open');

if (!e.data.multiple) {
$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
};
}

var accordion = new Accordion($('#accordion'), false);
});

// navbar
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
items.classList.add("active");
menuBtn.classList.add("hide");
searchBtn.classList.add("hide");
cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
items.classList.remove("active");
menuBtn.classList.remove("hide");
searchBtn.classList.remove("hide");
cancelBtn.classList.remove("show");
form.classList.remove("active");
cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
form.classList.add("active");
searchBtn.classList.add("hide");
cancelBtn.classList.add("show");
}