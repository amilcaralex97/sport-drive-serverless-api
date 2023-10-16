import { UserCase } from "../../../core/use-cases/User/UserCase";
import { UserRepositoryImpl } from "../../../infrastructure/database/UserRepositoryImpl";

export class UserController {
    private getUserById: UserCase;

    constructor() {
        this.getUserById = new UserCase(new UserRepositoryImpl());
    }

    async getUserDetails(id: string): Promise<any> {
        try {
            const car = await this.getUserById.execute(id);
            return { statusCode: 200, body: car };
        } catch (error) {
            return { statusCode: 500, body: 'Internal Server Error' };
        }
    }
}