import React from 'react';
import ArticleListItem from '../../components/ArticleListItem/ArticleListItem';

const blog = (props) => (
    <React.Fragment>
        <h1>Blog</h1>

        <ArticleListItem publishDate="01-01-2018"
                        title="Clean code Part 3"
                        info1="Clean code part 3 is all about writing effective name 
                            of the function, its behaviour and lots of other interesting stuff" />

        <ArticleListItem publishDate="01-01-2018"
                            title="Clean code Part 2"
                            info1="Clean code part 3 is all about writing effective name 
                                of the function, its behaviour and lots of other interesting stuff" />

        <ArticleListItem publishDate="01-01-2018"
                                title="Clean code Part 1"
                                info1="Clean code part 3 is all about writing effective name 
                                    of the function, its behaviour and lots of other interesting stuff" />

    </React.Fragment>
    
);

export default blog;