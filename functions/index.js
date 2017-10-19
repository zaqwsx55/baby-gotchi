const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.babyCycle = functions.https.onRequest((request, response) => {

    // TODO: improve to have a transaction per baby
    // new we have an unnecessary transaction for all babies...
    admin.database()
        .ref('/babies')
        .transaction((babies) => {
            console.log('babies to update: ', babies);
            if (babies) {
                for (baby in babies) {
                    console.log('baby to update: ', baby);
                    updateBabyStats(babies[baby]);
                }
                console.log('babies updated: ', babies);
            }
            return babies;
        }).then(() => {
            console.log('One baby tick completed');
            response.send('One baby tick completed');
        }).catch((error) => {
            console.error('Error in babyCycle cloud function: ', error);
            response.send(500, 'ouch, Houston we have a problem');
        });

});

function updateBabyStats(baby) {
    
    if (baby.shittiness < 100) baby.shittiness += 1;
    if (baby.sleepiness < 100) baby.sleepiness += 1;
    if (baby.hunger < 100) baby.hunger += 1;

    if (babyStatusAvg(baby) <= 25 && baby.life < 100)
        baby.life += 10;
    else if (babyStatusAvg(baby) <= 50 && baby.life < 100)
        baby.life += 1;
    else if (babyStatusAvg(baby) == 100 && baby.life > 0) 
        baby.life -= 50;
    else if (babyStatusAvg(baby) > 90 && baby.life > 0)
        baby.life -= 10;
    else if (babyStatusAvg(baby) > 75 && baby.life > 0)
        baby.life -= 1;
    
    if (baby.life > 100) baby.life = 100;
    if (baby.life < 0) baby.life = 0;

}

function avg(...items) {
    var sum = items.reduce((a, b) => a + b);
    return sum/items.length;
}

function babyStatusAvg(baby) {
    return avg(baby.shittiness, baby.sleepiness, baby.hunger);
}
