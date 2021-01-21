import React from "react";

class SignUp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: '',
            location: '',
            country: '',
            first_name: '',
            last_name: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.errors.length > 0) {
            this.props.clearErrors()
        }
    }

    handleSubmit(e) {
        const { signup } = this.props
        e.preventDefault()
        signup(this.state)
    }


    handleInput(type) {
        return (e) => (

            this.setState({
                [type]: e.target.value
            })
        )
    }

    redirect(e) {
        e.stopPropagation()
    }

    renderErrors() {
        return (
            <ul className='error'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div onClick={() => {
                this.props.history.push('/')
            }} className='session-bg'>
                <div onClick={this.redirect.bind(this)}
                    className="sign-up-form">

                    <form onSubmit={this.handleSubmit}>




                        {this.props.errors.length > 0 ? this.renderErrors() : <img src={window.kegger} alt="" />}


                        <div className='input-rows'>
                            <div className='input-col-1'>
                                <div className="input-container">
                                    <i className="fas fa-user icon"></i>
                                    <input type="text" placeholder='Username' onChange={this.handleInput('username')} />
                                </div>

                                <div className="input-container">
                                    <i className="fas fa-envelope icon" ></i>
                                    <input type="text" placeholder='Email' onChange={this.handleInput('email')} />
                                </div>

                                <div className="input-container">
                                    <i className="fas fa-lock icon"></i>
                                    <input type="password" placeholder='Password' onChange={this.handleInput('password')} />
                                </div>

                                <label>
                                    <select onChange={this.handleInput('country')} className="select" >
                                        <option className='first-option'>Select Your Country</option>
                                        <option value="USA" >USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Russia">Russia</option>
                                        <option value="South Korea">South Korea</option>
                                    </select>
                                </label>
                            </div>

                            <div className='input-col-2'>
                                <div className="input-container">
                                    <i className="fas fa-beer icon"></i>
                                    <input type="text" placeholder='First Name' onChange={this.handleInput('first_name')} />
                                </div>

                                <div className="input-container">
                                    <i className="fas fa-beer icon"></i>
                                    <input type="text" placeholder='Last Name' onChange={this.handleInput('last_name')} />
                                </div>

                                <div className="input-container">
                                    <i className="fas fa-beer icon"></i>
                                    <input type="text" placeholder='Location(Optional)' onChange={this.handleInput('location')} />
                                </div>

                                <label>
                                    <select onChange={this.handleInput('gender')} className="select" >
                                        <option className='first-option' >Gender(Optional)</option>
                                        <option value="Male" >Male</option>
                                        <option value="Female">Female</option>
                                        <option value="">Prefer not to Say</option>
                                    </select>
                                </label>
                            </div>
                        </div>











                        <button>Create Account</button>
                    </form>
                </div>
            </div>


        )
    }

}

export default SignUp