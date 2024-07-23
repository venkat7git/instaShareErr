import {Route, Redirect, Switch} from 'react-router-dom'

import Counter from './components/Counter'
import Login from './components/LoginPage'
import Home from './components/homePage'
import ProtectedRoute from './components/protectedRoute/'
import MyProfile from './components/myProfile'
import UserProfile from './components/userProfile'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/profile" component={MyProfile} />
    <ProtectedRoute exact path = "/userProfile/:id" component={UserProfile}/>
  </Switch>
)

export default App
