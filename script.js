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
	{
		description:
			"Mostly enjoying reading biographies, memoirs and fiction. My favorite books are: 'All quiet on the western front', 'The Forgotten Soldier'",
	},
	{
		description:
			"I'm enjoying hiking in the mountains and even though there aren't many around where I live, I tend to go few times a year.",
	},
	{
		description:
			"History wise I enjoy reading and learning modern history. Mostly both world wars.",
	},
	{
		description:
			"I practice all kinds of sports like cycling, running, volleyball, but mostly gym and football.",
	},
];

const content = document.getElementById("interest-content");
const tabs = document.querySelectorAll(".interest-tab");
const backgroundDiv = document.createElement("div");
backgroundDiv.classList.add("interest-content-background");
tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		tabs.forEach((t) => t.classList.remove("active"));
		tab.classList.add("active");

		const index = tab.getAttribute("data-index");
		content.innerHTML = `
                    <span>${hobbies[index].description}</span>
                `;
		content.appendChild(backgroundDiv);
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
