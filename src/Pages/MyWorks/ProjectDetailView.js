import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

export default function ProjectDetailView({
  selectedProject,
  show,
  handleClose
}) {
  // const descriptionLength = 20
  // const [readMore, setReadMore] = useState(false)
  const [showMore, setShowMore] = useState(false)

  console.log(selectedProject)

  // useEffect(() => {
  //   selectedProject.description.length > descriptionLength
  //     ? setReadMore(true)
  //     : setShowMore(true)
  // }, [readMore])

  return (
    <Modal show={show} onHide={handleClose} centered animation size='sm'  >
      <Modal.Header closeButton>
        <Modal.Title>{selectedProject.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={selectedProject.imageUrl}
          alt={selectedProject.name}
          className='w-full h-50 mb-3'
        />
        <p className='text-base mb-3'>
          {showMore
            ? selectedProject.description
            : selectedProject.description.split(' ').slice(
              0,
              parseInt(selectedProject.description.split(' ').length/2)
            ).join(' ')}
        </p>
        {/* {readMore && ( */}
        <button
          className='btn btn-default
             d-flex items-center'
          onClick={() => {
            setShowMore(!showMore)
          }}
        >
          {showMore ? 'Show Less' : 'Show More'}
          {showMore ? <AiFillCaretUp color='red' size={25} /> : <AiFillCaretDown color='green' size={25} />}
        </button>
        {/* )} */}
      </Modal.Body>
      <Modal.Footer>
        <a
          href={selectedProject.link}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-primary btn-sm outline-none '
        >
          View Project
        </a>
        <Button className='custom-close-button' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
