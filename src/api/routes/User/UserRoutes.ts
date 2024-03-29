import { UserController } from '../../controllers/User/UserController'

const userController = new UserController()

export function registerUserRoutes(app: any) {
    app.get('/api/users/:id', async (request: any) => {
        return await userController.getUserDetails(request.params.id);
    });
}
