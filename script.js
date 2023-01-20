let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney() {
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > myAccountBalance) {
      return alert("Insufficient Balance.");
   }

   var findUserBankAccount = enterName + "BankBalance";
   var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
   myAccountBalance -= enterAmount
   document.getElementById("myAccountBalance").innerText = myAccountBalance
   document.getElementById(findUserBankAccount).innerHTML = finalAmount;
   alert(`Successful Transaction! ₹${enterAmount} sent to ${enterName}@email.com.`)

   var element = document.getElementById("transaction-history-body");
   var createPTag = document.createElement("li");
   var textNode = document.createTextNode(`₹${enterAmount} sent to ${enterName}@email.com on ${Date()}.`);
   createPTag.appendChild(textNode);
   element.insertBefore(createPTag, element.firstChild);
}