import React from 'react';

const Listgroup = (props) => {
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;

    return (
        <ul className="list-group">
            <li className="list-group-item">Genre</li>
            {items.map(item => (
                <li onClick={() => onItemSelect(item)}
                    key={item[valueProperty]}
                    className={
                        item === selectedItem ? "list-group-item active" : "list-group-item"}
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );

};
Listgroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

export default Listgroup;
