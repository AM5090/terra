import { ChangeEvent, FormEvent, SelectHTMLAttributes, SetStateAction, useState } from 'react';
import { DirectionsItem } from '../../store/directionsSlice';
import './Select.scss';

interface ISelectProps {
    selectList: DirectionsItem[];
    onDispatch?: (value: string) => void;
}

export function Select({selectList, onDispatch}: ISelectProps) {

    const [value, setValue] = useState(selectList[0].name);

    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
        setValue(event.target.value);
        onDispatch?.(value);
    }

    return (
        <>
        <select value={value} onChange={handleSelect}>
            {selectList.map((item) => (
                <option key={item.code}>{item.name}</option>
            ))}
        </select>
        <br/>
        <br/>
        <br/>
        <div>
           {value} 
        </div>
        </>
    )
}