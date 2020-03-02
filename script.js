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
		color: '#00ffff',
		// This has to be the same size as the maximum width to
		// prevent clipping
		strokeWidth: 4,
		duration: 1400,
		text: {
			autoStyleContainer: false
		},
		from: { color: '#00ffff', width: 1 },
		to: { color: '#00ffff', width: 3 },
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

calculate_bar('html', 0.8);
calculate_bar('js', 0.75);
calculate_bar('c', 0.85);
calculate_bar('php', 0.75);
calculate_bar('java', 0.85);
calculate_bar('react', 0.7);

var age = document.getElementById('age');

age.innerHTML = calculate_age(new Date(2000, 5, 30));

function calculate_age(dob) {
	var diff_ms = Date.now() - dob.getTime();
	var age_dt = new Date(diff_ms);

	return Math.abs(age_dt.getUTCFullYear() - 1970);
}
