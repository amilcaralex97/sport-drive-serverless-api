import { User } from "../../core/entities/User/User";
import { UserRepository } from "../../core/use-cases/User/UserCase";


export class UserRepositoryImpl implements UserRepository {
    // Mocked Database Query
    async findById(id: string): Promise<User> {
        // Here you'll connect to your database to get the car by its ID.
        // For simplicity, returning a mock car.
        return new User(id, 'Alex', 'Sanchez', '3313612735', 'test@test.com');
    }

    async getAll(): Promise<User[]> {
        return [new User('1', 'Alex', 'Sanchez', '3313612735', 'test@test.com')]
    }
}
