import { ChangeEvent, useEffect, useState } from 'react';
import { updateMainFilteredArray, updateMainFilteringValues } from '../../store/directionsSlice';
import { updateSecondFilteringValues } from '../../store/filterSlice';
import { useaAppSelector, useAppDispatch } from '../../store/hook';
import { updateSearchValue } from '../../store/searchValueSlice';
import { arrayFiltering } from '../../utils/arrayFiltering';
import { FilterButtons } from '../FilterButtons';
import './SelectFor.scss';

export function SelectFor() {

    const directions = useaAppSelector(state => state.directions.directions);
    const filteredArray = useaAppSelector(state => state.directions.mainFilteredArray);
    const filteringValues = useaAppSelector(state => state.directions.mainFilteringValues);
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(directions.length) {
            dispatch(updateMainFilteredArray(arrayFiltering(directions, filteringValues)));
        }
    }, [directions, filteringValues]);

    useEffect(() => {
        if(filteredArray.length) {
            setValue(filteredArray[0].name);
            dispatch(updateSearchValue(filteredArray[0].name));
        }
    }, [filteredArray]);

    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
        setValue(event.target.value);
        dispatch(updateSearchValue(event.target.value));
    };

    function handleMainFilteringValues(typeArr: string[]) {
        dispatch(updateMainFilteringValues(typeArr));
    };

    return (
        <>
        <FilterButtons filteringValues={handleMainFilteringValues} />
        <br/>
        <select value={value} onChange={handleSelect}>
            {filteredArray.length && filteredArray.map((item) => (
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