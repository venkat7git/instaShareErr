import {Component} from 'react'
import Header from '../header'

import './index.css'

class ProfilePage extends Component {
  render() {
    const {profileDetails} = this.props
    const {
      userId,
      userName,
      profilePic,
      followersCount,
      followingCount,
      userBio,
      posts,
      postsCount,
      stories,
    } = profileDetails

    return (
      <>
        <Header />
        <div className="main-container">
          <div className="profile-main-container">
            <div className="profile-container">
              <img
                className="profile-img"
                src={profilePic}
                alt="profile image"
              />
              <div className="profile-details-container">
                <h1 className="profile-name">{userName}</h1>
                <div className="profile-counts-container">
                  <p className="profile-counts">{postsCount} posts</p>
                  <p className="profile-counts">{followersCount} followers</p>
                  <p className="profile-counts">{followingCount} following</p>
                </div>
                <p className="user-id">{userId}</p>
                <p className="profile-counts">{userBio}</p>
              </div>
              <ul className="stories-container"></ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProfilePage
