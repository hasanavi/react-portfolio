import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const twitterTimeline = (props) => (
    <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: props.userName
    }}
    options={{
      username: props.userName,
      height: '350'
    }}
  />
);

export default twitterTimeline;