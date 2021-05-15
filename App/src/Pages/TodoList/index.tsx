/**
 * @file TodoList组件
 * @date 2021/05/13
 * @author zhangchongzhi
 * @lastModify zhangchongzhi 2021/05/13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from 'react';
import { Row } from 'antd';
import Input from './components/Input';
import List from './components/List';
import './index.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */

/**
 * component of TodoList
 * @constant
 * @returns {JSX.Element}
 */
const TodoList = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            <Input />
            <List />
        </Row>
    );
};
export default TodoList;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
