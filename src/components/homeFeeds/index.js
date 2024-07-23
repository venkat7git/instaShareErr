import {Link} from 'react-router-dom'

import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import {FcLike} from 'react-icons/fc'

import './index.css'

const HomeFeed = props => {
  const {eachPostDetails} = props
  const {
    postId,
    userId,
    userName,
    profilePic,
    postDetails,
    likesCount,
    comments,
    createdAt,
  } = eachPostDetails

  const {imageUrl, caption} = postDetails
  const iconSize = 20

  return (
    <li className="post-item">
      <div className="profile-container">
        <img className="profile-image" src={profilePic} alt="profile image" />
        <Link to={`/userProfile/${userId}`} className="link">
          <p className="p-name">{userName}</p>
        </Link>
      </div>
      <img className="post-image" src={imageUrl} alt="post image" />
      <div className="post-details-container">
        <div className="icons-container">
          <button type="button" className="icon-button">
            <AiOutlineHeart size={iconSize} />
          </button>
          <button type="button" className="icon-button">
            <FaRegComment size={iconSize} />
          </button>
          <button type="button" className="icon-button">
            <BiShareAlt size={iconSize} />
          </button>
        </div>
        <div className="likes-comments-container">
          <p className="likes-para">{likesCount} likes</p>
          <p className="post-disc">{caption}</p>
          <ul className="comments-list">
            {comments.map(eachComment => (
              <li key={eachComment.userId} className="comment">
                <p>
                  <span className="user-name">{eachComment.userName}</span>{' '}
                  {eachComment.comment}
                </p>
              </li>
            ))}
          </ul>
          <p className="created-time">{createdAt}</p>
        </div>
      </div>
    </li>
  )
}

export default HomeFeed
