interface DefaultArr {
    code: string,
    name: string
}

export function arrayFiltering(defaultArr: DefaultArr[], filteringValues: string[]) {

    if(filteringValues.length){
        const newArr = filteringValues.map((itemValues) => {
            const filteringArr = defaultArr.filter((item) => {
                if(itemValues.trim() === item.code.trim()) {
                    console.log('item', item);
                    return item;
                }
            });
            console.log('filteringArr', filteringArr);
            return filteringArr[0];
            
        });
        console.log('newArr', newArr);
        return newArr;
    }
    return defaultArr;
};

/*



const newArr = filteringValues.map((itemValues) => {
        const filteringArr = defaultArr.filter((item) => {
            if(itemValues.trim() === item.code.trim()) {
                return item;
            }
        });

        if(filteringArr.length){
            console.log('filteringArr', filteringArr);
            return filteringArr[0];
        }
    });



*/