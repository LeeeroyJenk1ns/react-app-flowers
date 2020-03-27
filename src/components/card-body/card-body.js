import React from 'react';

import './card-body.css';

const CardBody = ({item, onDeleted}) => {
    return (
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <button className="btn btn-outline-info btn-sm">
                Выбрать
            </button>
            <button
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
                Убрать
            </button>
        </div>
    );
}

export default CardBody;