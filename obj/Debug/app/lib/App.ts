///<reference path="c:\DefinitelyTyped\jquery\jquery.d.ts"/>
///<reference path="c:\DefinitelyTyped\jquerymobile\jquerymobile.d.ts"/>
///<reference path="c:\DefinitelyTyped\knockout\knockout.d.ts"/>
///<reference path="peer.d.ts"/>
///<reference path="typings.d.ts"/>

import $ = require('jquery')
//import peer = require('peer')


module App {

    export function run() {
        //console.log('it\'s alive', $.mobile)
        // Compatibility shim
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        // PeerJS object
        var peer = new Peer({ host: 'localhost', port: '9000' });
        console.log(peer)
	}
} 

export = App