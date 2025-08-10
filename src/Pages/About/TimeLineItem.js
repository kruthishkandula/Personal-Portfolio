import { BounceLeft } from '../../Components/Button/Animated'
import '../../Styles/timeline.css'
import { convertStringToObject } from '../../Utils/Common'

const TimelineItem = ({ data: journey, key }) => {
  let data = convertStringToObject(journey)
  let dealy = data.id * 0.1


  return (
    <BounceLeft className='timeline-item' style={{ animationDelay: `${dealy}s` }} >
      <div className='timeline-item-content w-96'>
        <span
          className='tag'
          style={{ background: data.category && data.category['color'] }}
        >
          {data.category && data.category.tag}
        </span>
        <time>{data.date}</time>
        <p>{data.text}</p>
        {data.link && (
          <a href={data.link.url} target='_blank' rel='noopener noreferrer'>
            {data.link.text}
          </a>
        )}
        <span className='circle' />
      </div>
    </BounceLeft>
  )
}


export default TimelineItem
