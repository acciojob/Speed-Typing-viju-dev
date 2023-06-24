//your JS code here. If required.
let QuotesList={};
fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
  .then(response => response.json())
  .then(data => {
    QuotesList = data;
    data.forEach(item => {
      
    })
});