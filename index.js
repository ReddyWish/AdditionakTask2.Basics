let clientName = prompt('Введите имя клиента');
let clientSpentForAllTime = Number(prompt(`Сколько ${clientName} потратил в вашем заведении за всё время?`).trim());
if (isNaN(clientSpentForAllTime)) {
    alert('Сумма, которую клиент потратил за все время, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.');
} else {
    let discount
    if (clientSpentForAllTime < 300 && clientSpentForAllTime > 100) {
        alert('Клиенту предоставляется скидка 10%');
        discount = 10
    } else if (clientSpentForAllTime < 500 && clientSpentForAllTime > 300) {
        alert('Клиенту предоставляется скидка 20%');
        discount = 20;
    } else if (clientSpentForAllTime >= 500) {
        alert('Клиенту предоставляется скидка 30%');
        discount = 30;
    }

    let clientSpentToday = Number(prompt('Напишите сколько клиент потратил сегодня, посчитаем его чек, с учётом скидки.').trim());
    if (isNaN(clientSpentToday)) {
        alert('Сумма, которую клиент потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.')
    } else {
        clientSpentToday -= (clientSpentToday / 100 * discount);
        alert(`С учётом скидки сегодняшний счёт для ${clientName}: ${clientSpentToday}, распечатайте чек и принесите клиенту`)

        clientSpentForAllTime += clientSpentToday;

        alert(`Спасибо ${clientName}! К оплате ${clientSpentToday}. За всё время в нашем ресторане вы потратили ${clientSpentForAllTime}`)
    }
}











