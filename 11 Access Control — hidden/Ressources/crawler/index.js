const { chromium } = require('playwright');
const axios = require('axios');

if (!process.env.IP) process.exit();

const URL = `http://${process.env.IP}/.hidden/`;

const result = new Set();

const finder = async (page, URL) => {
	await page.goto(URL);
	const nodes = await page.$$('a');
	const allLinks = await Promise.all(nodes.map((node) => node.getAttribute('href')));

	for await (const href of allLinks) {
		if (href === 'README') {
			const response = await axios.get(`${URL}README`);
			result.add(`${response.data.trim()}`);
		} else if (!href.includes('../')) {
			await finder(page, `${URL}${href}`);
		}
	}
};

(async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await finder(page, URL);
	console.log(result);
	await browser.close();
})();
