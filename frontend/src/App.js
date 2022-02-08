import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import {loginWithGoogle,updateUser,logout} from './actions'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
const App = () => {

  const dispatch = useDispatch()
  const user = useSelector(state=>state.user?.user)

  console.log(user)
  const handleLogout =()=>{
    dispatch(logout())
  }
useEffect(()=>{
  dispatch(updateUser())
},[dispatch])

 const responseSuccessGoogle=async(res)=>{
          dispatch(loginWithGoogle(res))
        //  this.setState({user:JSON.parse(localStorage.getItem('profile'))})
        }

 const  responseErrorGoogle=(err)=>{
          console.log(err);
         console.log('Login failed')
        }

  const renderUserInfo = ()=>{
    if(user?.user?.name){
      return <h1>{user?.user?.name}</h1>
      }
    
  }

  return (
  <div>

{
    !user.user?(
       <div className="w-72 h-60 shadow-md rounded p-4 flex items-center justify-center flex-col">
         <div className="h-30 mb-4">
           <img className="h-20" src="http://www.google.com/images/icons/product/keep-512.png" alt="notes" />
           </div>
       <GoogleLogin
    clientId="740792960585-ijlmjl16sjh77e9eccd8e8nk14j1gt35.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </div>
    ):(
  <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
  </div>
    )
}
  </div>
  );
};

export default App;




//740792960585-2d4uasquu6ddemf21i5jejkbp5o3grvk.apps.googleusercontent.com