export function asyncHandler(fn) {
    return async function (request, response) {
        try {
            await fn(request, response);
        } catch (err) {
            console.error('Error', err.message);

            response.send(500, { error: 'Internal server error' });
        }
    }
}