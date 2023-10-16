import { User } from "../../entities/User/User";

export class UserCase {
    constructor(private userRepository: UserRepository) { }

    async execute(id: string): Promise<User> {
        return this.userRepository.findById(id);
    }
}

export interface UserRepository {
    findById(id: string): Promise<User>;
}

