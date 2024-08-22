/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

WA.onInit().then(() => {        WA.nav.goToRoom("#start")})

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags);


    WA.room.area.onEnter('stairBottomToMiddle').subscribe(() => {
        WA.nav.goToRoom("#entrymiddlefrombottom")
    });

    // From middle to bottom
    WA.room.area.onEnter('stairMiddleToBottom').subscribe(() => {
        WA.nav.goToRoom("#entrybottom")
    });

    // From middle to top
    WA.room.area.onEnter('stairMiddleToTopLeft').subscribe(() => {
        WA.nav.goToRoom("#entrytopleft")
    });
    WA.room.area.onEnter('stairMiddleToTopRight').subscribe(() => {
        WA.nav.goToRoom("#entrytopright")
    });

    // From top to middle
    WA.room.area.onEnter('stairTopToMiddleLeft').subscribe(() => {
        WA.nav.goToRoom("#entrymiddleleft")
    });
    WA.room.area.onEnter('stairTopToMiddleRight').subscribe(() => {
        WA.nav.goToRoom("#entrymiddleright")
    });
}).catch(e => console.error(e));


export {};

export {};
