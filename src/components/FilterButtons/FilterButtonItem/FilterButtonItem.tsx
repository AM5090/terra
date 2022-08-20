interface IFilterButtonProps {
    catigoryType: string[],
    catigoryName: string,
    id: string,
    active: string,
    setActive: (value: string) => void
}

export function FilterButtonItem({catigoryType, catigoryName, id, active, setActive}: IFilterButtonProps) {

    function handleClick(event: any) {
        console.log(catigoryType);
        setActive(event.target.value);
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