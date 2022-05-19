let login = prompt('Введите login', '');
let message = (login == 'Сотрудник') ? 'Привет!' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            'Иди на хуй8';
alert(message);