'use strict';

class Command {
    constructor(name = 'Base', bot, sumobot, app)
    {
        //Atributos
        this.name = name
        this.bot = bot
        this.sumobot = sumobot
        this.App = app
    }

    excecute(chatId)
    {
        this.bot.sendMessage(chatId, this.App.lang('Comando sin configurar'))
    }
}

module.exports = Command