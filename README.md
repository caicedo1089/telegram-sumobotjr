# telegram-sumobotjr

[Bot de telegram](https://core.telegram.org/bots) que permite controlar un [Sumobot Jr](https://github.com/makenai/sumobot-jr). 

Este proyecto fue realizado para el taller nro 1 del cumpleaños de [BogotaJS](http://bogotajs.com/) el 18 de noviembre de 2017. 

La presentación del taller se puede encontrar en la carpeta docs del proyecto.

## Demostración

![Demostración](https://user-images.githubusercontent.com/10428238/33673458-bf91764a-da7a-11e7-99b9-56fb73649c13.gif)

## Instalación

```
npm install telegram-sumobotjr
```

## Uso

```
import telegram-sumobotjr from 'telegram-sumobotjr'

const token = '<mi-token-bot-telegram>'
const pkg = JSON.parse(require('fs').readFileSync('../package.json')) //Opcional

let botTelegram = new telegram-sumobotjr(token, pkg)
```

## Créditos
- [Pedro Caicedo](http://pcaicedo.com)
- [Sergio Sinuco](https://twitter.com/sergiosinuco)

## Licencia

[MIT](https://opensource.org/licenses/MIT)