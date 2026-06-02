let display = document.getElementById('display');

function append(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // محاسبه واقعی
        let realResult = eval(display.value);
        
        // جادوی سیاه (دروغ گفتن)
        // همیشه یه عدد تصادفی بین ۱ تا ۵ رو با نتیجه جمع یا تفریق می‌کنه
        let lie = Math.floor(Math.random() * 5) + 1;
        let finalResult = (Math.random() > 0.5) ? (realResult + lie) : (realResult - lie);
        
        // اگر جواب شد صفر، یه دونه بهش اضافه کن که باز هم غلط باشه
        if (finalResult === 0) finalResult = 1;

        display.value = finalResult;
    } catch (e) {
        display.value = "خطا!";
    }
}