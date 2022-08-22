import { useState } from 'react';
import { useaAppSelector } from '../../store/hook';
import { FilterButtonItem } from './FilterButtonItem/FilterButtonItem';
import './FilterButtons.scss';

interface IFilterButtonsProps {
    filteringValues: (value: string[]) => void;
}

export function FilterButtons({filteringValues}: IFilterButtonsProps) {

    const categories = useaAppSelector(state => state.categories.categories);
    const [activButton, setActivButton] = useState(categories[0].categoryId);

    return (
        <div className='filterButtons'>
            {categories.map((item) => (
                <FilterButtonItem key={item.categoryId}
                    catigoryType={item.categoryType}
                    catigoryName={item.categoryName}
                    id={item.categoryId}
                    active={activButton}
                    setActive={setActivButton}
                    filteringValues={filteringValues}
                />
            ))}
        </div>
    );
}

/*

<label htmlFor={item.categoryId} key={item.categoryId}>
    <input id={item.categoryId}
    type="radio" 
    name="categories" 
    value={item.categoryId}
    checked={valueRadio === item.categoryId ? true : false}
    onChange={chengeValue} />
    <span className='filterButton'>{item.categoryName}</span>
</label>





<div>
    <label htmlFor='id1'>
        <input id='id1' type='radio' defaultChecked className='radio_shadow' name='name1'/>
        <span className='filterButton' >все</span>
    </label>
    <label htmlFor='id2'>
        <input id='id2' type='radio' className='radio_shadow' name='name1'/>
        <span className='filterButton' >валюты</span>
    </label>
    <label htmlFor='id3'>
        <input id='id3' type='radio' className='radio_shadow' name='name1'/>
        <span className='filterButton' >банки</span>
    </label>
</div>





*/