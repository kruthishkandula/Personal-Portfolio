import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { BounceLeft } from '../../Components/Button/Animated'
import Loader from '../../Components/Loader'
import ProjectsData from '../../Data/ProjectsData'
import '../../Styles/./MyWorks.css'
import useHttpService from '../../services/http'
import ProjectCard from './ProjectCard'
import ProjectDetailView from './ProjectDetailView'

const MyWorks = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedTechnology, setSelectedTechnology] = useState(null)
  const [showProjectDetail, setShowProjectDetail] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [Projects, setProjects] = useState([])

  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  const { get } = useHttpService()
  const renderAfterCalled = useRef(false)

  const handleProjectClick = project => {
    setSelectedProject(project)
    setShowProjectDetail(true)
  }

  const handleTechnologyClick = technology => {
    setIsLoading(true)
    setSelectedTechnology(technology)
    setTimeout(() => {
      setIsLoading(false)
    }, 200)
  }

  const handleCloseProjectDetail = () => {
    setShowProjectDetail(false)
    setSelectedProject(null)
  }

  const filteredProjects = selectedTechnology
    ? Projects.filter(project => project.technology === selectedTechnology)
    : Projects

  const fetchProjects = async () => {
    console.log(`========FETCH PROJECTS CALLED===================`)
    try {
      const response = await get('/api/projects/getProjects')
      console.log({ nodeProjects: response.data })
      setProjects(response.data)
    } catch (error) {
      // alert(`Results Not Found $404`)
      setProjects(ProjectsData)
    }
  }

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetchProjects()
    }
    renderAfterCalled.current = true
  })

  return (
    <div ref={ref}>
      {inView ?
        <div className='container  min-h-full my-20 '>
          {/* <h1 className='display-4 font-weight-bold mb-4'>My Works</h1> */}
          <div className='d-flex flex-wrap align-items-center mb-4 w-full'>
            <BounceLeft style={{ animationDelay: `0s`, animationDuration: '0.5s' }}>
              <button
                className={`btn mr-2 mb-2 ${selectedTechnology === null ? 'btn-primary' : 'btn-light'
                  }`}
                disabled={isLoading}
                onClick={() => handleTechnologyClick(null)}
              >
                All
              </button>
            </BounceLeft>
            {Array.from(new Set(Projects.map(project => project.technology))).map(
              (technology, index) => (
                <BounceLeft key={technology} style={{ animationDelay: `0s`, animationDuration: '0.5s' }} >
                  <button
                    disabled={isLoading}
                    className={`btn mr-2 mb-2 ${selectedTechnology === technology ? 'btn-primary' : 'btn-light'
                      }`}
                    onClick={() => handleTechnologyClick(technology)}
                  >
                    {technology}
                  </button>
                </BounceLeft>
              )
            )}
          </div>

          {isLoading ||
            (Projects.length === 0 && (
              <div className='mt-5 self-center '>
                <Loader />
              </div>
            ))}

          {!isLoading && (
            <div className='row mb-4'>
              {filteredProjects.map(project => (
                <div
                  key={project.project_id}
                  className=' col-12 col-sm-6 col-md-6 col-xs-12  col-lg-4 col-xl-3 mb-4'
                >
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                </div>
              ))}
            </div>
          )}
          {selectedProject && (
            <ProjectDetailView
              selectedProject={selectedProject}
              show={showProjectDetail}
              handleClose={handleCloseProjectDetail}
            />
          )}
        </div>
        : null}
    </div>
  )
}

export default MyWorks
