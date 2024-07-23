import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../header'
import StoriesSlider from '../slider'
import HomeFeed from '../homeFeeds'

import './index.css'

class Home extends Component {
  state = {postsList: []}

  componentDidMount() {
    this.getPostsdata()
  }

  getPostsdata = async () => {
    const token = Cookies.get('jwt_token')
    const postsUrl = 'https://apis.ccbp.in/insta-share/posts'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(postsUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formatedData = data.posts.map(eachPost => ({
        postId: eachPost.post_id,
        userId: eachPost.user_id,
        userName: eachPost.user_name,
        profilePic: eachPost.profile_pic,
        postDetails: {
          imageUrl: eachPost.post_details.image_url,
          caption: eachPost.post_details.caption,
        },
        likesCount: eachPost.likes_count,
        comments: eachPost.comments.map(eachComment => ({
          userName: eachComment.user_name,
          userId: eachComment.user_id,
          comment: eachComment.comment,
        })),
        createdAt: eachPost.created_at,
      }))
      this.setState({postsList: formatedData})
    } else {
      console.log('failure')
    }
  }

  render() {
    const {postsList} = this.state

    return (
      <>
        <Header />
        <div className="home-container">
          <div className="slidebar-container">
            <StoriesSlider />
          </div>

          <ul className="posts-container">
            {postsList.map(eachPost => (
              <HomeFeed eachPostDetails={eachPost} key={eachPost.postid} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Home
