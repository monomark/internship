import project from "./projectUseCase";
import product from "./productUseCase";
import auth from "./authUseCase";
import user from './userUserCase'

import { projectService, authService, userService, productService } from "../service";

export const projectUseCase = project(projectService());
export const authUseCase = auth(authService());
export const userUserCase = user(userService())
export const productUseCase = product(productService());
