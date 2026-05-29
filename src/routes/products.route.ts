import { ProductsController } from "@/controller/products.controller";
import { Route } from "@/interfaces/routes";
import { ProductsService } from "@/services/products.service";

export default class ProductsRoute extends Route<ProductsController> {

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
        this.router.get('/list', this.controller.list);
        this.router.get('/:id', this.controller.getById);
    }

    protected registerPostRoutes(): void {
        this.router.post('/', this.controller.create);
    }

    protected registerPutRoutes(): void {
        this.router.put('/:id', this.controller.updateById);
    }

    protected registerDeleteRoutes(): void {
        this.router.delete('/:id', this.controller.removeById);
    }

    protected registerPatchRoutes(): void {
        this.router.patch('/:id', this.controller.patchById);
    }
}
