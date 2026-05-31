import { Service } from "@/interfaces/services";

export class ProductsService extends Service {
    constructor() {
        super();
    }

    getProduct(id: number) {
        return {
            id,
            name: "Product Name",
            price: 100,
            description: "Product Description"
        };
    }
}
