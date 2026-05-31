import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductsRoute from "@/routes/products.route";
const __dirname = process.cwd();
import UsersRoute from "@/routes/users.route";

dotenv.config({
    path: `${__dirname}/.env`
});

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
        this.app.use("/api/v1", new UsersRoute("/users").router);
    }

    public start(): void {
        this.app.listen(process.env.BACKEND_PORT, () => {
            console.log(`Server is running on port ${process.env.BACKEND_PORT}`);
        });
    }
}

const server = new Server();
