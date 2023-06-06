import {ProjectCardItem, ProjectImage, ProjectName} from './styledComponents'

const ProjectCard = props => {
  const {projectDetails} = props
  const {name, imageUrl} = projectDetails

  return (
    <ProjectCardItem>
      <ProjectImage src={imageUrl} alt={name} />
      <ProjectName>{name}</ProjectName>
    </ProjectCardItem>
  )
}

export default ProjectCard
