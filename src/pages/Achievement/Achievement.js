import React from 'react';
import ArticleListItem from '../../components/ArticleListItem/ArticleListItem';

import yahooHackImg from '../../assets/images/achievements/yahoo-hackathon.jpg';
import accessibilityImg from '../../assets/images/achievements/accessibility-hackathon.jpg';
import hackedIo from '../../assets/images/achievements/hackedio-hackathon.jpg';


const achievement = (props) => (
    <React.Fragment>
        <h1>Achievement</h1>

        <ArticleListItem img={yahooHackImg}
                        title="Yahoo Hack Europe 2013 - Road buddy"
                        info1="Grand Prize and Firefox OS Winner" />

        <ArticleListItem img={accessibilityImg}
                        title="Accessibility Hack UK 2013 - Visual Eyes"
                        info1="2nd Prize winner" />

        <ArticleListItem img={hackedIo}
                        title="Hacked.io 2013 - Smart shop asst"
                        info1="Firefox OS Winner" />
    </React.Fragment>
    
);

export default achievement;