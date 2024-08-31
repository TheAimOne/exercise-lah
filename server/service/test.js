const https = require('https');

module.exports = {
    getDirection: (req, res) => {
        
        const options = {
            host: 'localhost',
            port: 5001,
            path: '/controllerPath/testMethod',
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json; charset=UTF-8'
            },
            body: {},
          };


          const request = https.request(options, (res) => {
            if (res.statusCode !== 201) {
              console.error(`Did not get a Created from the server. Code: ${res.statusCode}`);
              res.resume();
              return;
            }
          
            let data = '';
          
            res.on('data', (chunk) => {
              data += chunk;
            });
          
            res.on('close', () => {
              console.log('Added new user', data);
              console.log(JSON.parse(data));
            });
          });

        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({ }), 'utf-8');
    },
};
