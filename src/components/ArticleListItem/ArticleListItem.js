import React from 'react';

import './ArticleListItem.css';

const articleListItem = (props) => (
    <div className="grid-x grid-margin-x grid-padding-y article-list-item">
        <div className="cell small-12 medium-4 article-list-item__info-container">
            <h2 className="h3 secondary-color">{props.title}</h2>
            {props.children}
        </div>
        <div className="cell small-12 medium-6">
            <img src={props.img} alt={props.title}/>
        </div>
    </div>
);

export default articleListItem;