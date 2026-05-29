const PRODUCT_ROUTES = {
    listProducts: "/list",
    getProduct: "/:id",
    createProduct: "/",
    updateProduct: "/:id",
    deleteProduct: "/:id",
    patchProduct: "/:id",
};

const PRODUDCT_CONTROLLER_METHODS = {
    listProducts: "list",
    getProduct: "show",
    createProduct: "create",
    updateProduct: "update",
    deleteProduct: "remove",
    patchProduct: "patch",
};

export { PRODUCT_ROUTES, PRODUDCT_CONTROLLER_METHODS };