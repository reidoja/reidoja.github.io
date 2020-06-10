import Typed from 'typed.js';
import ProgressBar from 'progressbar.js';

var options = {
	strings: [ 'I am Reinardus Ronaldo Raharja' ],
	loop: true,
	showCursor: false,
	typeSpeed: 100,
	backSpeed: 70
};

var typed = new Typed('.typing', options);

function calculate_bar(text, percentage) {
	var className = '.circle-' + text;
	var bar = new ProgressBar.Circle(className, {
		color: '#12f2dd',
		// This has to be the same size as the maximum width to
		// prevent clipping
		strokeWidth: 4,
		duration: 1400,
		text: {
			autoStyleContainer: false
		},
		from: { color: '#12f2dd', width: 1 },
		to: { color: '#12f2dd', width: 3 },
		// Set default step function for all animate calls
		step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 100);
			if (value === 0) {
				circle.setText('');
			} else {
				circle.setText(value + '%');
			}
		}
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2rem';

	bar.animate(percentage);
}

const observer = new IntersectionObserver(function(entries) {
	entries.forEach((element) => {
		if (element.isIntersecting) {
			const { child, percentage } = element.target.dataset;
			calculate_bar(child, +percentage);
			observer.unobserve(element.target);
		}
	});
});

Array.from(document.getElementsByClassName('circle')).forEach((el) => {
	observer.observe(el);
});

// calculate_bar('html', 0.8);
// calculate_bar('js', 0.75);
// calculate_bar('c', 0.85);
// calculate_bar('php', 0.75);
// calculate_bar('java', 0.85);
// calculate_bar('react', 0.7);

var age = document.getElementById('age');

age.innerHTML = calculate_age(new Date(2000, 5, 30));

// function calculate_age(dob) {
// 	var diff_ms = Date.now() - dob.getTime();
// 	var age_dt = new Date(diff_ms);

// 	return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

function calculate_age(dateString) {
	var today = new Date();
	var birthDate = new Date(dateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

function showExperience() {
	var experiences = [
		{ name: 'Student Council (OSIS)', year: 'February 2017' },
		{
			name: 'Activist at Bina Nusantara Computer Club (BNCC)',
			year: 'October 2019'
		},
		{
			name: 'Full Time Laboratory Assistant at Binus Alam Sutera',
			year: 'Februari 2019'
		},
		{
			name: 'Scholarship Mentor at Binus Alam Sutera',
			year: 'October 2019'
		}
	];
	var experience = '';
	experiences.forEach((exp) => {
		experience += `
		<div class="experience">
			<div class="experience-name">
				<h2>${exp.name}</h2>
			</div>
			<div class="experience-year">
				<h3>${exp.year}</h3>
			</div>
		</div>
		`;
	});

	document.querySelector('.experience-detail').innerHTML = experience;
}

showExperience();
