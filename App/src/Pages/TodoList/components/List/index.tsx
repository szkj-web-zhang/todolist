/**
 * @file List组件
 * @date 2021/05/13
 * @author zhangchongzhi
 * @lastModify zhangchongzhi 2021/05/13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState, useEffect, useRef } from 'react';
import { Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../Store/rootReducer';
import { selectTodoAction } from '../../../../Store/TodoList/actions';

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
     * el is edit or not
     * @constant
     * @returns {string,void}
     */
    const [edited, setEdited] = useState(-1);
    /**
     * get ref of input
     * @constant
     * @returns {string}
     */
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            {todoArray.map((todoObj) => (
                <div key={todoObj.id}>
                    <div
                        onBlur={() => {
                            setEdited(-1);
                        }}
                        onClick={() => dispatch(selectTodoAction(todoObj.id))}
                        onDoubleClick={() => {
                            setEdited(todoObj.id);
                        }}
                        style={{ display: edited !== todoObj.id ? 'block' : 'none' }}
                        className={`todo-item ${todoObj.select ? 'active' : ''}`}
                    >
                        {todoObj.msg}
                    </div>
                    <input
                        style={{
                            display: edited === todoObj.id ? 'block' : 'none',
                            width: '100%',
                        }}
                        type="text"
                        onBlur={() => {
                            setEdited(-1);
                            console.log('input:' + todoObj.msg);
                        }}
                        defaultValue={todoObj.msg}
                    />
                </div>
            ))}
        </Row>
    );
};
export default List;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
