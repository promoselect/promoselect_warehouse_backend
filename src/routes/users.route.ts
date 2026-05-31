import { Route } from "@interfaces/routes";
import UsersController from '@/controller/users.controller';

export default class UsersRoute extends Route<UsersController> {
  constructor(path: string) {
    super(path, new UsersController());
  }

    protected configRoutes(): void {
        this.registerGetRoutes();
        this.registerPostRoutes();
        this.registerPutRoutes();
        this.registerDeleteRoutes();
        this.registerPatchRoutes();
    }

    protected registerGetRoutes(): void {
        this.router.get(`${this.path}/list`, this.controller.list.bind(this.controller));
        this.router.get(`${this.path}/:id`, this.controller.get.bind(this.controller));
    }

    protected registerPostRoutes(): void {
        // this.router.post(`${this.path}`, this.controller.create);
    }
    
    protected registerPutRoutes(): void {
        // this.router.put(`${this.path}/:id`, this.controller.updateById);
    }

    protected registerDeleteRoutes(): void {
        // this.router.delete(`${this.path}/:id`, this.controller.removeById);
    }
    
    protected registerPatchRoutes(): void {
        // this.router.patch(`${this.path}/:id`, this.controller.patchById);
    }   
}
