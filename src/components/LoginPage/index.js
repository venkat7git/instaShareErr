import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'
class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  successResponse = jwtToken => {
    Cookies.set('jwt_token', jwtToken)
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.successResponse(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, errorMsg} = this.state

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="main-container">
        <div className="image-container">
          <img
            className="website-image"
            src="https://res.cloudinary.com/dbb5puzve/image/upload/v1721627377/loginImage_k5jfcn.png"
            alt="website image"
          />
        </div>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dbb5puzve/image/upload/v1721627408/logo_hijgip.png"
            alt="website logo"
          />
          <h1 className="logo-heading">Insta Share</h1>
          <div className="username-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              value={username}
              onChange={this.onChangeUsername}
              className="user-input"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              value={password}
              onChange={this.onChangePassword}
              className="user-input"
              id="password"
              type="password"
              placeholder="Password"
            />
            <p className="error-msg">{errorMsg}</p>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
