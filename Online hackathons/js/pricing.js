const pricing = {
    INR: {
        Starter: 999,
        Professional: 2499,
        Enterprise: 4999
    },
    USD: {
        Starter: 12,
        Professional: 30,
        Enterprise: 60
    },
    EUR: {
        Starter: 11,
        Professional: 28,
        Enterprise: 55
    }
};

const currencySelect = document.getElementById("currency");
const billing = document.getElementById("billing");
const billingLabel = document.getElementById("billingLabel");

function updatePricing(){

    const currency = currencySelect.value;
    const yearly = billing.checked;

    billingLabel.textContent = yearly ? "Annual (20% Off)" : "Monthly";

    const symbol = {
        INR:"₹",
        USD:"$",
        EUR:"€"
    };

    const discount = yearly ? 12 * 0.8 : 1;

    document.getElementById("starterPrice").textContent =
        symbol[currency] + Math.round(pricing[currency].Starter * discount);

    document.getElementById("proPrice").textContent =
        symbol[currency] + Math.round(pricing[currency].Professional * discount);

    document.getElementById("enterprisePrice").textContent =
        symbol[currency] + Math.round(pricing[currency].Enterprise * discount);
}

currencySelect.addEventListener("change", updatePricing);
billing.addEventListener("change", updatePricing);

updatePricing();