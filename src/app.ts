import ApiBuilder from 'claudia-api-builder';
import { registerUserRoutes } from './api/routes/User/UserRoutes';

const api = new ApiBuilder();

registerUserRoutes(api);

export default api;
