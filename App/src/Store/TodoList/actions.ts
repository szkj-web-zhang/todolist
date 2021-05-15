/**
 * @file TodoList/actions.tsx
 * @date 2021/05/13
 * @author zhangchongzhi
 * @lastModify zhangchongzhi 2021/05/13
 */

import * as types from './actionTypes';

/**
 * add new todo action
 * @param todoItem
 */
const addTodoAction = (todoItem: types.TodoItemType): types.TodoListActionTypes => ({
    type: types.ACTION_TYPE.ADD_TODO,
    payload: todoItem,
});

/**
 * remove a todo action
 * @param {{}}
 */
const removeTodoAction = (): types.TodoListActionTypes => ({
    type: types.ACTION_TYPE.REMOVE_TODO,
});

/**
 * select a todo action
 * @param payload
 */
const selectTodoAction = (payload: number): types.TodoListActionTypes => ({
    type: types.ACTION_TYPE.SELECT_LIST,
    payload,
});

export { addTodoAction, selectTodoAction, removeTodoAction };
