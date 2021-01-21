import React from "react";
import { Link, Redirect} from 'react-router-dom';

class SignIn extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        if(this.props.errors.length > 0){
            this.props.clearErrors()
        }
    }

    handleSubmit(e){
        const {login} = this.props
        e.preventDefault()
        login(this.state)
    }

    handleInput(type){
        return(e) => (

            this.setState({
                [type]: e.currentTarget.value
            })
        )
    }

    redirect(){
        return <Redirect to="/" />
    }

    renderErrors() {
        return(
          <ul className='error'>
            {this.props.errors.map((error, i) => (
              <li  key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

      redirect(e){
        e.stopPropagation()
    }

    render(){
        return(
            <div onClick={() => {
                this.props.history.push('/')
           }} className='session-bg'>
                <div onClick={this.redirect.bind(this)} className="sign-in-form">
                <form onSubmit={this.handleSubmit}>
                    {this.props.errors.length > 0 ? this.renderErrors() : null}
                       <img src={window.kegger} alt=""/>
                        <div className="input-container">
                            <i className="fas fa-user icon"></i>
                            <input type="text"  placeholder='Username' onChange={this.handleInput('username')}/>
                        </div>
                        
                        <div className="input-container">
                            <i className="fas fa-lock icon"></i>
                            <input type="password" placeholder='Password' onChange={this.handleInput('password')}/>
                        </div>

                    <button>Sign In</button>
                </form>
                    <button onClick={()=>this.props.login({username: 'demo', password: 'password'})} className='demo-btn'>Demo Sign In</button>
                    <p className="sign-up-p">New around here? <Link to='/signup'>Sign up!</Link></p>
                </div>

            </div>
        )
    }

}

export default SignIn