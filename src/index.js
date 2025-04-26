import { createServer } from 'http'
import { URL } from 'url'

import { router } from './routes.js'

const server = createServer(function (request, response) {
    const parsedUrl = new URL(`http://localhost:3000${request.url}`)
    
    try {
        const route = router.find(item => (
            item.endpoint === parsedUrl.pathname && item.method === request.method
        ))

        if (route) {
            route.handler(request, response);
        }
    } catch (err) {
        console.error('Error', err)
        
        response.writeHead(500, { 'content-type': 'application/json' })
        response.end({ error: 'Internal server error' })
    }
})

server.listen(3000, function () {
    console.log('Server runner in http://localhost:3000')
})