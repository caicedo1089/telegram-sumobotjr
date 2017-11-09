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

            misArguments.push(`${App.lang('Hola')} <b>${msg.from.first_name}</b>\n\n`)
        }
        
        //Se ejecuta la función de acuerdo al último estado
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
                ['Arriba'],
                ['Parar'],
                ['Abajo'],
            ]
        }

        if(msg.text != 'Encender')
        {
            strResult += `Comando ejecutado -> ${msg.text}`

            switch (msg.text) 
            {
                case 'Arriba':
                    this.sumoBot.leftWheel.ccw();
                    this.sumoBot.rightWheel.cw();
                    break;
                case 'Abajo':
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
            strResult += 'Nuevos controles activados.'
        }
        
        /*strResult += `<b>${'Tú'} (${this.global.board.chars.user1}) vs ${App.session[chatId].user2} (${this.global.board.chars.user2})</b>\n\n` 
        strResult += `<i>${App.session[chatId][App.session[chatId].turn]}</i> es su turno.\n\n`
        strResult += `<pre>${this.viewBoard(App.session[chatId].strBoard, 6)}</pre>`
       
       
        objResultParseMode['parse_mode'] = 'HTML'
        
        objResultParseMode['reply_markup'] = {
            "keyboard": this.viewOptions(App.session[chatId].strBoard)
        }
        
        //Delego la nueva función
        //App.session[chatId].funtionExcecute = 'excecuteMenu'

        if(App.session[chatId].attempts < 1)
        {
            strResult += App.lang('\n\nJuego Terminado!!!\n')
            //App.session[chatId].funtionExcecute = 'displayMenu'

            //Reset de los valores
            App.session[chatId].strBoard = this.global.board.default,
            App.session[chatId].turn = 'user1',
            App.session[chatId].attempts = this.global.board.attempts

            objResultParseMode['reply_markup'] = {
                "keyboard": [
                    ["Encender"],   
                ]
            }
        }*/

        return [strResult, objResultParseMode]
    }
}

module.exports = StartCommand