import React ,{Component}from 'react'
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import {loginWithGoogle,updateUser,logout} from './actions'
class App extends Component{
  // state={user:null}
  
    responseSuccessGoogle=async(res)=>{
        this.props.loginWithGoogle(res);
    //  this.setState({user:JSON.parse(localStorage.getItem('profile'))})
    }


    componentDidMount(){
      console.log('updated')
     this.props.updateUser(); 
    }
    
    
    responseErrorGoogle=(err)=>{
      console.log(err);
     console.log('Login failed')
    }

     handleLogout=()=>{
          this.props.logout()
          console.log('loggedout')
    }
    renderUserInfo=()=>{
      if(!this.props.user.name){
         return <div>Loading...</div>
      }
      else{
        return <h1>{this.props.user.name}</h1>
      }
    }

    render(){
    return (
     <>
     {
    !this.props.user?(
       <div className="w-72 h-60 shadow-md rounded p-4 flex items-center justify-center flex-col">
         <div className="h-30 mb-4">
           <img className="h-20" src="http://www.google.com/images/icons/product/keep-512.png" alt="notes" />
           </div>
       <GoogleLogin
    clientId="740792960585-i0mn80khmv0gliqcb82pqpbsg4d6seft.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={this.responseSuccessGoogle}
    onFailure={this.responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </div>
    ):(
  <div>
      {this.renderUserInfo()}
      <button className="bg-blue-500 p-2 text-white" onClick={this.handleLogout}>logout</button>
  </div>
    )
}
  </>
    )
}
}


const mapStateToProps=(state)=>{
  return{user:state?.user?.user?.user}
}

export default connect(mapStateToProps,{loginWithGoogle,updateUser,logout})(App);

//740792960585-2d4uasquu6ddemf21i5jejkbp5o3grvk.apps.googleusercontent.com