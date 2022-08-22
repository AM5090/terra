import { FilterObject } from "../store/filterSlice";
import { arrayFiltering } from "./arrayFiltering";

export function findArr(searchValue: string, arr: FilterObject[], filteringValues: string[]) {

    const toArr = arr.find((item) => item.from.name.trim() === searchValue.trim())?.to;

    if(filteringValues.length && toArr?.length) {
        const arr = arrayFiltering(toArr, filteringValues);
        return arr;
    }

    
    return toArr;
}
