
import '../scss/styles.scss';
import '../index.html';

let showMobileMenu = false

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const casesMediumSwiper = new Swiper(".cases__swiper", {
	slidesPerView: "2",
	spaceBetween: 30,
	freeMode: true,
	loop: false,
	pagination: {
	  el: ".cases__pagination",
	  clickable: true,
	},
	breakpoints: {
		0: {
		  slidesPerView: 1,
		  spaceBetween: 21,
		},
		500: {
		  slidesPerView: 2,
		  spaceBetween: 21,
		},
	},
	onAny(eventName) {
		if (eventName === "slideChangeTransitionEnd") {
			let swiper = document.querySelector(".cases__swiper")
			let slides = swiper.getElementsByClassName("swiper-slide")
			for (let i = 0; i < slides.length; i++) {
				if (slides[i].classList.contains("swiper-slide-active")) {
					slides[i].getElementsByClassName('case')[0].classList.add("case_selected");
				} else {
					slides[i].getElementsByClassName('case')[0].classList.remove("case_selected");
				}	
			}
		}
	},
  });

window.sendEmail = function(elem) {
	let emailInput = elem.parentNode.querySelector('.email-form__input')
	if (!emailInput.checkValidity()) {
		emailInput.reportValidity()
	} else {
		//отправка формы
		elem.parentNode.style.display = 'none';
		elem.parentNode.parentNode.querySelector('.email-form_success').style.display = 'block';
	}
}

window.toggleMenu = function() {
	document.querySelector(".mobile-menu").style.display = showMobileMenu ? "flex" : "none";
	showMobileMenu = !showMobileMenu;
}
