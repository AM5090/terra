import { ChangeEvent, useEffect, useState } from 'react';
import { DirectionsItem } from '../../store/directionsSlice';
import { useaAppSelector, useAppDispatch } from '../../store/hook';
import { updateSearchValue } from '../../store/searchValueSlice';
import './SelectFor.scss';

interface ISelectProps {
    selectList: DirectionsItem[];
}

export function SelectFor({selectList}: ISelectProps) {

    const directions = useaAppSelector(state => state.directions.directions);
    const [value, setValue] = useState(selectList[0].name);
    const dispath = useAppDispatch();

    useEffect(() => {
        dispath(updateSearchValue(value));
    }, [value])

    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
        setValue(event.target.value);
    }

    return (
        <>
        <select value={value} onChange={handleSelect}>
            {selectList.map((item) => (
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