// JavaScript Modular Menu for my website
// nav_menu.js

async function loadMenu() {
	try {
		const response = await fetch('nav_menu.html'); // fetches nav_menu.html and assigns it to variable response.
		if (!response.ok) { // tests whether the html page fetch is successful and display a message if error.
			throw new Error('Network Response Error')
		}
		const menuHtml = await response.text(); // assigns the text of nav_menu.html to the variable menuHtml
		document.getElementById('nav_menu').innerHTML = menuHtml;

	} catch (error) {
		console.error('Error loading menu:', error); // displays the error message on the console if the menu fails to load
	}

	export {loadMenu}; // exports the function to be used in other files.
}