import React from 'react';
import ArticleListItem from '../../components/ArticleListItem/ArticleListItem';

import nationalTrust from '../../assets/images/work/national-trust.jpg';

const work = (props) => (
    <React.Fragment>
        <h1>Work</h1>

        <ArticleListItem img={nationalTrust}
                        publishDate="01-01-2018"
                        title="National Trust"
                        info1="National Trust site description"
                        info2="Accessibility AA Require JS" />

        <ArticleListItem img={nationalTrust}
                         title="National Trust"
                         info1="National Trust site description"
                         info2="Accessibility AA Require JS" />

        <ArticleListItem img={nationalTrust}
                         title="National Trust"
                         info1="National Trust site description" />

        <ArticleListItem title="National Trust"
                         info1="National Trust site description National Trust site description National Trust site description"
                         info2="Accessibility AA Require JS" />

        <ArticleListItem title="National Trust"
                         info1="National Trust site description National Trust site description National Trust site description"
                         info2="Accessibility AA Require JS" />

        <ArticleListItem img={nationalTrust}
                         title="National Trust"
                         info1="National Trust site description" />
        
    </React.Fragment>
);

export default work;