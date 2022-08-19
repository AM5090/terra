import { useEffect, useState } from 'react';
import { FilterItem } from '../../store/filterSlice';
import { useaAppSelector } from '../../store/hook';
import { findArr } from '../../utils/findArr';
import { SelectFor } from '../SelectFor';
import { SelectTo } from '../SelectTo';
import './Layout.scss';

export function Layout() {

    const filter = useaAppSelector(state => state.filter.filter);
    const seachValue = useaAppSelector(state => state.searchValue.searchValue);
    


    return (
        <div className="layout">
            <SelectFor />
            <br/>
            <br/>
            <br/>
            <SelectTo />
            {/*<div>
                {filter.map((item) => (
                    <div key={item.from.code}>
                        <div>{item.from.name}</div>
                        <br/>
                        <div>{item.to.map((item) => (
                            <div key={item.code}>{item.name}</div>
                        ))}</div>
                        <hr/>
                        <br/>
                    </div>
                ))}
            </div>*/}
        </div>
    )
}