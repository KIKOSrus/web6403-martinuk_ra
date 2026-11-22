class Submission {
    constructor({ nick, email, text, agree }) {
        this.nick = nick;
        this.email = email;
        this.text = text;
        this.agree = Boolean(agree);
        this.createdAt = new Date();
    }

    print() {
        console.log('НОВЫЙ РОФЛ ОТПРАВЛЕН НА СЕРВЕР');
        console.log(`Ник:      ${this.nick}`);
        console.log(`Почта:    ${this.email}`);
        console.log(`Рофл:     ${this.text}`);
        console.log(`Согласие: ${this.agree ? 'да' : 'нет'}`);
        console.log(`Время:    ${this.createdAt.toLocaleString('ru-RU')}`);
    }
}
