const countries = {
    "AED": { country: "United Arab Emirates", flag: "AE", symbol: "د.إ", rate: 3.67 },
    "AFN": { country: "Afghanistan", flag: "AF", symbol: "؋", rate: 71.25 },
    "ALL": { country: "Albania", flag: "AL", symbol: "L", rate: 92.80 },
    "AMD": { country: "Armenia", flag: "AM", symbol: "֏", rate: 387.50 },
    "ANG": { country: "Netherlands Antilles", flag: "AN", symbol: "ƒ", rate: 1.79 },
    "AOA": { country: "Angola", flag: "AO", symbol: "Kz", rate: 850.00 },
    "ARS": { country: "Argentina", flag: "AR", symbol: "$", rate: 950.00 },
    "AUD": { country: "Australia", flag: "AU", symbol: "A$", rate: 1.49 },
    "AWG": { country: "Aruba", flag: "AW", symbol: "ƒ", rate: 1.79 },
    "AZN": { country: "Azerbaijan", flag: "AZ", symbol: "₼", rate: 1.70 },
    "BAM": { country: "Bosnia and Herzegovina", flag: "BA", symbol: "KM", rate: 1.80 },
    "BBD": { country: "Barbados", flag: "BB", symbol: "Bds$", rate: 2.00 },
    "BDT": { country: "Bangladesh", flag: "BD", symbol: "৳", rate: 109.50 },
    "BGN": { country: "Bulgaria", flag: "BG", symbol: "лв", rate: 1.80 },
    "BHD": { country: "Bahrain", flag: "BH", symbol: ".د.ب", rate: 0.38 },
    "BIF": { country: "Burundi", flag: "BI", symbol: "FBu", rate: 2850.00 },
    "BMD": { country: "Bermuda", flag: "BM", symbol: "Bd$", rate: 1.00 },
    "BND": { country: "Brunei", flag: "BN", symbol: "B$", rate: 1.34 },
    "BOB": { country: "Bolivia", flag: "BO", symbol: "Bs.", rate: 6.90 },
    "BRL": { country: "Brazil", flag: "BR", symbol: "R$", rate: 5.62 },
    "BSD": { country: "Bahamas", flag: "BS", symbol: "B$", rate: 1.00 },
    "BTN": { country: "Bhutan", flag: "BT", symbol: "Nu.", rate: 83.50 },
    "BWP": { country: "Botswana", flag: "BW", symbol: "P", rate: 13.45 },
    "BYN": { country: "Belarus", flag: "BY", symbol: "Br", rate: 3.25 },
    "BZD": { country: "Belize", flag: "BZ", symbol: "BZ$", rate: 2.00 },
    "CAD": { country: "Canada", flag: "CA", symbol: "C$", rate: 1.36 },
    "CDF": { country: "DR Congo", flag: "CD", symbol: "FC", rate: 2800.00 },
    "CHF": { country: "Switzerland", flag: "CH", symbol: "CHF", rate: 0.87 },
    "CLP": { country: "Chile", flag: "CL", symbol: "$", rate: 940.00 },
    "CNY": { country: "China", flag: "CN", symbol: "¥", rate: 7.18 },
    "COP": { country: "Colombia", flag: "CO", symbol: "$", rate: 4100.00 },
    "CRC": { country: "Costa Rica", flag: "CR", symbol: "₡", rate: 510.00 },
    "CUC": { country: "Cuba", flag: "CU", symbol: "$", rate: 1.00 },
    "CUP": { country: "Cuba", flag: "CU", symbol: "₱", rate: 24.00 },
    "CVE": { country: "Cape Verde", flag: "CV", symbol: "Esc", rate: 101.00 },
    "CZK": { country: "Czech Republic", flag: "CZ", symbol: "Kč", rate: 23.00 },
    "DJF": { country: "Djibouti", flag: "DJ", symbol: "Fdj", rate: 177.50 },
    "DKK": { country: "Denmark", flag: "DK", symbol: "kr", rate: 6.85 },
    "DOP": { country: "Dominican Republic", flag: "DO", symbol: "RD$", rate: 59.00 },
    "DZD": { country: "Algeria", flag: "DZ", symbol: "د.ج", rate: 134.50 },
    "EGP": { country: "Egypt", flag: "EG", symbol: "£", rate: 48.50 },
    "ERN": { country: "Eritrea", flag: "ER", symbol: "Nfk", rate: 15.00 },
    "ETB": { country: "Ethiopia", flag: "ET", symbol: "Br", rate: 56.00 },
    "EUR": { country: "Eurozone", flag: "EU", symbol: "€", rate: 0.92 },
    "FJD": { country: "Fiji", flag: "FJ", symbol: "FJ$", rate: 2.24 },
    "FKP": { country: "Falkland Islands", flag: "FK", symbol: "£", rate: 0.79 },
    "GBP": { country: "United Kingdom", flag: "GB", symbol: "£", rate: 0.79 },
    "GEL": { country: "Georgia", flag: "GE", symbol: "₾", rate: 2.70 },
    "GGP": { country: "Guernsey", flag: "GG", symbol: "£", rate: 0.79 },
    "GHS": { country: "Ghana", flag: "GH", symbol: "GH₵", rate: 15.20 },
    "GIP": { country: "Gibraltar", flag: "GI", symbol: "£", rate: 0.79 },
    "GMD": { country: "Gambia", flag: "GM", symbol: "D", rate: 67.50 },
    "GNF": { country: "Guinea", flag: "GN", symbol: "FG", rate: 8600.00 },
    "GTQ": { country: "Guatemala", flag: "GT", symbol: "Q", rate: 7.75 },
    "GYD": { country: "Guyana", flag: "GY", symbol: "GY$", rate: 209.00 },
    "HKD": { country: "Hong Kong", flag: "HK", symbol: "HK$", rate: 7.80 },
    "HNL": { country: "Honduras", flag: "HN", symbol: "L", rate: 24.70 },
    "HRK": { country: "Croatia", flag: "HR", symbol: "kn", rate: 6.85 },
    "HTG": { country: "Haiti", flag: "HT", symbol: "G", rate: 131.00 },
    "HUF": { country: "Hungary", flag: "HU", symbol: "Ft", rate: 360.00 },
    "IDR": { country: "Indonesia", flag: "ID", symbol: "Rp", rate: 15800.00 },
    "ILS": { country: "Israel", flag: "IL", symbol: "₪", rate: 3.70 },
    "IMP": { country: "Isle of Man", flag: "IM", symbol: "£", rate: 0.79 },
    "INR": { country: "India", flag: "IN", symbol: "₹", rate: 83.90 },
    "IQD": { country: "Iraq", flag: "IQ", symbol: "ع.د", rate: 1310.00 },
    "IRR": { country: "Iran", flag: "IR", symbol: "﷼", rate: 42000.00 },
    "ISK": { country: "Iceland", flag: "IS", symbol: "kr", rate: 137.00 },
    "JEP": { country: "Jersey", flag: "JE", symbol: "£", rate: 0.79 },
    "JMD": { country: "Jamaica", flag: "JM", symbol: "J$", rate: 156.00 },
    "JOD": { country: "Jordan", flag: "JO", symbol: "JD", rate: 0.71 },
    "JPY": { country: "Japan", flag: "JP", symbol: "¥", rate: 149.50 },
    "KES": { country: "Kenya", flag: "KE", symbol: "KSh", rate: 129.00 },
    "KGS": { country: "Kyrgyzstan", flag: "KG", symbol: "с", rate: 89.00 },
    "KHR": { country: "Cambodia", flag: "KH", symbol: "៛", rate: 4100.00 },
    "KMF": { country: "Comoros", flag: "KM", symbol: "CF", rate: 460.00 },
    "KPW": { country: "North Korea", flag: "KP", symbol: "₩", rate: 900.00 },
    "KRW": { country: "South Korea", flag: "KR", symbol: "₩", rate: 1380.00 },
    "KWD": { country: "Kuwait", flag: "KW", symbol: "KD", rate: 0.31 },
    "KYD": { country: "Cayman Islands", flag: "KY", symbol: "CI$", rate: 0.83 },
    "KZT": { country: "Kazakhstan", flag: "KZ", symbol: "₸", rate: 480.00 },
    "LAK": { country: "Laos", flag: "LA", symbol: "₭", rate: 22000.00 },
    "LBP": { country: "Lebanon", flag: "LB", symbol: "£", rate: 15000.00 },
    "LKR": { country: "Sri Lanka", flag: "LK", symbol: "₨", rate: 300.00 },
    "LRD": { country: "Liberia", flag: "LR", symbol: "L$", rate: 193.00 },
    "LSL": { country: "Lesotho", flag: "LS", symbol: "M", rate: 18.50 },
    "LYD": { country: "Libya", flag: "LY", symbol: "LD", rate: 4.80 },
    "MAD": { country: "Morocco", flag: "MA", symbol: "MAD", rate: 10.00 },
    "MDL": { country: "Moldova", flag: "MD", symbol: "lei", rate: 17.70 },
    "MGA": { country: "Madagascar", flag: "MG", symbol: "Ar", rate: 4500.00 },
    "MKD": { country: "North Macedonia", flag: "MK", symbol: "ден", rate: 56.00 },
    "MMK": { country: "Myanmar", flag: "MM", symbol: "Ks", rate: 2100.00 },
    "MNT": { country: "Mongolia", flag: "MN", symbol: "₮", rate: 3450.00 },
    "MOP": { country: "Macau", flag: "MO", symbol: "MOP$", rate: 8.05 },
    "MRU": { country: "Mauritania", flag: "MR", symbol: "UM", rate: 39.50 },
    "MUR": { country: "Mauritius", flag: "MU", symbol: "₨", rate: 46.50 },
    "MVR": { country: "Maldives", flag: "MV", symbol: "Rf", rate: 15.40 },
    "MWK": { country: "Malawi", flag: "MW", symbol: "MK", rate: 1730.00 },
    "MXN": { country: "Mexico", flag: "MX", symbol: "$", rate: 19.85 },
    "MYR": { country: "Malaysia", flag: "MY", symbol: "RM", rate: 4.42 },
    "MZN": { country: "Mozambique", flag: "MZ", symbol: "MT", rate: 63.50 },
    "NAD": { country: "Namibia", flag: "NA", symbol: "N$", rate: 18.50 },
    "NGN": { country: "Nigeria", flag: "NG", symbol: "₦", rate: 1630.00 },
    "NIO": { country: "Nicaragua", flag: "NI", symbol: "C$", rate: 36.50 },
    "NOK": { country: "Norway", flag: "NO", symbol: "kr", rate: 10.80 },
    "NPR": { country: "Nepal", flag: "NP", symbol: "₨", rate: 133.50 },
    "NZD": { country: "New Zealand", flag: "NZ", symbol: "NZ$", rate: 1.63 },
    "OMR": { country: "Oman", flag: "OM", symbol: "﷼", rate: 0.385 },
    "PAB": { country: "Panama", flag: "PA", symbol: "B/.", rate: 1.00 },
    "PEN": { country: "Peru", flag: "PE", symbol: "S/", rate: 3.75 },
    "PGK": { country: "Papua New Guinea", flag: "PG", symbol: "K", rate: 3.90 },
    "PHP": { country: "Philippines", flag: "PH", symbol: "₱", rate: 58.90 },
    "PKR": { country: "Pakistan", flag: "PK", symbol: "₨", rate: 278.00 },
    "PLN": { country: "Poland", flag: "PL", symbol: "zł", rate: 3.95 },
    "PYG": { country: "Paraguay", flag: "PY", symbol: "Gs", rate: 7500.00 },
    "QAR": { country: "Qatar", flag: "QA", symbol: "﷼", rate: 3.64 },
    "RON": { country: "Romania", flag: "RO", symbol: "lei", rate: 4.55 },
    "RSD": { country: "Serbia", flag: "RS", symbol: "Дин.", rate: 107.00 },
    "RUB": { country: "Russia", flag: "RU", symbol: "₽", rate: 98.50 },
    "RWF": { country: "Rwanda", flag: "RW", symbol: "FRw", rate: 1320.00 },
    "SAR": { country: "Saudi Arabia", flag: "SA", symbol: "ر.س", rate: 3.75 },
    "SBD": { country: "Solomon Islands", flag: "SB", symbol: "SI$", rate: 8.40 },
    "SCR": { country: "Seychelles", flag: "SC", symbol: "₨", rate: 13.60 },
    "SDG": { country: "Sudan", flag: "SD", symbol: "ج.س.", rate: 620.00 },
    "SEK": { country: "Sweden", flag: "SE", symbol: "kr", rate: 10.45 },
    "SGD": { country: "Singapore", flag: "SG", symbol: "S$", rate: 1.34 },
    "SHP": { country: "Saint Helena", flag: "SH", symbol: "£", rate: 0.79 },
    "SLE": { country: "Sierra Leone", flag: "SL", symbol: "Le", rate: 22800.00 },
    "SOS": { country: "Somalia", flag: "SO", symbol: "S", rate: 570.00 },
    "SRD": { country: "Suriname", flag: "SR", symbol: "$", rate: 36.50 },
    "SSP": { country: "South Sudan", flag: "SS", symbol: "£", rate: 1300.00 },
    "STN": { country: "Sao Tome and Principe", flag: "ST", symbol: "Db", rate: 22.50 },
    "SVC": { country: "El Salvador", flag: "SV", symbol: "$", rate: 8.75 },
    "SYP": { country: "Syria", flag: "SY", symbol: "£", rate: 13000.00 },
    "SZL": { country: "Eswatini", flag: "SZ", symbol: "E", rate: 18.50 },
    "THB": { country: "Thailand", flag: "TH", symbol: "฿", rate: 34.50 },
    "TJS": { country: "Tajikistan", flag: "TJ", symbol: "SM", rate: 10.70 },
    "TMT": { country: "Turkmenistan", flag: "TM", symbol: "T", rate: 3.50 },
    "TND": { country: "Tunisia", flag: "TN", symbol: "د.ت", rate: 3.10 },
    "TOP": { country: "Tonga", flag: "TO", symbol: "T$", rate: 2.35 },
    "TRY": { country: "Turkey", flag: "TR", symbol: "₺", rate: 34.80 },
    "TTD": { country: "Trinidad and Tobago", flag: "TT", symbol: "TT$", rate: 6.75 },
    "TWD": { country: "Taiwan", flag: "TW", symbol: "NT$", rate: 32.00 },
    "TZS": { country: "Tanzania", flag: "TZ", symbol: "TSh", rate: 2700.00 },
    "UAH": { country: "Ukraine", flag: "UA", symbol: "₴", rate: 41.00 },
    "UGX": { country: "Uganda", flag: "UG", symbol: "USh", rate: 3700.00 },
    "USD": { country: "United States", flag: "US", symbol: "$", rate: 1.00 },
    "UYU": { country: "Uruguay", flag: "UY", symbol: "$", rate: 40.00 },
    "UZS": { country: "Uzbekistan", flag: "UZ", symbol: "сўм", rate: 12600.00 },
    "VES": { country: "Venezuela", flag: "VE", symbol: "Bs.S", rate: 36.00 },
    "VND": { country: "Vietnam", flag: "VN", symbol: "₫", rate: 25200.00 },
    "VUV": { country: "Vanuatu", flag: "VU", symbol: "VT", rate: 119.00 },
    "WST": { country: "Samoa", flag: "WS", symbol: "WS$", rate: 2.70 },
    "XAF": { country: "Central African CFA", flag: "CF", symbol: "FCFA", rate: 600.00 },
    "XCD": { country: "East Caribbean", flag: "AG", symbol: "$", rate: 2.70 },
    "XDR": { country: "IMF Special Drawing Rights", flag: "IMF", symbol: "SDR", rate: 1.32 },
    "XOF": { country: "West African CFA", flag: "SN", symbol: "CFA", rate: 600.00 },
    "XPF": { country: "CFP Franc", flag: "PF", symbol: "Fr", rate: 111.00 },
    "YER": { country: "Yemen", flag: "YE", symbol: "﷼", rate: 250.00 },
    "ZAR": { country: "South Africa", flag: "ZA", symbol: "R", rate: 18.20 },
    "ZMW": { country: "Zambia", flag: "ZM", symbol: "ZK", rate: 26.00 },
    "ZWL": { country: "Zimbabwe", flag: "ZW", symbol: "$", rate: 322.00 }
};

