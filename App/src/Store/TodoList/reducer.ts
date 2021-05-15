/**
 * @file TodoList/reducer.tsx
 * @date 2021/05/13
 * @author zhangchongzhi
 * @lastModify zhangchongzhi 2021/05/13
 */

import * as types from './actionTypes';

const initState: types.TodoListReducer = {
    todoList: [],
};

export default (state = initState, action: types.TodoListActionTypes): types.TodoListReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.ADD_TODO:
            return {
                todoList: [action.payload, ...state.todoList],
            };
        case types.ACTION_TYPE.SELECT_LIST:
            return {
                todoList: state.todoList.map((todoObj) => {
                    todoObj.select = todoObj.id === action.payload;
                    console.log(todoObj.select);
                    return {
                        ...todoObj,
                    };
                }),
            };
        case types.ACTION_TYPE.REMOVE_TODO:
            return {
                todoList: state.todoList.filter((todoObj) => !todoObj.select),
            };

        default:
            return state;
    }
};
