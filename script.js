const observer = new IntersectionObserver((sections) => {
	sections.forEach((section) => {
		if (section.isIntersecting) {
			section.target.classList.add("show");
		} else {
			section.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element) => observer.observe(element));
