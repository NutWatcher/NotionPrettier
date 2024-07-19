var Notion_Card_Style = {
    style1: "linear-gradient(320deg, #dfe9f3 0%, white 100%)",
    style2: "linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%",
    style3: "linear-gradient(120deg, #a18cd1 0%, #fbc2eb 100%)",
    style4: "linear-gradient(100deg, rgb(204, 251, 252), rgb(197, 234, 254), rgb(189, 211, 255))",
    style5: "linear-gradient(105deg, rgb(245, 159, 156), rgb(69, 165, 215))",
    style6: "linear-gradient(200deg, #30cfd0 0%, #330867 100%)",
    style7: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
    style8: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    style9: "linear-gradient(120deg, #f43b47 0%, #453a94 100%)",
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    var style = message.style;
    var NotionCard_notionContent = document.querySelector(
        ".notion-page-content"
    );
    if (NotionCard_notionContent) {
        NotionCard_notionContent.style.backgroundColor =
            "rgba(255, 255, 255, 0.4)";
        NotionCard_notionContent.style.boxShadow =
            "4px 4px 50px -20px #00000080";
        NotionCard_notionContent.style.paddingTop = "38px";
        NotionCard_notionContent.style.paddingLeft = "38px";
        NotionCard_notionContent.style.paddingRight = "38px";
        NotionCard_notionContent.style.paddingBottom = "38px";
        NotionCard_notionContent.style.borderRadius = "24px";
        NotionCard_notionContent.style.boxShadow =
            "0 10px 40px hsla(0,0%,39%,.4)";

        var NotionCard_parentElement = NotionCard_notionContent.parentElement;
        if (NotionCard_parentElement) {
            NotionCard_parentElement.style.marginTop = "58px";
            NotionCard_parentElement.style.padding = "58px";
            NotionCard_parentElement.style.paddingBottom = "28px";
            NotionCard_parentElement.style.backgroundImage =
                "linear-gradient(100deg, rgb(204, 251, 252), rgb(197, 234, 254), rgb(189, 211, 255))";
        } else {
            console.error("Parent element not found.");
        }
        NotionCard_parentElement.style.backgroundImage =
            Notion_Card_Style[style];

        var NotionCard_style = document.createElement('style');
        NotionCard_style.setAttribute('type', 'text/css');
        // 添加伪元素的CSS规则
        var NotionCard_css = `
            .layout-content::after {
                    content: "Notion Card";
                    padding-left: 8px;
                    font-size: 24px;
                    color: rgba(255, 255, 255, 0.6);
                    display: block;
                    height: 30px;
            }
        `;
        if (NotionCard_style.styleSheet) {
            NotionCard_style.styleSheet.cssText = NotionCard_css;
        } else {
            NotionCard_style.appendChild(document.createTextNode(NotionCard_css));
        }
        
        // 将样式元素添加到head
        document.head.appendChild(NotionCard_style);
    } else {
        alert(
            "Notion Card:  Unable to locate content in the current page of Notion document, please try refreshing."
        );
    }
});
