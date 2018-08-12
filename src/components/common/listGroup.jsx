import React from 'react';

const Listgroup = (props) => {
    const { items, textProperty, valueProperty } = props;

    return (
        <ul className="list-group">
            <li className="list-group-item active">Genre</li>
            {items.map(item => (
                <li key={item[valueProperty]} className="list-group-item">
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
