import React, { useEffect, useState } from "react";
import { renderErrors } from '../beer/create/util'
import { countryList } from "../brewery/create/util";

const SignUp = (props) => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        pronouns: '',
        location: '',
        country: 'United States',
        first_name: '',
        last_name: '',
        birthday: ''

    })

    const [birthday, setBirthday] = useState({
        year: '',
        month: '',
        day: ''
    })

    const [update, setUpdate] = useState(0)
    useEffect(
        () => { if (props.errors.length > 0) props.clearErrors() }, [update]
    )

    const handleSubmit = (e) => {
        const { signup } = props
        e.preventDefault()
        signup(user)
    }


    const handleInput = (type) => {
        const newUser = Object.assign({}, user)
        return (e) => {
            user[type] = e.currentTarget.value
            setUser(newUser)
        }
    }

    const handleBirthday = (type) => {
        const newBirthday = Object.assign({}, birthday)
        const { year, month, day } = newBirthday
        return (e) => {
            newBirthday[type] = e.currentTarget.value
            const date = `${year}-${month}-${day}`;
            setBirthday(date)
        }
    }


    const redirect = (e) => e.stopPropagation()

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

    const countries = countryList.map(country=>(
        <option key={country} value={country}>{country}</option>
    ))

    return (

        <div onClick={() => { props.history.push('/') }} className="splash-container" >
            <form onClick={redirect} className={!props.errors.length ? 'sign-up-form' : 'sign-up-form sign-up-form-errors'}>
                <span id='brew_collective-logo-container'><img id="brew_collective-logo" src={window.brew_collective_text} alt="" /></span>
                {props.errors.length > 0 ? renderErrors() : null}


                <div className='input-rows'>
                    <h4>All fields below are required unless specified.</h4>

                    <div className='input-col-1'>
                        <div className="input-container-sign-up">
                            <i className="fas sign-up-icons fa-user "></i>
                            <input className='form-input' type="text" placeholder='Username' onChange={handleInput('username')} />
                        </div>

                        <div className="input-container-sign-up">
                            <i className="fas sign-up-icons fa-envelope icon" ></i>
                            <input className='form-input' type="text" placeholder='Email' onChange={handleInput('email')} />
                        </div>
                    </div>
                    <h4>Avoid using common words and include a mix of letters and numbers.</h4>

                    <div className='input-col-1'>

                        <div className="input-container-sign-up">
                            <i className="fas sign-up-icons fa-lock icon"></i>
                            <input className='form-input' type="password" placeholder='Password' onChange={handleInput('password')} />
                        </div>


                        <div className="input-container-sign-up">
                            <i className="fas sign-up-icons fa-lock icon"></i>
                            <input id='confirmPassword' className='form-input' type="password" placeholder='Repeat Password' onChange={handleInput('password_confirmation')} />
                        </div>
                    </div>

                </div>

                <div className='input-col-2'>
                    <div className='input-col-1 input-col-3'>
                        <div className="input-container-secondary">
                            <input className='form-input-secondary' type="text" placeholder='First Name' onChange={handleInput('first_name')} />
                        </div>

                        <div className="input-container-secondary">
                            <input className='form-input-secondary' type="text" placeholder='Last Name' onChange={handleInput('last_name')} />
                        </div>

                    </div>

                    <div className='input-col-1 input-col-3'>
                        <div className="input-container-secondary">
                            <input className='form-input-secondary' type="text" placeholder='Location (Optional)' onChange={handleInput('location')} />
                        </div>

                        <div className="input-container-secondary">
                            <select defaultValue="Pronouns (Optional)" onChange={handleInput('gender')} className="select" >
                                <option disabled className='first-option' >Pronouns (Optional)</option>
                                <option value="they/them/theirs" >they/them/theirs</option>
                                <option value="she/her/hers">she/her/hers</option>
                                <option value="he/him/his">he/him/his</option>
                                <option value="">Prefer not to Say</option>
                            </select>
                        </div>


                    </div>
                    <div className='input-col-1 input-col-3' >

                        <div className="input-container-secondary">

                            <input placeholder="Country"list="user-country" className='form-input-secondary' onChange={handleInput('country')} />
                            <datalist id="user-country" className='select'>
                                <option disabled>Country</option>
                                {countries}
                            </datalist>
                        </div>
                        <div className="input-container-sign-up">

                            <p id="input-p">Birthday:</p>
                            <div className='form-birthday-container'>
                                <select onChange={handleBirthday('month')} className='form-birthday' type="select" >
                                    <option value={null}>MM</option>
                                    {months}
                                </select>
                                <select onChange={handleBirthday('day')} className='form-birthday' type="select" >
                                    <option value={null}>DD</option>

                                    {days}
                                </select>
                                <select onChange={handleBirthday('year')} className='form-birthday' type="select" >
                                    <option value={null}>YYYY</option>
                                    {years}
                                </select>
                            </div >
                        </div>
                    </div>

            <button onClick={handleSubmit} className='form-submit'>Create Account</button>
                </div>
            </form>


        </div >
    )


}

export default SignUp