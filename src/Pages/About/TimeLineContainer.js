import { useEffect, useRef, useState } from 'react'
import Loader from '../../Components/Loader'
import useHttpService from '../../services/http'
import '../../Styles/timeline.css'
import TimelineItem from './TimeLineItem'
import timelineData from '../../Data/timelineData'

const Timeline = () => {
  const [JourneyData, setJourneyData] = useState([])
  const { get } = useHttpService()
  const renderAfterCalled = useRef(false)

  const fetchJourney = async () => {
    try {
      const response = await get('/api/journeys/getJourneys')
      console.log(response.data)
      setJourneyData(response.data)
    } catch (error) {
      // alert('Error: ', error.message)
      setJourneyData(timelineData)
    }
  }

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchJourney()
    }
    renderAfterCalled.current = true
  })

  return (
    <div>
      {JourneyData.length > 0 && (
        <div className='timeline-container my-0'>
          {JourneyData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      )}
      {JourneyData.length === 0 && (
        <div className=' my-5'>
          <Loader />
        </div>
      )}
    </div>
  )
}
export default Timeline
