import { createServer } from 'http';
import { URL } from 'url';

import { router } from './routes.js';
import { bodyParser } from './helpers/bodyParser.js';

const server = createServer(function (request, response) {
    const parsedUrl = new URL(`http://localhost:3000${request.url}`)
    
    try {
        const splitEndPoint = parsedUrl.pathname.split('/').filter(Boolean);
        let id;
        
        if (splitEndPoint.length > 1) {
            parsedUrl.pathname = `/${splitEndPoint[0]}/:id`;
            id = Number(splitEndPoint[1]);
        }
        
        const route = router.find(item => (
            item.endpoint === parsedUrl.pathname && item.method === request.method
        ))

        if (route) {
            request.params = { id };
            response.send = (statusCode, messageReturn) => {
                response.writeHead(statusCode, { 'content-type': 'application/json' });
                response.end(JSON.stringify(messageReturn));
            }

            const handle = () => {
                try {
                    route.handler(request, response);
                } catch (err) {
                    console.error('Error', err.message)

                    response.send(500, { error: 'Internal server error' });
                }
            }

            if (['POST', 'PUT'].includes(request.method)) {
                bodyParser(request, handle);
            } else {
                handle();
            }
        }
    } catch (err) {
        console.error('Error', err.message)
        
        response.writeHead(500, { 'content-type': 'application/json' })
        response.end(JSON.stringify({ error: 'Internal server error' }))
    }
})

server.listen(3000, function () {
    console.log('Server runner in http://localhost:3000')
})