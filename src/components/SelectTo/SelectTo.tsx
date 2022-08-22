import { ChangeEvent, useEffect, useState } from "react";
import { updateSecondFilteringValues, updateToArr } from "../../store/filterSlice";
import { useaAppSelector, useAppDispatch } from "../../store/hook";
import {findArr} from '../../utils/findArr';
import { FilterButtons } from "../FilterButtons";

export function SelectTo() {

    const filter = useaAppSelector(state => state.filter.filter);
    const searchValue = useaAppSelector(state => state.searchValue.searchValue);
    const toArr = useaAppSelector(state => state.filter.toArr);
    const secondFilteringValues = useaAppSelector(state => state.filter.secondFilteringValues);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch(updateToArr(findArr(searchValue, filter, secondFilteringValues)));
    }, [filter, searchValue, secondFilteringValues]);

    useEffect(() => {
        if(toArr?.length) {
            setValue(toArr[0].name);
        }
    }, [toArr]);
    

    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
        setValue(event.target.value);
    };

    function handleSecondFilteringValues(typeArr: string[]) {
        dispatch(updateSecondFilteringValues(typeArr));
    };

    return (
        <>
        <FilterButtons filteringValues={handleSecondFilteringValues} />
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