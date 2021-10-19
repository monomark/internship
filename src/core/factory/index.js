import project from "./projectUseCase";
import auth from "./authUseCase";
import user from "./userUserCase";

import { projectService, authService, userService } from "../service";

export const projectUseCase = project(projectService());
export const authUseCase = auth(authService());
export const userUserCase = user(userService());
