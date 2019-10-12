'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const access_token = "EAAjRwe36lzkBAJmAiXItvTa7iPb4dSCuuQMYulMZAfxeEheQ7mx0IzhACqN49ZBsJ1dwrgiCqChXtjoEHfTL0EUXpsVZAyLzTQeZB15W4IxLs0tlqKEq8OHZAJ4hDMT1I6qi7VGyZCwKLM5jznjaiKmUBInRr2fhnfHIiapMZAiMHAUbpY0t5Wy"

const app = express();

app.set('port', (process.env.PORT || 5000 ));
app.use(bodyParser.json());


const path = require('path');

app.get('/', function(req, response){
    //response.send('Hola Mundo!');
    response.sendFile(path.join(__dirname+'/probar.html'));
})

app.get('/ba/', function(req, response){
    //response.send('Hola Mundo!');
    response.sendFile(path.join(__dirname+'/probar.html'));
})




app.get('/webhook', function(req, response){
    if(req.query['hub.verify_token'] === 'pugpizza_token'){
        response.send(req.query['hub.challenge']);
    } else {
        response.send('Pug Pizza no tienes permisos.');
    }
});

app.post('/webhook/', function(req, res){
    const webhook_event = req.body.entry[0];
    if(webhook_event.messaging) {
        webhook_event.messaging.forEach(event => {
   handleMessage(event);
        });
    }
    res.sendStatus(200);
});




function handleMessage(event){
    const senderId = event.sender.id;
    const messageText = event.message.text;
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            text: messageText
        }
    }
    callSendApi(messageData);
}

function callSendApi(response) {
    request({
        "uri": "https://graph.facebook.com/me/messages",
        "qs": {
            "access_token": access_token
        },
        "method": "POST",
        "json": response
    },
    function(err) {
        if(err) {
            console.log('Ha ocurrido un error')
        } else {
            console.log('Mensaje enviado')
        }
    }
)
}


app.listen(app.get('port'), function(){
    console.log('Nuestro servidor esta funcionando con el barto en el puerto: ', app.get('port'));
});   
/* FUNCIONA SOLA IMAGEN

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const access_token = "EAAjRwe36lzkBAH4nnUFHGCOZAnLvKD0fhytOx4kJsBYv5GNaTrmDKv5omnVZBytsU8UKynq3sX1rpdZCyMicdDYTDYyjCk0asxyub5O2t00L3TD5X8DPCiXOaA3xwXBCeUKF1W1yWavtsgbfM3gy63o3ZAOBFdrgKIKZAHft9ZA8MaOQI0G3lI"

const app = express();

app.set('port', 5000);
app.use(bodyParser.json());


const path = require('path');

app.get('/', function(req, response){
    //response.send('Hola Mundo!');
    response.sendFile(path.join(__dirname+'/probar.html'));
})




app.get('/webhook', function(req, response){
    if(req.query['hub.verify_token'] === 'pugpizza_token'){
        response.send(req.query['hub.challenge']);
    } else {
        response.send('Pug Pizza no tienes permisos.');
    }
});

app.post('/webhook/', function(req, res){
    const webhook_event = req.body.entry[0];
    if(webhook_event.messaging) {
        webhook_event.messaging.forEach(event => {
   handleMessage(event);
        });
    }
    res.sendStatus(200);
});




function handleMessage(event){
    const senderId = event.sender.id;
    const messageText = event.message.text;
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            attachment: {
                type: "image",
                payload: {
                    url: "https://media.giphy.com/media/1dOIvm5ynwYolB2Xlh/giphy.gif"
                }
            }
        }
    }
    callSendApi(messageData);
}

function callSendApi(response) {
    request({
        "uri": "https://graph.facebook.com/me/messages",
        "qs": {
            "access_token": access_token
        },
        "method": "POST",
        "json": response
    },
    function(err) {
        if(err) {
            console.log('Ha ocurrido un error')
        } else {
            console.log('Mensaje enviado')
        }
    }
)
}


app.listen(app.get('port'), function(){
    console.log('Nuestro servidor esta funcionando con el barto en el puerto: ', app.get('port'));
});

*/



