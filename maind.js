// Elementleri seçelim
const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

// Currency sınıfını başlatalım
const currency = new Currency();

// Olay dinleyicileri
amountInput.addEventListener("input", exchange);
firstOption.addEventListener("change", exchange);
secondOption.addEventListener("change", exchange);

// Döviz çevirme fonksiyonu
async function exchange() {
    const amount = Number(amountInput.value.trim());
    const first = firstOption.value;
    const second = secondOption.value;

    if (!amount) {
        resultInput.value = "";
        return;
    }

    try {
        const result = await currency.exchange(amount, first, second);
        resultInput.value = result.toFixed(3);
    } catch (err) {
        console.error("API hatası:", err);
        resultInput.value = "Hata!";
    }
}
