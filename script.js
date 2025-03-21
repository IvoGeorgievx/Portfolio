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

const hobbies = [
	{ name: "Reading", description: "Something something" },
	{ name: "Sports", description: "Gym" },
	{ name: "History", description: "WWII" },
	{ name: "Hiking", description: "Mountains" },
];

const content = document.getElementById("interest-content");
const tabs = document.querySelectorAll(".interest-tab");
tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		tabs.forEach((t) => t.classList.remove("active"));
		tab.classList.add("active");

		const index = tab.getAttribute("data-index");
		content.innerHTML = `
                    <span>${hobbies[index].name}</span>
                    <span>${hobbies[index].description}</span>
                `;
	});
});

const navbar = document.querySelector(".navbar");
let idleTimeout;
let isHovering = false;

function hideNavbar() {
	if (!isHovering) {
		navbar.classList.add("nav-hidden");
	}
}

navbar.addEventListener("mouseover", () => {
	isHovering = true;
	resetIdleTimer();
});

navbar.addEventListener("mouseout", () => {
	isHovering = false;
	resetIdleTimer();
});
function resetIdleTimer() {
	navbar.classList.remove("nav-hidden");
	clearTimeout(idleTimeout);
	idleTimeout = setTimeout(hideNavbar, 3000);
}

window.addEventListener("scroll", resetIdleTimer);

resetIdleTimer();
