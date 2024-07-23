import {Component} from 'react'
import Cookies from 'js-cookie'
import ProfilePage from '../profilePage'

class UserProfile extends Component {
  state = {userDetails: ''}
  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getUserDetails(id)
  }

  getUserDetails = async id => {
    const token = Cookies.get('jwt_token')
    const userApiUrl = ` https://apis.ccbp.in/insta-share/users/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(userApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const eachUser = data.user_details
      const formatedData = {
        id: eachUser.id,
        userId: eachUser.user_id,
        userName: eachUser.user_name,
        profilePic: eachUser.profile_pic,
        followersCount: eachUser.followers_count,
        followingCount: eachUser.following_count,
        userBio: eachUser.user_bio,
        postsCount: eachUser.posts_count,
        posts: eachUser.posts,
        stories: eachUser.stories,
      }
      console.log(formatedData)
      this.setState({userDetails: formatedData})
    } else {
      console.log('failed')
    }
  }

  render() {
    const {userDetails} = this.state
    console.log(userDetails.stories)
    return (
      <div className="user-profile-container">
        <ProfilePage profileDetails={userDetails} />
      </div>
    )
  }
}

export default UserProfile
