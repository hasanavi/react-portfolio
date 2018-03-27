import React from 'react';
import ArticleListItem from '../../components/ArticleListItem/ArticleListItem';

import nationalTrust from '../../assets/images/work/national-trust.jpg';

const work = (props) => (
    <React.Fragment>
        <h1>Work</h1>

        <ArticleListItem img={nationalTrust} title="National Trust">
            <p>
                Accessibility AA
            </p>
        </ArticleListItem>
        
    </React.Fragment>
);

export default work;