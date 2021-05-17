/**
 * @file List组件
 * @date 2021/05/13
 * @author zhangchongzhi
 * @lastModify zhangchongzhi 2021/05/13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../Store/rootReducer';
import {
    selectTodoAction,
    updateTodoAction,
    removeTodoAction,
} from '../../../../Store/TodoList/actions';
import { TodoItemType } from '../../../../Store/TodoList/actionTypes';
import TodoList from '../..';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */

/**
 * component of List
 * @constant
 * @returns {JSX.Element}
 */
const List = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/

    /**
     * component of List
     * @constant
     * @returns {JSX.Element}
     */
    const todoArray = useSelector((state: RootState) => state.todoListReducer.todoList);
    const dispatch = useDispatch();

    /**
     * status of element is edit or not
     * @constant
     * @returns {TodoItemType | number}
     */
    const [edited, setEdited] = useState<TodoItemType | number>(-1);

    /**
     * msg to be changed
     * @constant
     * @returns {string}
     */
    const [newMsg, setTemMsg] = useState('');

    /**
     * judge value of input value
     * @returns {string}
     */
    useEffect(() => {
        if (edited !== -1) {
            setTemMsg(() => (edited as TodoItemType).msg);
        }
    }, [edited]);
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * update msg and delete todolist when msg is empty
     * @constant
     * @returns {string}
     */
    const updateTodo = () => {
        const newObj = { ...(edited as TodoItemType), msg: newMsg };
        if (newObj.msg === '') {
            dispatch(removeTodoAction());
        } else {
            dispatch(updateTodoAction(newObj));
        }
        setEdited(-1);
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            {todoArray.map((todoObj) => (
                <div key={todoObj.id}>
                    <div
                        onClick={() => dispatch(selectTodoAction(todoObj.id))}
                        onDoubleClick={() => {
                            setEdited(todoObj);
                        }}
                        style={{
                            display: (edited as TodoItemType).id !== todoObj.id ? 'block' : 'none',
                        }}
                        className={`todo-item ${todoObj.select ? 'active' : ''}`}
                    >
                        {todoObj.msg}
                    </div>
                    {(edited as TodoItemType).id === todoObj.id && (
                        <input
                            onBlur={updateTodo}
                            value={newMsg}
                            onChange={(e) => setTemMsg(e.target.value)}
                        />
                    )}
                </div>
            ))}
        </Row>
    );
};
export default List;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
