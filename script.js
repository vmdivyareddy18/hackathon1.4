function runFinPayAI() {

    let salary = Number(document.getElementById("salary").value);
    let fixed = Number(document.getElementById("fixed").value);
    let variable = Number(document.getElementById("variable").value);

    let todayGold = Number(document.getElementById("todayGold").value);
    let lastGold = Number(document.getElementById("lastGold").value);

    if (salary <= 0) {
        alert("Enter valid salary");
        return;
    }

    let remaining = salary - (fixed + variable);

    if (remaining < 0) {
        alert("Expenses exceed salary!");
        return;
    }

    let save = Math.round(remaining * 0.4);
    let invest = Math.round(remaining * 0.3);
    let spend = Math.round(remaining * 0.2);
    let emergency = Math.round(remaining * 0.1);

    let investAdvice;

    if (invest < 3000)
        investAdvice = "Low investment amount. Prefer RD and savings.";
    else if (invest < 7000)
        investAdvice = "Good for SIP and index funds.";
    else
        investAdvice = "Balanced portfolio with stocks and mutual funds.";

    let goldAdvice;

    if (todayGold && lastGold) {
        goldAdvice = todayGold < lastGold
            ? "Gold price is low. Buying recommended."
            : "Gold price is high. Better to wait.";
    }
    else {
        goldAdvice = "Enter gold prices for analysis.";
    }

    let output = `
    <h4>💼 Financial Overview</h4>

    <p><b>Remaining Balance:</b> ₹${remaining}</p>

    <hr>

    <p>💰 <b>Save:</b> ₹${save}</p>
    <p>📈 <b>Invest:</b> ₹${invest}</p>
    <p>🛒 <b>Spend:</b> ₹${spend}</p>
    <p>🚨 <b>Emergency:</b> ₹${emergency}</p>

    <hr>

    <p><b>🤖 Investment Strategy</b><br>${investAdvice}</p>

    <p><b>🟡 Gold Recommendation</b><br>${goldAdvice}</p>
  `;

    document.getElementById("result").innerHTML = output;
}
