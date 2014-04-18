# broadcasterServer
A demo of how to implement a live video streaming system.  Users can click on the broadcast tap
and broadcast is automatically initiated. **Note** if you don't have an `id` when you start broadcasting that 
means the Peerjs server wasn't started (see bellow).

## how to run
- clone the repository
- `npm install`
- `cd /peerServer`
    + `npm install && node server`
- `cd ..`
- change the variable `IP_CONFIG` in `server.ts` (or in `server.js`) to your local IPv4 address (this way you can try the app with an android device as well!) or just remove it from the arguments of 
    before:
    ```javascript
        var server = http.createServer(app).listen(app.get('port'), IP_CONFIG, function () {
            console.log('Express server listening on port ' + app.get('port'));
        });
    ```
    after:
    ```
        var server = http.createServer(app).listen(app.get('port'), function () {
            console.log('Express server listening on port ' + app.get('port'));
        });        
    ```
- `node server`
- now visit it in the browser and see what you can do!

**note:** to compile the typescript files use:
- `npm install -g typescript` if it isn't already installed
- `tsc --module CommonJS --sourcemap --target ES5 server.ts` or any other file you wish to edit


# initial app flow - test out peerjs
 `/broadcast` starts a stream of the client's web cam and sends the id to a database
 `/view` shows a list of all broadcasts going on.  Each list item contains a `<a>` tag to the specific broadcast
 `/view/:id` shows the video stream from the specified id.  
 This is the general idea.  Implement using jquerymobile concepts.
