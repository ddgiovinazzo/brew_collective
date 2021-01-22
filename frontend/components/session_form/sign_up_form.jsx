import React from "react";

class SignUp extends React.Component {

    constructor(props) {
        super(props)
        this.year = ''
        this.month= ''
        this.day = ''
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: '',
            location: '',
            country: '',
            first_name: '',
            last_name: '',
            birthday: ''
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

            if(this.confirmPassword()){     
                signup(this.state)
            }else{
                this.props.addError(['Passwords do not match.']) 
            }
    }


    handleInput(type) {
        return (e) => (

            this.setState({
                [type]: e.target.value
            })
        )
    }

    handleBirthday(type) {
        return (e) => {
            this[type] = e.target.value

           return this.setState({
                birthday: `${this.year}-${this.month}-${this.day}`
           })
        }
    }

    confirmPassword(){
        const confirmPassword = document.getElementById('confirmPassword')
        return confirmPassword.value === this.state.password      
    }

    redirect(e) {
        e.stopPropagation()
    }

    renderErrors() {
        return (

            <div className='errors-container-sign-up'>
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

    render() {
        const years = []
        for (let i = 1999; i >= 1900 ; i--) {
            years.push(
                <option key={`year${i}`}value={i}>{`${i}`}</option>
            )        
        }

        const months = []
        for (let i = 1; i <= 12 ; i++) {
            months.push(
                <option key={`months${i}`}value={i}>{i < 10 ?`0${i}` : `${i}`}</option>
            )        
        }
        
        const days = []
        for (let i = 1; i <= 31 ; i++) {
            days.push(
                <option key={`days${i}`}value={i}>{i < 10 ?`0${i}` : `${i}`}</option>
            )        
        }

        return (
            





            <div className='background-img'>
                <div onClick={() => {
                    this.props.history.push('/')
                    }} className='darken-background'>
                    <div onClick={this.redirect.bind(this)} >

                        <form className={!this.props.errors.length ? 'sign-up-form' : 'sign-up-form sign-up-form-errors'} onSubmit={this.handleSubmit}>
                            <span id='kegger-logo-container'><img id="kegger-logo" src={window.kegger} alt="" /></span>
                            {this.props.errors.length > 0 ? this.renderErrors() : null}


                            <div className='input-rows'>
                                <p><strong>All fields below are required unless specified.</strong></p>

                                <div className='input-col-1'>
                                    <div className="input-container">
                                        <i className="fas fa-user icon"></i>
                                        <input className='form-input' type="text" placeholder='Username' onChange={this.handleInput('username')} />
                                    </div>

                                    <div className="input-container">
                                        <i className="fas fa-envelope icon" ></i>
                                        <input className='form-input' type="text" placeholder='Email' onChange={this.handleInput('email')} />
                                    </div>
                                </div>
                                <p><strong>Avoid using common words and include a mix of letters and numbers.</strong></p>

                                <div className='input-col-1'>

                                    <div className="input-container">
                                        <i className="fas fa-lock icon"></i>
                                        <input className='form-input' type="password" placeholder='Password' onChange={this.handleInput('password')} />
                                    </div>


                                    <div className="input-container">
                                        <i className="fas fa-lock icon"></i>
                                        <input id='confirmPassword' className='form-input' type="password" placeholder='Repeat Password'/>
                                    </div>
                                </div>

                            </div>

                            <div className='input-col-2'>
                                <div className='input-col-1 input-col-3'>
                                    <div className="input-container-secondary">
                                        <input className='form-input-secondary' type="text" placeholder='First Name' onChange={this.handleInput('first_name')} />
                                    </div>

                                    <div className="input-container-secondary">
                                        <input className='form-input-secondary' type="text" placeholder='Last Name' onChange={this.handleInput('last_name')} />
                                    </div>

                                </div>

                                <div className='input-col-1 input-col-3'>
                                    <div className="input-container-secondary">
                                        <input className='form-input-secondary' type="text" placeholder='Location (Optional)' onChange={this.handleInput('location')} />
                                    </div>

                                    <div className="input-container-secondary">
                                        <select onChange={this.handleInput('gender')} className="select" >
                                            <option className='first-option' >Gender (Optional)</option>
                                            <option value="Male" >Male</option>
                                            <option value="Female">Female</option>
                                            <option value="">Prefer not to Say</option>
                                        </select>
                                    </div>


                                </div>
                                <div className='input-col-1 input-col-3' >

                                    <div className="input-container-secondary">
                                    
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
                                    </div>

                                    <div className="input-container">

                                        <p className="input-p">Birthday:</p>
                                        <div className='form-birthday-container'>
                                            <select onChange={this.handleBirthday('month')} className='form-birthday' type="select" >
                                            <option value={null}>MM</option>
                                                {months}
                                            </select>
                                            <select onChange={this.handleBirthday('day')} className='form-birthday' type="select" >
                                            <option value={null}>DD</option>

                                                {days}
                                            </select>
                                            <select onChange={this.handleBirthday('year')} className='form-birthday' type="select" >
                                                <option value={null}>YYYY</option>
                                                {years}
                                            </select>
                                        </div >
                                    </div>
                                </div>
                            </div>




                            <button className='form-submit'>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>


        
        )
    }

}

export default SignUp