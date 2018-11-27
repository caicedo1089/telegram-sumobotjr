'use strict';

class Command {
    constructor(name = 'Base', bot, sumoBot, app)
    {
        //Atributos
        this.name = name
        this.bot = bot
        this.sumoBot = sumoBot
        this.App = app
    }

    excecute(chatId)
    {
        this.bot.sendMessage(chatId, this.App.lang('Comando sin configurar'))
    }
}

module.exports = Command