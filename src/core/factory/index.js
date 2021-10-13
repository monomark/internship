import project from "./projectUseCase";
import auth from "./authUseCase";

import { projectService, authService } from "../service";

export const projectUseCase = project(projectService());
export const authUseCase = auth(authService());
