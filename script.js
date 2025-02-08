document.addEventListener("DOMContentLoaded", () => {

  const expenseForm = document.getElementById("expense-form")
  const expenseNameInput = document.getElementById("expense-name")
  const expenseAmountInput = document.getElementById("expense-amount")

  const expenseList = document.getElementById("expense-list")
  const totalAmountDisplay = document.getElementById("total-amount")

  let expenses = []
  let totalAmount = calculateTotal()

  // how to add 
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      }
      expenses.push(newExpense);
      saveExpensesTolocal();


    }

  })



  function calculateTotal() {

  }

});
