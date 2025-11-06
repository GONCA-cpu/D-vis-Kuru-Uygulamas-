class Currency {
    constructor() {
        this.apiKey = "DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0";
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${this.apiKey}&currencies=${secondCurrency}&base_currency=${firstCurrency}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data || !data.data || !data.data[secondCurrency]) {
            throw new Error("API yanıtı geçersiz");
        }

        const rate = data.data[secondCurrency];
        return amount * rate;
    }
}
