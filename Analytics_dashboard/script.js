const categoryData = {
  labels: ['Dining', 'Groceries', 'Entertainment', 'Utilities', 'Others'],
  datasets: [{
    data: [1300, 1150, 500, 750, 300],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
  }]
};

window.addEventListener('load', () => {
  const ctxCategory = document.getElementById('categoryChart').getContext('2d');
  new Chart(ctxCategory, {
    type: 'pie',
    data: categoryData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
});

function setBudgets() {
  const diningBudget = document.getElementById('diningBudget').value;
  const groceriesBudget = document.getElementById('groceriesBudget').value;
  const entertainmentBudget = document.getElementById('entertainmentBudget').value;
  const utilitiesBudget = document.getElementById('utilitiesBudget').value;
  const othersBudget = document.getElementById('othersBudget').value;


  console.log("Budgets set:");
  console.log("Dining:", diningBudget);
  console.log("Groceries:", groceriesBudget);
  console.log("Entertainment:", entertainmentBudget);
  console.log("Utilities:", utilitiesBudget);
  console.log("Others:", othersBudget);


}
