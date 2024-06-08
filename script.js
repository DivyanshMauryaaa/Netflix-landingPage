const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');
  const icon = item.querySelector('.icon');

  title.addEventListener('click', () => {
    if (content.style.display === 'block') {
      content.style.display = 'none';
      icon.classList.remove('rotate');
    } else {
      accordionItems.forEach((accordionItem) => {
        const accordionContent = accordionItem.querySelector('.accordion-content');
        const accordionIcon = accordionItem.querySelector('.icon');
        accordionContent.style.display = 'none';
        accordionIcon.classList.remove('rotate');
      });
      content.style.display = 'block';
      icon.classList.add('rotate');
    }
  });
});