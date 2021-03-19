import React, { useEffect, useState } from "react";
import { renderErrors } from '../../beer/create/util'
import { countryList } from "../../brewery/create/util";

const UserUpdate = (props) => {
    const { errors, currentUser, updateUser, clearErrors } = props
    const {
        username,
        email,
        pronouns,
        location,
        country,
        gender,
        firstName,
        lastName,
        birthday
    } = currentUser

    const [user, setUser] = useState({
        username,
        email,
        pronouns,
        location,
        country,
        gender,
        first_name: firstName,
        last_name: lastName,
        birthday
    })

    const splitBirthday = birthday.split("-")

    const [updatebirthday, setUpdateBirthday] = useState({
        year: splitBirthday[0],
        month: splitBirthday[1],
        day: splitBirthday[2].slice(0,2)
    })

    const {year, month, day} = updatebirthday

    const [update, setUpdate] = useState(0)
    useEffect(
        () => { if (errors.length > 0) clearErrors() }, [update]
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser(user)
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
        <div className='main-outer'>
            <div className='home-grid'>

            <form className={errors.length ? 'uu sign-up-form' : 'uu sign-up-form sign-up-form-errors'}>
                <h1>Profile Settings</h1>
                <br/>
                {errors.length > 0 ? renderErrors() : null}


                <div className='input-rows'>
                    <div className='input-col-1'>
                        <div className="input-container-sign-up">
                        <label className="uu-label">Username</label>
                            <input defaultValue={username} className='form-input' type="text" onChange={handleInput('username')} />
                        </div>

                        <div className="input-container-sign-up">
                        <label className="uu-label">Email</label>
                            <input defaultValue={email} className='form-input' type="text" onChange={handleInput('email')} />
                        </div>
                    </div>

                </div>

                <div className='input-col-2'>
                    <div className='input-col-1 input-col-3'>
                        <div className="input-container-secondary">
                        <label className="uu-label">First Name</label>
                            <input defaultValue={firstName} className='form-input-secondary' type="text" onChange={handleInput('first_name')} />
                        </div>

                        <div className="input-container-secondary">
                        <label className="uu-label">Last Name</label>
                            <input defaultValue={lastName} className='form-input-secondary' type="text" onChange={handleInput('last_name')} />
                        </div>

                    </div>

                    <div className='input-col-1 input-col-3'>
                        <div className="input-container-secondary">
                            <label className="uu-label">Location (Optional)</label>
                            <input defaultValue={location} className='form-input-secondary' type="text" placeholder='Location (Optional)' onChange={handleInput('location')} />
                        </div>

                        <div className="input-container-secondary">
                            <label className="uu-label">Pronouns (Optional)</label>
                            <select defaultValue={gender} onChange={handleInput('gender')} className="select" >
                                <option value="they/them/theirs" >they/them/theirs</option>
                                <option value="she/her/hers">she/her/hers</option>
                                <option value="he/him/his">he/him/his</option>
                                <option value="">Prefer not to Say</option>
                            </select>
                        </div>


                    </div>
                    <div className='input-col-1 input-col-3' >

                        <div className="input-container-sign-up">
                            <p id="input-p">Country:</p>
                            <input defaultValue={country} list="user-country" className='uu-input form-input-secondary' onChange={handleInput('country')} />
                            <datalist id="user-country" className='select'>
                                {countries}
                            </datalist>
                        </div>
                        <div className="input-container-sign-up">

                            <p id="input-p">Birthday:</p>
                            <div className='form-birthday-container'>
                                <select defaultValue={month} onChange={handleBirthday('month')} className='form-birthday' type="select" >
                                    {months}
                                </select>
                                <select defaultValue={day} onChange={handleBirthday('day')} className='form-birthday' type="select" >
                                    {days}
                                </select>
                                <select defaultValue={year} onChange={handleBirthday('year')} className='form-birthday' type="select" >
                                    {years}
                                </select>
                            </div >
                        </div>
                    </div>

            <button onClick={handleSubmit} className='uu-submit form-submit'>Update Profile</button>
                </div>
            </form>

            </div>
        </div>
    )

}
export default UserUpdate