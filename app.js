
document.getElementById('total-btn').addEventListener('click', function(){
    const incomeInput = document.getElementById('income');
    const incomeInputText = parseInt(incomeInput.value);

    const foodInput = document.getElementById('food');
    const foodInputText = parseInt(foodInput.value);
    const rentInput = document.getElementById('rent');
    const rentInputText = parseInt(rentInput.value);
    const clothInput = document.getElementById('cloth');
    const clothInputText = parseInt(clothInput.value);

    let totalExpenses = foodInputText + rentInputText + clothInputText;

    const totalExpensesText = document.getElementById('total-expenses');
    

    const balanceText = document.getElementById('balance');
    balanceText.innerText = incomeInputText - totalExpenses;
    
    if(totalExpenses < incomeInputText){
        totalExpensesText.innerText = totalExpenses;
    }
    else{
        totalExpensesText.innerText = totalExpenses;
        // incomeInput.value = 'Income is less then Expenses';
        // balanceText.innerText = 'Try income More TK'
    }
})

document.getElementById('save-btn').addEventListener('click', function(){
    const balanceText = document.getElementById('balance').innerText;
   

    const saveInput = document.getElementById('kotoPercent');
    const saveInputText = parseInt(saveInput.value);

    const savingAmountText = document.getElementById('save-amount');
    const savingAmount = balanceText * saveInputText / 100;
    savingAmountText.innerText = savingAmount;

    const remainingBalanceText = document.getElementById('remaining-balance');
    remainingBalanceText.innerText = balanceText - savingAmount;
})
 