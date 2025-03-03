const { app } = require('@azure/functions');

app.http('Function', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`HTTP function processed request for URL: "${request.url}"`);

        // Get 'keyword' from query parameters or request body
        const keyword = request.query.get('keyword') || await request.text() || 'nothing';

        return { body: `Mohammed Waseem says "${keyword}"` };
    }
});
