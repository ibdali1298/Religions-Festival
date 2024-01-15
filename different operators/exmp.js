var loanAmount = 35500;
var interest = 8;
var intersetAmount, totalAmount;
intersetAmount = loanAmount * (interest / 100);
totalAmount = loanAmount + intersetAmount;
document.write("<b>total amount to br paid ($):</B>" + totalAmount + "<BR />");