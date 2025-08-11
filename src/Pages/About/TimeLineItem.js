import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { BounceLeft } from '../../Components/Button/Animated'
import '../../Styles/timeline.css'
import { convertStringToObject } from '../../Utils/Common'

const TimelineItem = ({ data: journey }) => {
  const [showModal, setShowModal] = useState(false)
  let data = convertStringToObject(journey)
  let delay = data.id * 0.1

  const handleViewMore = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleLinkClick = (url, e) => {
    if (url === '#viewmore') {
      e.preventDefault()
      setShowModal(true)
      return
    }
    // For external links, let them open normally
  }

  const renderButtons = () => {
    if (!data.links && !data.link) return null

    // Handle multiple links
    if (data.links && Array.isArray(data.links)) {
      return (
        <div className="timeline-buttons">
          {data.links.map((link, index) => {
            if (link.url === '#viewmore') {
              return (
                <button
                  key={index}
                  onClick={handleViewMore}
                  className={`timeline-btn ${link.type || 'view-more'}`}
                >
                  {link.text}
                </button>
              )
            }
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`timeline-btn ${link.type || 'default'}`}
                onClick={(e) => handleLinkClick(link.url, e)}
              >
                {link.text}
              </a>
            )
          })}
        </div>
      )
    }

    // Handle single link
    if (data.link) {
      if (data.link.url === '#viewmore') {
        return (
          <div className="timeline-buttons">
            <button
              onClick={handleViewMore}
              className="timeline-btn view-more"
            >
              {data.link.text}
            </button>
          </div>
        )
      }

      return (
        <div className="timeline-buttons">
          <a
            href={data.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-btn default"
          >
            {data.link.text}
          </a>
        </div>
      )
    }

    return null
  }

  return (
    <>
      <BounceLeft className='timeline-item' style={{ animationDelay: `${delay}s` }}>
        <div className='timeline-item-content w-96'>
          <span
            className='tag'
            style={{ background: data.category && data.category['color'] }}
          >
            {data.category && data.category.tag}
          </span>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {renderButtons()}
          <span className='circle' />
        </div>
      </BounceLeft>

      {/* Modal using React Bootstrap - Same pattern as ProjectDetailView */}
      <Modal show={showModal} onHide={handleClose} centered animation size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>
            {data.category?.tag} - {data.date}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="timeline-modal-body">
            <p className="mb-3"><strong>{data.text}</strong></p>
            
            {data.details && (
              <div className="timeline-details mb-3">
                <h5>Details:</h5>
                <ul className="list-unstyled">
                  {data.details.map((detail, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {data.technologies && (
              <div className="timeline-technologies">
                <h5>Technologies Used:</h5>
                <div className="d-flex flex-wrap">
                  {data.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="badge bg-primary me-2 mb-2 p-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* Show external links in modal footer if available */}
          {data.links && data.links.filter(link => link.url !== '#viewmore').map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-sm me-2 ${
                link.type === 'primary' ? 'btn-primary' : 
                link.type === 'playstore' ? 'btn-success' :
                link.type === 'appstore' ? 'btn-dark' :
                link.type === 'github' ? 'btn-secondary' :
                'btn-outline-primary'
              }`}
            >
              {link.text}
            </a>
          ))}
          
          {data.link && data.link.url !== '#viewmore' && (
            <a
              href={data.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm me-2"
            >
              {data.link.text}
            </a>
          )}
          
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TimelineItem
