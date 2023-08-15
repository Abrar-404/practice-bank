document.getElementById('btn-deposit').addEventListener('click', function () {
  const newDepositAmount = inputValue('deposit-amount');
  const preDepositTotal = elementValue('deposit-total');
  const totalDeposit = newDepositAmount + preDepositTotal;

  setElementValue('deposit-total', totalDeposit);

  const newBalanceAmount = elementValue('balance-total');
  const newBalanceTotal = newBalanceAmount + newDepositAmount;

  setElementValue('balance-total', newBalanceTotal);
})