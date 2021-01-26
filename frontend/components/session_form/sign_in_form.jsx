import React from "react";
import { Link, Redirect } from 'react-router-dom';

class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.errors.length > 0) {
            this.props.clearErrors()
        }
    }

    handleSubmit(e) {
        const { login } = this.props
        e.preventDefault()
        login(this.state)
    }

    handleInput(type) {
        return (e) => (

            this.setState({
                [type]: e.currentTarget.value
            })
        )
    }

    redirect() {
        return <Redirect to="/" />
    }

    renderErrors() {
        return (
            <div className='errors-container-sign-in'>

                <ul className='errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    redirect(e) {
        e.stopPropagation()
    }

    render() {
        return (
            <div >
            <img onClick={() => {
                    this.props.history.push('/')
                }} className='background-img' className = 'background-img' src={window.bg} alt="" />



                    <div onClick={this.redirect.bind(this)} className={!this.props.errors.length ? 'sign-in-form' : 'sign-in-form sign-in-form-errors'}>
                        <form onSubmit={this.handleSubmit}>

                            <span id='kegger-logo-container'><img id="kegger-logo" src={window.kegger} alt="" /></span>

                            {this.props.errors.length > 0 ? this.renderErrors() : null}
                            <div className="input-container-sign-in">
                                <i className="fas fa-user icon sign-up-icons"></i>
                                <input className='form-input' type="text" placeholder='Username' onChange={this.handleInput('username')} />
                            </div>

                            <div className="input-container-sign-in">
                                <i className="fas fa-lock icon sign-up-icons"></i>
                                <input className='form-input' type="password" placeholder='Password' onChange={this.handleInput('password')} />
                            </div>


                            <button className='form-submit'>Sign In</button>
                            <span className='form-submit demo-btn ' onClick={() => this.props.login({ username: 'demo', password: 'password' })} >Demo</span>

                        </form>
                        <p className="sign-up-p">New around here? <Link to='/signup'>Sign up!</Link></p>
                    </div>






            </div>

        )
    }

}

export default SignIn