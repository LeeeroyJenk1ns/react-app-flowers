import React from 'react';

import CardBody from '../card-body';
import './card.css';

const Card = ({item, onDeleted}) => {
    const elements = item.map((i) => {
        let classNames = "col-auto card-padd";

        if (!i.active) {
            classNames += " no-active";
        }

        return (
            <div className={classNames} key={i.id}>
                <div className="card card-style">
                <img src={i.imgSrc} className="card-img-top card-logo" alt={i.title} />
                <CardBody
                    item={i}
                    onDeleted={() => onDeleted(i.id)}
                />
                </div>
            </div>
        );
    })

    return (
        <div className="row justify-content-start">
            {elements}
        </div>
    );
}

export default Card;