// document.getElementById('btn-withdraw').addEventListener('click', function () {
//   const newWithdrawAmount = inputValue('withdraw-field');
//   const preWithdrawAmount = elementValue('withdraw-total');
//   const totalWithdraw = newWithdrawAmount + preWithdrawAmount;

//   setElementValue('withdraw-total', totalWithdraw);

//   const newBalanceAmount = elementValue('balance-total');
//   const totalWithdrawAmount = newBalanceAmount - newWithdrawAmount;
//   setElementValue('balance-total', totalWithdrawAmount);
// })


document.getElementById('btn-withdraw').addEventListener('click', function () {
  const newWithdrawAmount = inputValue('withdraw-field');
  const newWithdrawTotal = elementValue('withdraw-total');
  const totalWithdraw = newWithdrawAmount + newWithdrawTotal;

  setElementValue('withdraw-total', totalWithdraw);

  const newBalanceAmount = elementValue('balance-total');
  const BalanceTotal = newBalanceAmount - newWithdrawAmount;
  setElementValue('balance-total', BalanceTotal);
})