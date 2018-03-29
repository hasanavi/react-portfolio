import React from 'react';
import ArticleListItem from '../../components/ArticleListItem/ArticleListItem';

import yahooHackImg from '../../assets/images/achievements/yahoo-hackathon.jpg';
import accessibilityImg from '../../assets/images/achievements/accessibility-hackathon.jpg';
import hackedIo from '../../assets/images/achievements/hackedio-hackathon.jpg';


const achievement = (props) => (
    <React.Fragment>
        <h1>Achievement</h1>

        <ArticleListItem img={yahooHackImg}
                        title="Yahoo Hack Europe - Road buddy"
                        info1="Grand Prize and Firefox OS Winner">
            
            <a href="http://developer.yahoo.com/blogs/ydn/hack-europe-london-draws-hackers-corners-globe-000307942.html" 
                target="_blank" rel="noopener noreferrer">YDN Blog</a>
            <a href="https://www.youtube.com/watch?v=OWVmCawBA_c"
                target="_blank" rel="noopener noreferrer">Presentation Video</a>
            <a href="http://www.telegraph.co.uk/technology/news/10047029/Road-Buddy-mobile-app-plots-safe-routes-to-walk-home.html" 
                target="_blank" rel="noopener noreferrer">Telegraph Coverage</a>
        </ArticleListItem>

        <ArticleListItem img={accessibilityImg}
                        title="Accessibility Hack UK - Visual Eyes"
                        info1="2nd Prize winner">
            <a href="https://github.com/hasanavi/picture2speech" target="_blank" rel="noopener noreferrer">Application Details</a>
            <a href="http://accessibilityhack.com/" target="_blank" rel="noopener noreferrer">Official page</a>
        </ArticleListItem>

        <ArticleListItem img={hackedIo}
                        title="Hacked.io - Smart shop asst"
                        info1="Firefox OS Winner">
            <a href="https://github.com/hasanavi/smart-shop-assistant"
                target="_blank" rel="noopener noreferrer">Application details</a>
            <a href="http://www.flickr.com/photos/yahoolondoncareers/9351047352/"
                target="_blank" rel="noopener noreferrer">Photo Coverage - courtacy Yahoo</a>
            <a href="https://secure.flickr.com/photos/polyrahul/9348857703/in/set-72157634764261098"
                target="_blank" rel="noopener noreferrer">Photo Coverage - courtacy Rahul</a>
        </ArticleListItem>
    </React.Fragment>
    
);

export default achievement;