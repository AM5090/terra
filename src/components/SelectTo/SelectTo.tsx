import { ChangeEvent, useEffect, useState } from "react";
import { useaAppSelector, useAppDispatch } from "../../store/hook";
import { updateToArr } from "../../store/toArrSlice";
import {findArr} from '../../utils/findArr';
import { FilterButtons } from "../FilterButtons";

export function SelectTo() {

    const filter = useaAppSelector(state => state.filter.filter);
    const seachValue = useaAppSelector(state => state.searchValue.searchValue);
    const toArr = useaAppSelector(state => state.toArr.toArr);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch(updateToArr(findArr(seachValue, filter)));
    }, [filter, seachValue]);

    useEffect(() => {
        if(toArr?.length) {
            setValue(toArr[0].name);
        }
    }, [toArr]);
    


    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
        setValue(event.target.value);
    }

    return (
        <>
        <FilterButtons/>
        <br/>
        <select value={value} onChange={handleSelect}>
            {toArr?.length && toArr.map((item) => (
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