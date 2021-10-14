import project from "./projectUseCase";
import product from "./productUseCase";

import { productService, projectService } from "../service";

export const projectUseCase = project(projectService());
export const productUseCase = product(productService());
