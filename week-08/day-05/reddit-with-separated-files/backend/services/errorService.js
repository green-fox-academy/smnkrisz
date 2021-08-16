export const createErrorResponse = (err) => {
    return JSON.stringify({
        status: 'error',
        message: err
    })
}