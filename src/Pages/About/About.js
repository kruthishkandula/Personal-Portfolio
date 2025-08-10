import React from 'react';
import CheckoutButton from '../../Components/Button/CheckoutButton';
import DownloadButton from '../../Components/Button/DownloadButton';
import Timeline from './TimeLineContainer';

function TimelineJourneyScreen() {


  return (
    <div className='my-20 py-0'>
      <Timeline />
      <div className='fixed right-[8%] bottom-[10%] flex flex-col justify-between ' >
        <CheckoutButton />
        <div style={{ marginTop: '10px' }} >
          <DownloadButton />
        </div>
      </div>
    </div>
  )
}

export default TimelineJourneyScreen
