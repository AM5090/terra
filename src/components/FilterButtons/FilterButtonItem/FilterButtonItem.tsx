interface IFilterButtonProps {
    catigoryType: string[],
    catigoryName: string,
    id: string,
    active: string,
    setActive: (value: string) => void,
    filteringValues: (value: string[]) => void
}

export function FilterButtonItem({catigoryType, catigoryName, id, active, setActive, filteringValues}: IFilterButtonProps) {

    function handleClick(event: any) {
        setActive(event.target.value);
        filteringValues(catigoryType);
    }

    return (
        <button value={id}
            onClick={handleClick}
            className={active === id ? 'active': ''}
        >
            {catigoryName}
        </button>
    );
}