/* FUNCIONA SOLO PARA DEVOLVER EL MISMO TEXTO 

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const access_token = "EAAjRwe36lzkBAH4nnUFHGCOZAnLvKD0fhytOx4kJsBYv5GNaTrmDKv5omnVZBytsU8UKynq3sX1rpdZCyMicdDYTDYyjCk0asxyub5O2t00L3TD5X8DPCiXOaA3xwXBCeUKF1W1yWavtsgbfM3gy63o3ZAOBFdrgKIKZAHft9ZA8MaOQI0G3lI"

const app = express();

app.set('port', 5000);
app.use(bodyParser.json());


const path = require('path');

app.get('/', function(req, response){
    //response.send('Hola Mundo!');
    response.sendFile(path.join(__dirname+'/probar.html'));
})




app.get('/webhook', function(req, response){
    if(req.query['hub.verify_token'] === 'pugpizza_token'){
        response.send(req.query['hub.challenge']);
    } else {
        response.send('Pug Pizza no tienes permisos.');
    }
});

app.post('/webhook/', function(req, res){
    const webhook_event = req.body.entry[0];
    if(webhook_event.messaging) {
        webhook_event.messaging.forEach(event => {
   handleMessage(event);
        });
    }
    res.sendStatus(200);
});




function handleMessage(event){
    const senderId = event.sender.id;
    const messageText = event.message.text;
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            text: messageText
        }
    }
    callSendApi(messageData);
}

function callSendApi(response) {
    request({
        "uri": "https://graph.facebook.com/me/messages",
        "qs": {
            "access_token": access_token
        },
        "method": "POST",
        "json": response
    },
    function(err) {
        if(err) {
            console.log('Ha ocurrido un error')
        } else {
            console.log('Mensaje enviado')
        }
    }
)
}


app.listen(app.get('port'), function(){
    console.log('Nuestro servidor esta funcionando con el barto en el puerto: ', app.get('port'));
});   

*/


















/* bk 1



  "sender_action": "typing_on" o "mark_seen"

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const access_token = "EAAjRwe36lzkBAH4nnUFHGCOZAnLvKD0fhytOx4kJsBYv5GNaTrmDKv5omnVZBytsU8UKynq3sX1rpdZCyMicdDYTDYyjCk0asxyub5O2t00L3TD5X8DPCiXOaA3xwXBCeUKF1W1yWavtsgbfM3gy63o3ZAOBFdrgKIKZAHft9ZA8MaOQI0G3lI"




const app = express();

app.set('port', (process.env.PORT || 5000 ));

 //Para entender elementos json que se recibiran del api de fb
app.use(bodyParser.json());


// Para verificar que nuestro servidor esta funcionando
app.get('/', function(req, response){
    response.send('Hola Mundewo!');
})



app.get('/webhook', function(req, response){
	//Verificar que el token insertado en facebook
    if(req.query['hub.verify_token'] === 'pugpizza_token'){
        response.send(req.query['hub.challenge']);
    } else {
        response.send('Pug Pizza no tienes permisos.');
    }
});



// Permite obtener mensajes recibidos
app.post('/webhook/', function(req, res){
	// Arreglo del objeto recibido
    const webhook_event = req.body.entry[0];
    // Validar si realmente es un elemento de mensaje
    if(webhook_event.messaging) {
        webhook_event.messaging.forEach(event => {
			//console.log(event);
            handleMessage(event);
        });
    }
    res.sendStatus(200);
});


// Manejador de mensajes
function handleMessage(event){
    const senderId = event.sender.id;
    const messageText = event.message.text;
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            text: messageText
        }
    }
    callSendApi(messageData);
}




function callSendApi(response) {
	// Informacion necesaria para poder comunicarnos con nuestro bot
    request({
        "uri": "https://graph.facebook.com/me/messages",
        "qs": {
            "access_token": access_token
        },
        "method": "POST",
        "json": response
    },
        function (err) {
            if (err) {
                console.log('Ha ocurrido un errdor')
            } else {
                console.log('Mensaje enviadssddso')
            }
        }
    )
}



//Crear mensaje para probar si esta funcionando nuestra app
app.listen(app.get('port'), function(){
    console.log('Nuestro servidor esta funcionando en el puerto: ', app.get('port'));
});




*/