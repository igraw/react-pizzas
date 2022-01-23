import React from 'react';

function Categories({ items, onClickItems }) {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
        console.log(activeItem)
    }
    

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            key={`${name}_${index}`}
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                        >
                            {name}
                        </li>
                    ))}
            </ul>
        </div >
    )
}

export default Categories