import "../scss/styles.scss"
import "../index.html"

let showMobileMenu = false
const flexSections = ["offer", "banks", "tariffs", "safety"]

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
})

// eslint-disable-next-line no-undef, no-unused-vars
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
			const casesSwiper = document.querySelector(".cases__swiper")
			const slides = casesSwiper.getElementsByClassName("swiper-slide")
			for (let i = 0; i < slides.length; i += 1) {
				if (slides[i].classList.contains("swiper-slide-active")) {
					slides[i].getElementsByClassName("case")[0].classList.add("case_selected")
				} else {
					slides[i].getElementsByClassName("case")[0].classList.remove("case_selected")
				}
			}
		}
	},
})

window.sendEmail = function(elem) {
	const emailInput = elem.parentNode.querySelector(".email-form__input")
	if (!emailInput.checkValidity()) {
		emailInput.reportValidity()
	} else {
		// отправка формы
		elem.parentNode.style.display = "none"
		elem.parentNode.parentNode.querySelector(".email-form_success").style.display = "block"
	}
}

window.toggleMenu = function() {
	const mainSections = document.querySelector("main").getElementsByTagName("section")
	showMobileMenu = !showMobileMenu
	for (let i = 0; i < mainSections.length; i += 1) {
		if (mainSections[i].className === "mobile-menu") {
			mainSections[i].style.display = showMobileMenu ? "flex" : "none"
			document.querySelector("footer").style.display = showMobileMenu ? "none" : "block"
		} else if (flexSections.includes(mainSections[i].className)) {
			mainSections[i].style.display = showMobileMenu ? "none" : "flex"
		} else {
			mainSections[i].style.display = showMobileMenu ? "none" : "block"
		}
	}
}
