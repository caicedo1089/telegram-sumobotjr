'use strict';

class Command {
    constructor(name = 'Base', bot, msg)
    {
        //Atributos
        this.name = name
        this.bot = bot
    }

    excecute(chatId)
    {
        this.bot.sendMessage(chatId, App.lang('Comando sin configurar'))
    }
}

module.exports = Command