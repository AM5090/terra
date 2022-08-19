import { useEffect, useState } from 'react';
import { FilterItem } from '../../store/filterSlice';
import { useaAppSelector } from '../../store/hook';
import { findArr } from '../../utils/findArr';
import { SelectFor } from '../SelectFor';
import { SelectTo } from '../SelectTo';
import './Layout.scss';

export function Layout() {

    const directions = useaAppSelector(state => state.directions.directions);
    const filter = useaAppSelector(state => state.filter.filter);
    const seachValue = useaAppSelector(state => state.searchValue.searchValue);
    const [newArr, setNewArr] = useState<FilterItem[] | undefined>([]);

    useEffect(() => {
        setNewArr(findArr(seachValue, filter));
    }, [filter, seachValue]);


    return (
        <div className="layout">
            {directions.length && <SelectFor selectList={directions} />}
            <br/>
            <br/>
            <br/>
            {newArr?.length && <SelectTo selectList={newArr} />}
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