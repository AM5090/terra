import { ChangeEvent, useEffect, useState } from "react";
import { FilterItem } from "../../store/filterSlice"

interface ISelectPops {
    selectList: FilterItem[]
}

export function SelectTo({selectList}: ISelectPops) {

    const [value, setValue] = useState(selectList[0].name);

    useEffect(() => {
        setValue(selectList[0].name);
    }, [])

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