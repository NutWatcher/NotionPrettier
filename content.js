var NotionCard_notionContent = document.querySelector('.notion-page-content');
console.log(NotionCard_notionContent);
if (NotionCard_notionContent) {
  NotionCard_notionContent.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  NotionCard_notionContent.style.boxShadow = '4px 4px 50px -20px #00000080';
  NotionCard_notionContent.style.paddingTop = '38px';
  NotionCard_notionContent.style.paddingLeft = '38px';
  NotionCard_notionContent.style.paddingRight = '38px';
  NotionCard_notionContent.style.paddingBottom = '38px';
  NotionCard_notionContent.style.borderRadius = '24px';

  var parentElement = NotionCard_notionContent.parentElement;
  if (parentElement) {
    parentElement.style.padding = '50px';
    parentElement.style.backgroundImage = 'linear-gradient(100deg, rgb(204, 251, 252), rgb(197, 234, 254), rgb(189, 211, 255))';
  } else {
    console.error("Parent element not found.");
  }
} else {
  alert("Notion Card:  Unable to locate content in the current page of Notion document, please try refreshing.");
}