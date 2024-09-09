let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        let opt = ["+", "-", "*", "/", "%"];
        let isKeyOpt = false;

        switch (e.target.innerHTML) {
            case 'AC':
                display.value = "";
                break;
            case 'DEL':
                display.value = display.value.substring(0, display.value.length - 1)
                break;
            case '=':
                display.value = eval(display.value);
                break;
            default:
                if (opt.includes(e.target.innerHTML)) {
                    isKeyOpt = true;
                }
                if (display.value.length == 0 && isKeyOpt) {
                    return;
                }
                if (opt.includes(display.value.at(-1)) && isKeyOpt) {
                    display.value = display.value.substring(0, display.value.length - 1)
                }
                display.value += e.target.innerHTML;
                break;
        }


    })
})