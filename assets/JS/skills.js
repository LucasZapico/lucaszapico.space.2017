const SKILLS = [
	{
		title: "HTML5",
		level: 90,
		labels: ["frontend", "basics", "html"]
	},
	{
		title: "CSS3",
		level: 80,
		labels: ["frontend", "basics", "css"]
	},
	{
		title: "SASS",
		level: 80,
		labels: ["frontend", "css", "sass"]
	},
	{
		title: "Materializecss",
		level: 100,
		labels: ["frontend", "css", "sass", "cssframework"]
	},
	{
		title: "Semantic UI",
		level: 85,
		labels: ["frontend", "css", "sass", "cssframework"]
	},
	{
		title: "Bulma",
		level: 80,
		labels: ["frontend", "css", "sass", "cssframework"]
	},
	{
		title: "Bootstrap",
		level: 80,
		labels: ["frontend", "css", "sass", "css-framework"]
	},
	{
		title: "Foundation",
		level: 80,
		labels: ["frontend", "css", "sass", "css-framework"]
	},

	{
		title: "Vinilla JavaScript",
		level: 70,
		labels: ["frontend", "basics", "javascript"]
	},
	{
		title: "ES6",
		level: 75,
		labels: ["frontend", "basics", "javascript", "es6"]
	},
	{
		title: "Reactjs",
		level: 50,
		labels: ["frontend", "js-library", "react-js"]
	},
	{
		title: "Redux",
		level: 35,
		labels: ["frontend", "js-library", "middleware", "state"]
	},
	{
		title: "Nodejs",
		level: 45,
		labels: ["backend", "node-js"]
	},
	{
		title: "Expressjs",
		level: 65,
		labels: ["backend", "node-js"]
	},
	{
		title: "Webpack",
		level: 75,
		labels: ["devopts", "node-js"]
	},
	{
		title: "Grunt",
		level: 60,
		labels: ["devopts", "node-js"]
	},
	{
		title: "Gulp",
		level: 60,
		labels: ["devopts", "node-js"]
	},
	{
		title: "Docker",
		level: 25,
		labels: ["devopts", "node-js"]
	},
	{
		title: "Virtual Box",
		level: 10,
		labels: ["devopts", "node-js"]
	}
];

window.onload = () => {
	// const key = document.querySelector(".key");
	const skillWrap = document.querySelector(".skill-bars");
	const frontendSection = document.querySelector(".frontend");
	const backendSection = document.querySelector(".backend");
	const devoptsSection = document.querySelector(".devopts");
	let skill = skillWrap.firstElementChild;

	// Show hide key

	// key.firstElementChild.addEventListener('click', ()=>{
	//  if(key.classList.contains('hidden')){
	// 		key.classList.remove('hidden');
	//  }else {
	// 	 key.classList.add('hidden');
	//  }
	// })

	SKILLS.forEach(el => {
		// console.log(el);
		let nextSkill = skill.cloneNode(true);
		let skillLevel = nextSkill.children[0];
		let skillLevelValue = skillLevel.firstElementChild;
		let skillTitle = nextSkill.children[1];

		// Set new values of clone
		skillLevel.classList.replace("percent90", `percent${el.level}`);
		skillLevelValue.innerHTML = `${el.level}%`;
		skillTitle.innerHTML = `${el.title}`;

		// Add new element to dom
		// console.log(nextSkill);
		if (el.labels.includes("frontend")) {
			frontendSection.appendChild(nextSkill);
		} else if (el.labels.includes("backend")) {
			backendSection.appendChild(nextSkill);
		} else if (el.labels.includes("devopts")) {
			devoptsSection.appendChild(nextSkill);
		}
	});
	frontendSection.firstElementChild.remove();
	devoptsSection.firstElementChild.remove();
	backendSection.firstElementChild.remove();
};
