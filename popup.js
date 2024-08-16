document.getElementById("notionCardLink").onclick = function () {
    chrome.tabs.create({ url: "https://notioncard.com" });
};

document.getElementById("notionCardLink").textContent =
    chrome.i18n.getMessage("notionCardTitle");
document.querySelector(".refreshMessage").textContent =
    chrome.i18n.getMessage("refreshMessage");
document.querySelector(".usageMessage").textContent =
    chrome.i18n.getMessage("usageMessage");

document
    .getElementById("style1")
    .addEventListener("click", () => applyStyle("style1"));
document
    .getElementById("style2")
    .addEventListener("click", () => applyStyle("style2"));
document
    .getElementById("style3")
    .addEventListener("click", () => applyStyle("style3"));
document
    .getElementById("style4")
    .addEventListener("click", () => applyStyle("style4"));
document
    .getElementById("style5")
    .addEventListener("click", () => applyStyle("style5"));
document
    .getElementById("style6")
    .addEventListener("click", () => applyStyle("style6"));
document
    .getElementById("style7")
    .addEventListener("click", () => applyStyle("style7"));
document
    .getElementById("style8")
    .addEventListener("click", () => applyStyle("style8"));
document
    .getElementById("style9")
    .addEventListener("click", () => applyStyle("style9"));
function applyStyle(style) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                files: ["content.js"],
            },
            () => {
                chrome.tabs.sendMessage(tabs[0].id, { style: style });
            }
        );
    });
}
