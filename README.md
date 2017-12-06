# telegram-sumobotjr

[Bot de telegram](https://core.telegram.org/bots) que permite controlar un [Sumobot Jr](https://github.com/makenai/sumobot-jr). 

Este proyecto fue realizado para el taller nro 1 del cumpleaños de [BogotaJS](http://bogotajs.com/) el 18 de noviembre de 2017. 

La [presentación](https://github.com/caicedo1089/telegram-sumobotjr/blob/master/docs/Controlando%20un%20sumobotjr%20desde%20telegram.pdf) del taller se puede encontrar en la carpeta [docs](https://github.com/caicedo1089/telegram-sumobotjr/tree/master/docs) del proyecto.

<b>Nota:<b> Recuerden que antes de probar esta librería deben tener el johnny-five funcionando. Se recomienda hacer el [ejemplo de sumobotjs](https://github.com/makenai/sumobot-jr/blob/master/code_example/sumobot.js)

## Demostración

![Demostración](https://user-images.githubusercontent.com/10428238/33673458-bf91764a-da7a-11e7-99b9-56fb73649c13.gif)

## Instalación

```
npm i telegram-sumobotjr
```

## Uso

```
const telegramSumobotJR = require('telegram-sumobotjr')
const token = 'token'
const pkg = {}

let botTelegram = new telegramSumobotJR(token, pkg)
```

## Créditos
- [Pedro Caicedo](http://pcaicedo.com)
- [Sergio Sinuco](https://twitter.com/sergiosinuco)

## Licencia

[MIT](https://opensource.org/licenses/MIT)