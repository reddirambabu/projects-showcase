import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ProjectCard from '../ProjectCard'
import {
  ResponsiveContainer,
  HomeContainer,
  SelectContainer,
  Options,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
  UnOrderListContainer,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    activeOption: categoriesList[0].id,
    apiStatus: apiStatusConstants.initial,
    projectsArray: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activeOption} = this.state

    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${activeOption}`
    const options = {method: 'GET'}

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const formattedData = data.projects.map(eachProject => ({
        id: eachProject.id,
        name: eachProject.name,
        imageUrl: eachProject.image_url,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        projectsArray: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeOption = event => {
    this.setState({activeOption: event.target.value}, this.getProducts)
  }

  renderSearchContainer = () => {
    const {activeOption} = this.state

    return (
      <SelectContainer value={activeOption} onChange={this.onChangeOption}>
        {categoriesList.map(eachOption => (
          <Options key={eachOption.id} value={eachOption.id}>
            {eachOption.displayText}
          </Options>
        ))}
      </SelectContainer>
    )
  }

  retryGetProject = () => {
    this.getProducts()
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <FailureButton onClick={this.retryGetProject}>Retry</FailureButton>
    </FailureContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#102130" height={100} width={100} />
    </LoaderContainer>
  )

  renderApiBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  renderSuccessView = () => {
    const {projectsArray} = this.state
    console.log(projectsArray)
    return (
      <UnOrderListContainer>
        {projectsArray.map(eachProject => (
          <ProjectCard key={eachProject.id} projectDetails={eachProject} />
        ))}
      </UnOrderListContainer>
    )
  }

  render() {
    return (
      <>
        <Header />
        <ResponsiveContainer>
          <HomeContainer>
            {this.renderSearchContainer()}
            {this.renderApiBasedOnApiStatus()}
          </HomeContainer>
        </ResponsiveContainer>
      </>
    )
  }
}

export default Home