// DOM Elements
const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const convertedAmount = document.getElementById('convertedAmount');
const targetCurrency = document.getElementById('targetCurrency');
const rateInfo = document.getElementById('rateInfo');
const swapBtn = document.getElementById('swap');
const fromCard = document.getElementById('fromCard');
const toCard = document.getElementById('toCard');

// Flag Emoji Function
function getFlagEmoji(countryCode) {
    if (countryCode === 'EU') return '🇪🇺';
    if (countryCode.length !== 2) return '';
    return countryCode.toUpperCase().split('').map(char => String.fromCodePoint(127397 + char.charCodeAt(0))).join('');
}

// Populate Dropdowns
function populateDropdowns() {
    const sortedKeys = Object.keys(countries).sort((a, b) => countries[a].country.localeCompare(countries[b].country));
    sortedKeys.forEach(code => {
        const c = countries[code];
        const flag = getFlagEmoji(c.flag);
        const optionText = `${flag} ${c.country} • ${c.symbol} ${code}`;
        const option1 = new Option(optionText, code);
        const option2 = new Option(optionText, code);
        fromSelect.add(option1);
        toSelect.add(option2);
    });
}

// Fetch Live Rates
async function fetchRates() {
    rateInfo.textContent = 'Loading live rates...';
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
        const data = await response.json();
        Object.keys(countries).forEach(code => {
            const lower = code.toLowerCase();
            if (data.usd[lower]) {
                countries[code].rate = data.usd[lower];
            }
        });
        rateInfo.textContent = 'Live rates loaded!';
    } catch (e) {
        console.error('Failed to fetch rates', e);
        rateInfo.textContent = 'Using fallback rates (API error)';
    }
}

