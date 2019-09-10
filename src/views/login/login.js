import  React,{Component} from 'react';
import axios from 'axios';
import img from '../../static/assets/img/default.png';
import './login.css';

export default class Login extends  Component {
  state={
    username:'',
    password:'',
  };
  handleOver=()=>{
    let time=0;
    this.img.classList.add('shake');
    this.img.classList.add('animated');
    let id=window.setInterval(()=>{
      time++;
      if(time==5){
        if(this.img !=null){
          this.img.classList.remove('shake');
          this.img.classList.remove('animated');
        }
        clearInterval(id);
      }
    },1000)
  };
  handleUser=(event)=>{
    this.setState({
      username:event.target.value
    })
  };
  handlePass=(event)=>{
    this.setState({
      password:event.target.value
    })
  };
  handleSubmit=(event)=>{
    event.preventDefault();
    const {username,password}=this.state;
    if(username!=''&&password!=''){
      let url=`http://localhost:5000/login?username=${username}&password=${password}`;
      axios.get(url)
      .then((response)=>{
        console.log(response);
        sessionStorage.setItem('user',JSON.stringify(response.data));
        this.props.history.replace({pathname:'/home'});
      })
      .catch(error=>{
        console.log(error);
      })
    }
  };
  render() {
    return (
        <div className='login-box'>
          <div className="login">
            <div className="login-top">
              <img src={require('../../static/assets/img/default.png')} className='avatar' onMouseOver={this.handleOver} ref={img=>this.img=img}/>
              <form className='form' onSubmit={this.handleSubmit}>
                <input type="text" placeholder='请输入用户名' value={this.state.username}  onChange={this.handleUser}/>
                <input type="password" placeholder='请输入密码' value={this.state.password}  onChange={this.handlePass}/>
                <div className="login_btn">
                  <input type="submit" value="登陆"/>
                </div>
              </form>
            </div>
            <div className="login-bottom">
              <h3>Welcome</h3>
            </div>
          </div>
        </div>
    );
  }
}