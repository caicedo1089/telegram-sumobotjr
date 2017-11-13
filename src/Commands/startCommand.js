    'use strict';

const Command = require('./Command')

class StartCommand extends Command {
    
    constructor(name, bot, sumoBot)
    {
        super(name, bot)

        this.sumoBot = sumoBot
        this.global = {}
    }

    excecute(chatId, msg)
    {
        let $this = this
        let misArguments = [chatId]

        //En caso que se inicie el chat
        if(!App.session[chatId])
        {
            let username = msg.chat.username || `${msg.chat.first_name}_${msg.chat.last_name}`

            App.session[chatId] = {
                command: this.name,
                funtionExcecute: 'displayMenu',
            }

            misArguments.push(`${App.lang('Hola')} <b>${username}</b>\n\n`)
        }
        
        //Se ejecuta la función de acuerdo al último estado, se llama una función ver http://pcaicedo.com/web/diferentes-formas-de-ejecutar-una-funcion-en-javascript/
        misArguments = this[App.session[chatId].funtionExcecute].apply(this, [msg].concat(misArguments))

        //Se arma la respuesta
        misArguments = [chatId].concat(misArguments)
        
        //Se envía el mensaje
        $this.bot.sendMessage.apply($this.bot, misArguments)
    }

    displayMenu(msg, chatId, strResult, objResultParseMode)
    {
        strResult = strResult || ''
        objResultParseMode = objResultParseMode || {}
        
        strResult += App.lang('Por favor seleccione una opción:')

        objResultParseMode['parse_mode'] = 'HTML'
        objResultParseMode['reply_markup'] = {
            "keyboard": [
                ["Encender"],   
            ]
        }

        //Delego la nueva función
        App.session[chatId].funtionExcecute = 'excecuteMenu'

        return [strResult, objResultParseMode]
    }

    excecuteMenu(msg, chatId, strResult, objResultParseMode)
    {
        strResult = strResult || ''
        objResultParseMode = objResultParseMode || {}
        
        objResultParseMode['parse_mode'] = 'HTML'
        objResultParseMode['reply_markup'] = {
            "keyboard": [
                ['Adelante'],
                ['Parar'],
                ['Atrás'],
            ]
        }

        if(msg.text != 'Encender')
        {
            strResult += `Comando ejecutado -> ${msg.text}`

            switch (msg.text) 
            {
                case 'Adelante':
                    this.sumoBot.leftWheel.ccw();
                    this.sumoBot.rightWheel.cw();
                    break;
                case 'Atrás':
                    this.sumoBot.leftWheel.cw();
                    this.sumoBot.rightWheel.ccw();
                    break;
            
                default:
                    this.sumoBot.leftWheel.stop();
                    this.sumoBot.rightWheel.stop();
                    break;
            }

            return [strResult, objResultParseMode]
        }
        else
        {
            strResult += 'Controles activados.'
        }

        return [strResult, objResultParseMode]
    }
}

module.exports = StartCommand