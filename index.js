let clientName = 'Игорь';
let clientSpentForAllTime = 110;
let discount = Number(prompt('Сколько клиент потратил в вашем заведении за всё время?'));


if (discount < 300 && discount > 100) {
    alert('Клиенту предоставляется скидка 10%');
    discount = 10
} else if (discount < 500 && discount > 300) {
    alert('Клиенту предоставляется скидка 20%');
    discount = 20;
} else if (discount >= 500) {
    alert('Клиенту предоставляется скидка 30%');
    discount = 30;
}

let clientSpentToday = Number(prompt('Напишите сколько клиент потратил сегодня, посчитаем его чек, с учётом скидки.'));
clientSpentToday = clientSpentToday - (clientSpentToday / 100 * discount);
alert(`С учётом скидки сегодняшний счёт для ${clientName}: ${clientSpentToday}, распечатайте чек и принесите клиенту`)

clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;

alert(`Спасибо ${clientName}! К оплате ${clientSpentToday}. За всё время в нашем ресторане вы потратили ${clientSpentForAllTime}`)




