/**
 * @file TodoList/actionTypes.tsx
 * @date 2021/05/13
 * @author zhangchongzhi
 * @lastModify zhangchongzhi 2021/05/13
 */

export enum ACTION_TYPE {
    ADD_TODO = 'add_todo',
    SELECT_LIST = 'select_list',
    REMOVE_TODO = 'remove_todo',
    UPDATE_TODO = 'update_todo',
}

/**
 * This interface defines all data types of todolist
 * @param {number} id
 * @param {string} msg
 * @param {boolean} select
 */
interface TodoItemType {
    id: number;
    msg: string;
    select: boolean;
}

export type { TodoItemType };

/**
 * This action will create a new ftodolist
 * @param {TodoItemType} payload new todolist
 */
interface addTodoAction {
    type: typeof ACTION_TYPE.ADD_TODO;
    payload: TodoItemType;
}

/**
 * This action will select a todolist
 * @param {number} payload select a todolist
 */
interface selectTodoAction {
    type: typeof ACTION_TYPE.SELECT_LIST;
    payload: number;
}

/**
 * This action will remove a todolist
 * @param {} payload remove a todolist
 */
interface removeTodoAction {
    type: typeof ACTION_TYPE.REMOVE_TODO;
}

/**
 * This action will update a todolist
 * @param {TodoItemType} payload update a todolist
 */
interface updateTodoAction {
    type: typeof ACTION_TYPE.UPDATE_TODO;
    payload: TodoItemType;
}

export type TodoListActionTypes =
    | addTodoAction
    | removeTodoAction
    | selectTodoAction
    | updateTodoAction;

/**
 * This file is a todolistreducer file
 * @param { TodoItemType[] } todoList todoList
 */
export interface TodoListReducer {
    todoList: TodoItemType[];
}
