// popup.js
document.getElementById('changeBackground').addEventListener('click', () => {
    console.log(111);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log(tabs);
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      });
    });
  });
  