import ApiBuilder from 'claudia-api-builder';

const api: any = new ApiBuilder();
api.get('/', () => 'Hello world');

export default api;