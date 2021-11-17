
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
