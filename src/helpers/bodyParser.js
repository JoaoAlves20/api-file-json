export function bodyParser(request, callback) {
    let body = '';

    request.on('data', (chunk) => body += chunk);
    request.on('end', function () {
        body = JSON.parse(body);
        request.body = body;
        callback();
    })
}