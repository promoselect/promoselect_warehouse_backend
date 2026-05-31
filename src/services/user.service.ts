import { Service } from '@interfaces/services';
export class UsersService extends Service {
    constructor() {
        super();
    }

    getUser(id: number) {
        return {
            id,
            name: "User Name",
            email: "example@example.com",
            role: "User"
        };
    }
}