import { ChangeEvent, useEffect, useState } from 'react';
import { useaAppSelector, useAppDispatch } from '../../store/hook';
import { updateSearchValue } from '../../store/searchValueSlice';
import { FilterButtons } from '../FilterButtons';
import './SelectFor.scss';

export function SelectFor() {

    const directions = useaAppSelector(state => state.directions.directions);
    const [value, setValue] = useState('');
    const dispath = useAppDispatch();

    useEffect(() => {
        if(directions.length) {
            setValue(directions[0].name);
            dispath(updateSearchValue(directions[0].name));
        }
    }, [directions]);

    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
        setValue(event.target.value);
        dispath(updateSearchValue(event.target.value));
    };

    return (
        <>
        <FilterButtons/>
        <br/>
        <select value={value} onChange={handleSelect}>
            {directions.length && directions.map((item) => (
                <option key={item.code}>{item.name}</option>
            ))}
        </select>
        <br/>
        <div>
           {value} 
        </div>
        </>
    )
}