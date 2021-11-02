import { v4 as uuidv4 } from 'uuid';

export interface Task{
    uuid: string
    stateDone: boolean
    priority: number
    description: string
}

export const createTask = (description: string): Task =>{
    return {uuid: uuidv4(), stateDone: false, priority: 0,description: description}
}