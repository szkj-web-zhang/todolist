/**
 * @file Input组件
 * @date 2021/05/13
 * @author zhangchongzhi
 * @lastModify zhangchongzhi 2021/05/13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { FC, useState } from 'react';
import { Row } from 'antd';
import { useDispatch } from 'react-redux';
import { addTodoAction, removeTodoAction } from '../../../../Store/TodoList/actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
/**
 * component of Input
 * @constant
 * @returns {JSX.Element}
 */
const Input: FC = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const dispatch = useDispatch();
    /**
     * get value of input and set value to input
     * @constant
     * @returns {string,void}
     */
    const [content, setContent] = useState('');
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * get user input value
     * @constant
     * @returns {value:string}
     */
    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value.trim());
    };

    /**
     * button click of add new todolist
     * @constant
     * @returns {Array[]}
     */
    const addTodoHnadler = () => {
        if (content === '') {
            alert('不能为空');
            return;
        }
        dispatch(
            addTodoAction({
                id: Math.random() * 10000 + 1,
                msg: content,
                select: false,
            }),
        );
        setContent('');
    };

    /**
     * button click of remove todolist
     * @constant
     * @returns {Array[]}
     */
    const removeTodoHnadler = () => {
        dispatch(removeTodoAction());
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            <input autoFocus onChange={getInputValue} value={content} type="text" />
            <button onClick={addTodoHnadler}>创建</button>
            <button onClick={removeTodoHnadler}>删除</button>
        </Row>
    );
};
export default Input;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
