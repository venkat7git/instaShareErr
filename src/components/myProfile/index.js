import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../header'
import ProfilePage from '../profilePage'

import './index.css'

class MyProfile extends Component {
  state = {profileDetails: []}
  componentDidMount() {
    this.getProfiledetails()
  }

  getProfiledetails = async () => {
    const token = Cookies.get('jwt_token')
    const profileUrl = 'https://apis.ccbp.in/insta-share/my-profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(profileUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formatedData = {
        id: data.profile.id,
        userId: data.profile.user_id,
        userName: data.profile.user_name,
        profilePic: data.profile.profile_pic,
        followersCount: data.profile.followers_count,
        followingCount: data.profile.following_count,
        userBio: data.profile.user_bio,
        posts: data.profile.posts,
        postsCount: data.profile.posts_count,
        stories: data.profile.stories,
      }
      this.setState({profileDetails: formatedData})
    } else {
      console.log('failed')
    }
  }

  render() {
    const {profileDetails} = this.state
    return (
      <>
        <Header />
        <div className="profile-main-container">
          <ProfilePage profileDetails={profileDetails} />
        </div>
      </>
    )
  }
}

export default MyProfile