// Update Cards
function updateCards() {
    updateCard('from', fromSelect.value, fromCard);
    updateCard('to', toSelect.value, toCard);
}

function updateCard(type, code, cardElement) {
    if (code) {
        const c = countries[code];
        const flag = getFlagEmoji(c.flag);
        cardElement.innerHTML = `<span class="flag">${flag}</span><span class="name">${c.country} - ${code} (${c.symbol})</span>`;
        cardElement.classList.add('show');
    } else {
        cardElement.classList.remove('show');
    }
}

// Conversion Function
function convert() {
    const amount = parseFloat(amountInput.value) || 0;
    const from = fromSelect.value;
    const to = toSelect.value;

    if (!from || !to) return;

    const fromRate = countries[from].rate || 1;
    const toRate = countries[to].rate || 1;

    const result = (amount / fromRate) * toRate;

    convertedAmount.textContent = result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    targetCurrency.textContent = `${countries[to].symbol} ${to}`;

    const rate = (toRate / fromRate).toFixed(4);
    rateInfo.textContent = `1 ${from} = ${rate} ${to} (live rate)`;
}

// Event Listeners
window.addEventListener('load', async () => {
    await fetchRates();
    populateDropdowns();
    fromSelect.value = "USD";
    toSelect.value = "EUR";
    updateCards();
    convert();
});

amountInput.addEventListener('input', convert);
fromSelect.addEventListener('change', () => { updateCards(); convert(); });
toSelect.addEventListener('change', () => { updateCards(); convert(); });

swapBtn.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    updateCards();
    convert();
});