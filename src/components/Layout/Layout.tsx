import { useEffect, useState } from 'react';
import { FilterItem } from '../../store/filterSlice';
import { useaAppSelector } from '../../store/hook';
import { findArr } from '../../utils/findArr';
import { Select } from '../Select';
import './Layout.scss';

export function Layout() {

    const directions = useaAppSelector(state => state.directions.directions);
    const filter = useaAppSelector(state => state.filter.filter);
    const [newArr, setNewArr] = useState<FilterItem[] | undefined>([]);

    useEffect(() => {
        setNewArr(findArr('Bitcoin BTC', filter));
    }, [filter]);

    return (
        <div className="layout">
            {directions.length && <Select selectList={directions} />}
            <br/>
            <br/>
            <br/>
            {newArr?.length && <Select selectList={newArr} />}
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