import React from "react";

class SignUp extends React.Component {

    constructor(props) {
        super(props)
        this.year = ''
        this.month = ''
        this.day = ''
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            gender: '',
            location: '',
            country: 'United States of America',
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

        signup(this.state)

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
            const date = `${this.year}-${this.month}-${this.day}`;
            return this.setState({
                birthday: date
            })
        }
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
        let date = new Date()
        date = new Date(date.getTime() + date.getTimezoneOffset() * 60000)
        for (let i = date.getFullYear() - 18; i >= date.getFullYear() - 120; i--) {
            years.push(
                <option key={`year${i}`} value={i}>{`${i}`}</option>
            )
        }

        const months = []
        for (let i = 1; i <= 12; i++) {
            months.push(
                <option key={`months${i}`} value={i}>{i < 10 ? `0${i}` : `${i}`}</option>
            )
        }

        const days = []
        for (let i = 1; i <= 31; i++) {
            days.push(
                <option key={`days${i}`} value={i}>{i < 10 ? `0${i}` : `${i}`}</option>
            )
        }

        return (

            
            <div onClick={() => { this.props.history.push('/') }} className="splash-container" >
                    {/* <img  className='background-img' className='background-img' src={window.bg} alt="" /> */}


                    <form onClick={this.redirect.bind(this)} className={!this.props.errors.length ? 'sign-up-form' : 'sign-up-form sign-up-form-errors'} onSubmit={this.handleSubmit}>
                        <span id='brew_collective-logo-container'><img id="brew_collective-logo" src={window.brew_collective_text} alt="" /></span>
                        {this.props.errors.length > 0 ? this.renderErrors() : null}


                        <div className='input-rows'>
                            <h4>All fields below are required unless specified.</h4>

                            <div className='input-col-1'>
                                <div className="input-container-sign-up">
                                    <i className="fas sign-up-icons fa-user "></i>
                                    <input className='form-input' type="text" placeholder='Username' onChange={this.handleInput('username')} />
                                </div>

                                <div className="input-container-sign-up">
                                    <i className="fas sign-up-icons fa-envelope icon" ></i>
                                    <input className='form-input' type="text" placeholder='Email' onChange={this.handleInput('email')} />
                                </div>
                            </div>
                            <h4>Avoid using common words and include a mix of letters and numbers.</h4>

                            <div className='input-col-1'>

                                <div className="input-container-sign-up">
                                    <i className="fas sign-up-icons fa-lock icon"></i>
                                    <input className='form-input' type="password" placeholder='Password' onChange={this.handleInput('password')} />
                                </div>


                                <div className="input-container-sign-up">
                                    <i className="fas sign-up-icons fa-lock icon"></i>
                                    <input id='confirmPassword' className='form-input' type="password" placeholder='Repeat Password' onChange={this.handleInput('password_confirmation')} />
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

                            {/* <div className='input-col-1 input-col-3'>
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


        </div> */}
                            <div className='input-col-1 input-col-3' >

                                <div className="input-container-secondary">

                                    <select className="select" >
                                        <option disabled className='first-option'>Select Your Country</option>
                                        <option selected value="United States" >United States</option>
                                    </select>
                                </div>

                                <div className="input-container-sign-up">

                                    <p id="input-p">Birthday:</p>
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
        )

    }
}

export default SignUp