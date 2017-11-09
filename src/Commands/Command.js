'use strict';

class Command {
    constructor(name = 'Base', bot, msg)
    {
        //Atributos
        this.name = name
        this.bot = bot

        //Se crea el comando para que lo ejecute
        //this.createCommand(name)
    }

    /*createCommand(name)
    {
        let bot = this.bot
        bot.onText(
            /\/echo (.+)/, 
            (msg, match) => {
                // 'msg' is the received Message from Telegram
                // 'match' is the result of executing the regexp above on the text content
                // of the message
            
                const chatId = msg.chat.id;
                const resp = match[1]; // the captured "whatever"
            
                // send back the matched "whatever" to the chat
                bot.sendMessage(chatId, 'Comando sin configurar');
          
          });
    }*/

    excecute(chatId)
    {
        this.bot.sendMessage(chatId, App.lang('Comando sin configurar'))
    }
}

module.exports = Command