const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click', () => {
	const aboutBox = new WinBox({
		title: 'About me',
		mount: aboutContent,
		top: 50,
		bottom: 50,
		right: 50,
		left: 50,
		width: '400px',
		height: '400px',
		onfocus: function () {
			this.setBackground('#00aa00');
		},
		onblur: function () {
			this.setBackground('#aabb00');
		},
	});
});

contact.addEventListener('click', () => {
	const contactBox = new WinBox({
		title: 'Contact Me',
		mount: contactContent,
		top: 50,
		bottom: 150,
		right: 50,
		left: 150,
		width: '400px',
		height: '400px',
		onfocus: function () {
			this.setBackground('#00aa00');
		},
		onblur: function () {
			this.setBackground('#aabb00');
		},
	});
});
