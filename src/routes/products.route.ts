import { ProductsController } from "@/controller/products.controller";
import { Route } from "@/interfaces/routes";
import { ProductsService } from "@/services/products.service";

export default class ProductsRoute extends Route<ProductsController> {

    constructor(path: string) {
        super(path, new ProductsController(new ProductsService()));
    }

    protected configRoutes(): void {
        this.registerGetRoutes();
        this.registerPostRoutes();
        this.registerPutRoutes();
        this.registerDeleteRoutes();
        this.registerPatchRoutes();
    }

    protected registerGetRoutes(): void {
        this.router.get(`${this.path}/list`, this.controller.list);
        this.router.get(`${this.path}/:id`, this.controller.getById);
    }

    protected registerPostRoutes(): void {
        this.router.post(`${this.path}`, this.controller.create);
    }

    protected registerPutRoutes(): void {
        this.router.put(`${this.path}/:id`, this.controller.updateById);
    }

    protected registerDeleteRoutes(): void {
        this.router.delete(`${this.path}/:id`   , this.controller.removeById);
    }

    protected registerPatchRoutes(): void {
        this.router.patch(`${this.path}/:id`, this.controller.patchById);
    }
}
