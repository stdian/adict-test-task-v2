
import '../scss/styles.scss';
import '../index.html';
document.designMode = "on"

let showMobileMenu = false

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
  
	// Navigation arrows
	// navigation: {
	//   nextEl: '.swiper-button-next',
	//   prevEl: '.swiper-button-prev',
	// },
  
	// // And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
});

const casesMediumSwiper = new Swiper(".cases__swiper_medium", {
	slidesPerView: "2",
	spaceBetween: 30,
	freeMode: true,
	loop: false,
	pagination: {
	  el: ".cases__pagination_medium",
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
	}
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
	let mainSections = document.querySelector("main").getElementsByTagName("section");
	let flexSections = ["offer", "banks"]
	for(let i = 0; i < mainSections.length; i++) {
		if (mainSections[i].className === "mobile-menu") {
			mainSections[i].style.display = showMobileMenu ? "none" : "flex";
		} else {
			if (flexSections.includes(mainSections[i].className)) {
				mainSections[i].style.display = showMobileMenu ? "flex" : "none";
			} else {
				mainSections[i].style.display = showMobileMenu ? "block" : "none";
			}
		}
	}
	showMobileMenu = !showMobileMenu;
	console.log(main);
}
