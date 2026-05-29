import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductsRoute from "@/routes/products.route";

dotenv.config();

class Server {
    private readonly app: express.Application;

    constructor() {
        this.app = express();
        this.configServer();
        this.configRoutes();
        this.start();
    }

    private configServer(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private configRoutes(): void {
        this.app.use("/api/v1", new ProductsRoute("/products").router);
    }

    public start(): void {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
}

const server = new Server();
