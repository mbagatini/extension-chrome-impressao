function $(id) { return document.getElementById(id); }

document.addEventListener('DOMContentLoaded', function () {
	$("printPage").addEventListener('click', async function() {
		let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files:  ["/print.js"],
		  });
	});
});