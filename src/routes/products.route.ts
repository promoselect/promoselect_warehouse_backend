import { ProductsController } from "@/controller/products.controller";
import { Route } from "@/interfaces/routes";
import { ProductsService } from "@/services/products.service";

export default class ProductsRoute extends Route {

    constructor(path: string) {
        super(path);
        this.controller = new ProductsController(new ProductsService());
    }

    protected configRoutes(): void {
        this.registerGetRoutes();
        this.registerPostRoutes();
        this.registerPutRoutes();
        this.registerDeleteRoutes();
        this.registerPatchRoutes();
    }

    protected registerGetRoutes(): void {
        this.router.get(`${this.path}/list`, this.bind("list"));
        this.router.get(`${this.path}/:id`, this.bind("show"));
    }

    protected registerPostRoutes(): void {
        this.router.post(this.path, this.bind("create"));
    }

    protected registerPutRoutes(): void {
        this.router.put(`${this.path}/:id`, this.bind("update"));
    }

    protected registerDeleteRoutes(): void {
        this.router.delete(`${this.path}/:id`, this.bind("remove"));
    }

    protected registerPatchRoutes(): void {
        this.router.patch(`${this.path}/:id`, this.bind("patch"));
    }
}
