const state = {
    monthlyPayment: 285,
    extraPayment: 70,
    thisMonthPaid: false,
    totalPaid: 0,
    time: {
        firstDate: new Date(),
        recentDate: new Date(),
    },
    dates: {},
};

state.dates[14] = { swag: 14 };
let newNum = 15;
state.dates[`${newNum}`] = { swag: 69 };
console.log(state.dates);

const body = document.querySelector('body');
const timerText = document.querySelector('#timer');
const dateText = document.querySelector('#date');
const monthCounter = document.querySelector('#monthCount');
const extraCounter = document.querySelector('#extraCount');
const gridContainer = document.querySelector('#grid-container');
const payButton = document.querySelector('#payButton');
const addButton = document.querySelector('#addButton');

function getMonthFromNumber(monthNum) {
    let monthString = '';
    if (monthNum === 0) {
        monthString = 'JAN';
    } else if (monthNum === 1) {
        monthString = 'FEB';
    } else if (monthNum === 2) {
        monthString = 'MAR';
    } else if (monthNum === 3) {
        monthString = 'APR';
    } else if (monthNum === 4) {
        monthString = 'MAY';
    } else if (monthNum === 5) {
        monthString = 'JUNE';
    } else if (monthNum === 6) {
        monthString = 'JULY';
    } else if (monthNum === 7) {
        monthString = 'AUG';
    } else if (monthNum === 8) {
        monthString = 'SEPT';
    } else if (monthNum === 9) {
        monthString = 'OCT';
    } else if (monthNum === 10) {
        monthString = 'NOV';
    } else if (monthNum === 11) {
        monthString = 'DEC';
    }
    return monthString;
}
function dollarSign(number) {
    return `$${number}`;
}

let month = new Date();
console.log(month.getMonth());
console.log(getMonthFromNumber(state.time.firstDate.getMonth()));
console.log(state.time.firstDate.getDate());

//JUNE

function updateThisMonth() {
    let monthNumber = state.time.recentDate.getDate();

    if (monthNumber === 0) {
        state.dates[0].monthAmount = state.monthlyPayment;
        state.dates[0].extraAmount = state.extraPayment;
        state.dates[0].paidAmount = state.totalPaid;
        state.dates[0].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 1) {
        state.dates[1].monthAmount = state.monthlyPayment;
        state.dates[1].extraAmount = state.extraPayment;
        state.dates[1].paidAmount = state.totalPaid;
        state.dates[1].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 2) {
        state.dates[2].monthAmount = state.monthlyPayment;
        state.dates[2].extraAmount = state.extraPayment;
        state.dates[2].paidAmount = state.totalPaid;
        state.dates[2].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 3) {
        state.dates[3].monthAmount = state.monthlyPayment;
        state.dates[3].extraAmount = state.extraPayment;
        state.dates[3].paidAmount = state.totalPaid;
        state.dates[3].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 4) {
        state.dates[4].monthAmount = state.monthlyPayment;
        state.dates[4].extraAmount = state.extraPayment;
        state.dates[4].paidAmount = state.totalPaid;
        state.dates[4].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 5) {
        state.dates[5].monthAmount = state.monthlyPayment;
        state.dates[5].extraAmount = state.extraPayment;
        state.dates[5].paidAmount = state.totalPaid;
        state.dates[5].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 6) {
        state.dates[6].monthAmount = state.monthlyPayment;
        state.dates[6].extraAmount = state.extraPayment;
        state.dates[6].paidAmount = state.totalPaid;
        state.dates[6].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 7) {
        state.dates[7].monthAmount = state.monthlyPayment;
        state.dates[7].extraAmount = state.extraPayment;
        state.dates[7].paidAmount = state.totalPaid;
        state.dates[7].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 8) {
        state.dates[8].monthAmount = state.monthlyPayment;
        state.dates[8].extraAmount = state.extraPayment;
        state.dates[8].paidAmount = state.totalPaid;
        state.dates[8].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 9) {
        state.dates[9].monthAmount = state.monthlyPayment;
        state.dates[9].extraAmount = state.extraPayment;
        state.dates[9].paidAmount = state.totalPaid;
        state.dates[9].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 10) {
        state.dates[10].monthAmount = state.monthlyPayment;
        state.dates[10].extraAmount = state.extraPayment;
        state.dates[10].paidAmount = state.totalPaid;
        state.dates[10].hasPaid = state.thisMonthPaid;
    }
    if (monthNumber === 11) {
        state.dates[11].monthAmount = state.monthlyPayment;
        state.dates[11].extraAmount = state.extraPayment;
        state.dates[11].paidAmount = state.totalPaid;
        state.dates[11].hasPaid = state.thisMonthPaid;
    }
}

function updateText() {
    monthCounter.innerHTML = dollarSign(state.monthlyPayment);
    extraCounter.innerHTML = dollarSign(state.extraPayment);
    timerText.innerHTML = state.time.recentDate.toLocaleTimeString();
    dateText.innerHTML = ` ${getMonthFromNumber(
        state.time.recentDate.getMonth()
    )} ${state.time.recentDate.getDate()}`;
}

function addClass(name, text) {
    name.classList.add(text);
}

function createLatestGraphRow() {
    let gridCont = document.createElement('div');
    gridCont.classList.add('grid-row');
    let checkBox = document.createElement('div');
    addClass(checkBox, 'grid');
    addClass(checkBox, 'checkMark');
    let dateBox = document.createElement('div');
    addClass(dateBox, 'grid');
    addClass(dateBox, 'date');
    let monthBox = document.createElement('div');
    addClass(monthBox, 'grid');
    addClass(monthBox, 'monthPay');
    let extraBox = document.createElement('div');
    addClass(extraBox, 'grid');
    addClass(extraBox, 'extra');
    let payBox = document.createElement('div');
    addClass(payBox, 'grid');
    addClass(payBox, 'paid');

    setInterval(function () {
        if (state.thisMonthPaid === false) {
            checkBox.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else if (state.thisMonthPaid === true) {
            checkBox.innerHTML = '<i class="fa-solid fa-check"></i>';
        }
        let num = state.time.recentDate.getMonth();
        dateBox.innerHTML = getMonthFromNumber(num);
        monthBox.innerHTML = dollarSign(state.monthlyPayment);
        extraBox.innerHTML = dollarSign(state.extraPayment);
        payBox.innerHTML = dollarSign(state.totalPaid);
    }, 100);

    gridCont.appendChild(checkBox);
    gridCont.appendChild(dateBox);
    gridCont.appendChild(monthBox);
    gridCont.appendChild(extraBox);
    gridCont.appendChild(payBox);
    return gridCont;
}

gridContainer.appendChild(createLatestGraphRow());

function endOfMonthSave() {
    // at end of month
    if (state.time.recentDate.getDate() === 28) {
        let monthNum = state.time.recentDate.getMonth();
        state.dates[`${monthNum}`] = {
            hasPaid: state.thisMonthPaid,
            paidAmount: state.totalPaid,
            monthAmount: state.monthlyPayment,
            extraAmount: state.extraPayment,
            monthString: getMonthFromNumber(monthNum),
        };
    }
}

let size = Object.keys(state.dates).length;
console.log(size);

function updateFunctions() {
    updateText();
    // updateThisMonth();
    state.time.recentDate = new Date();
}

function gameLoop() {
    updateFunctions();
}

(function start() {
    setInterval(gameLoop, 100);
})();

payButton.addEventListener('click', function () {});

addButton.addEventListener('click', function () {});
