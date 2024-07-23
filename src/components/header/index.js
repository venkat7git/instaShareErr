import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import {IoSearchOutline} from 'react-icons/io5'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
  }
  return (
    <div className="header-main-container">
      <div className="header-container">
        <div className="logo-section">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dbb5puzve/image/upload/v1721627408/logo_hijgip.png"
            alt="website logo"
          />
          <h1 className="website-header">Insta Share</h1>
        </div>
        <div className="search-options-search">
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search Caption"
            />
            <button className="search-button">
              <IoSearchOutline color={'#989898'} />
            </button>
          </div>
          <div className="options-section">
            <Link to="/" className="link">
              <p className="options-para">Home</p>
            </Link>
            <Link to="/profile" className="link">
              <p className="options-para">Profile</p>
            </Link>
            <button onClick={onClickLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
