import { ChangeEvent, useEffect, useState } from 'react';
import { DirectionsItem } from '../../store/directionsSlice';
import { useaAppSelector, useAppDispatch } from '../../store/hook';
import { updateSearchValue } from '../../store/searchValueSlice';
import './SelectFor.scss';

interface ISelectProps {
    selectList: DirectionsItem[];
}

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