const notionContent = document.querySelector('.notion-page-content');
if (notionContent) {
  notionContent.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  notionContent.style.boxShadow = '4px 4px 50px -20px #00000080';
  notionContent.style.paddingTop = '38px';
  notionContent.style.paddingLeft = '38px';
  notionContent.style.paddingRight = '38px';
  notionContent.style.paddingBottom = '38px';
  notionContent.style.borderRadius = '24px';

  const parentElement = notionContent.parentElement;
  if (parentElement) {
    parentElement.style.padding = '50px';
    parentElement.style.backgroundImage = 'linear-gradient(100deg, rgb(204, 251, 252), rgb(197, 234, 254), rgb(189, 211, 255))';
  } else {
    console.error("Parent element not found.");
  }
} else {
  console.error("Notion page content not found.");
}