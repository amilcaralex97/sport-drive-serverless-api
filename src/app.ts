import ApiBuilder from 'claudia-api-builder';
import { registerUserRoutes } from './api/routes/UserRoutes/UserRoutes';

const api = new ApiBuilder();

registerUserRoutes(api);

export default api;
