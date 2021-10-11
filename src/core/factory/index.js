import project from './projectUseCase'

import {
    projectService,
} from '../service'

export const projectUseCase = project(projectService())