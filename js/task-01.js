const listItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', listItemEl.length);

listItemEl.forEach(item => {
  item.querySelectorAll('h2').forEach(title => {
    console.log('Category:', title.textContent);
  });
  console.log('Elements:', item.querySelectorAll('li').length);
});
