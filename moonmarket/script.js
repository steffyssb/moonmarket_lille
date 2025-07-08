document.addEventListener("DOMContentLoaded", function () {
  const statusElement = document.getElementById("shop-status");

  // Define opening hours (24h format)
  const openingHour = 8;
  const closingHour = 23;

  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= openingHour && currentHour < closingHour) {
    statusElement.textContent = "🟢 Nous sommes ouverts en ce moment.";
    statusElement.style.color = "green";
    statusElement.style.textAlign = "center";
    statusElement.style.fontWeight = "bold";
    statusElement.style.marginBottom = "20px";
  } else {
    statusElement.textContent = "🔴 Nous sommes fermés actuellement.";
    statusElement.style.color = "red";
    statusElement.style.textAlign = "center";
    statusElement.style.fontWeight = "bold";
    statusElement.style.marginBottom = "20px";
  }
});
