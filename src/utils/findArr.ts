import { FilterObject } from "../store/filterSlice";


export function findArr(searchValue: string, arr: FilterObject[]) {
    return arr.find((item) => item.from.name.trim() === searchValue.trim())?.to;
}
