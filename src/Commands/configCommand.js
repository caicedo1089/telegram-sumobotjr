'use strict';

const Command = require('./Command')

class ConfigCommand extends Command {
    
    constructor(name, bot)
    {
        super(name, bot)

        console.log('Comando ' +  this.name)
    }

    excecute(chatId, msg)
    {
        let $this = this
        
        if(msg.chat.username == 'caicedo1089_CO')
        {
            let arrData = msg.text.split(' ')
            console.log(arrData, arrData.length)
            if(arrData.length == 2)
            {
                if(arrData[1] == 'session')
                {
                    console.log('---- session ----')
                    console.log(JSON.stringify(App.session))
                }
                else
                {
                    App.maintenance = (arrData[1] == 'true')
                }
            }
        }
        
        $this.bot.sendMessage(chatId, 'Comando ejecutado')
    }
}

module.exports = ConfigCommand