import { User } from "../../entities/User/User";

export enum UserActions {
    FindById = "FIND_BY_ID",
    GetAll = "GET_ALL"
}

export class UserCase {
    constructor(private userRepository: UserRepository) { }

    async execute(action: UserActions, params?: any): Promise<User | User[]> {
        switch (action) {
            case UserActions.FindById:
                if (!params?.id) throw new Error("ID is required for FIND_BY_ID action");
                return this.findById(params.id);
            case UserActions.GetAll:
                return this.getAll();
            default:
                throw new Error("Invalid action");
        }
    }

    private async findById(id: string): Promise<User> {
        return this.userRepository.findById(id);
    }

    private async getAll(): Promise<User[]> {
        return this.userRepository.getAll();
    }
}

export interface UserRepository {
    findById(id: string): Promise<User>;
    getAll(): Promise<User[]>
}

