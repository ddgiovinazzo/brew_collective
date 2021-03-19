import React, { useEffect, useState } from "react";
import { renderErrors } from '../../beer/create/util'
import { countryList } from "../../brewery/create/util";
import Img from "../../image/image";


const UserUpdate = (props) => {
    const { errors, currentUser, updateUser, clearErrors, updateUserPhoto } = props
    const {
        id,
        username,
        email,
        location,
        country,
        gender,
        firstName,
        lastName,
        birthday
    } = currentUser

    const [user, setUser] = useState({
        id,
        username,
        email,
        location,
        country,
        gender,
        first_name: firstName,
        last_name: lastName,
        birthday
    })

    const [update, setUpdate] = useState(0)
    useEffect(
        () => { if (errors.length > 0) clearErrors() }, [update]
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        if (errors.length > 0) clearErrors()
        updateUser(user)
    }


    const handleInput = (type) => {
        const newUser = Object.assign({}, user)
        return (e) => {
            newUser[type] = e.currentTarget.value
            setUser(newUser)
        }
    }


    const [password, setPassword] = useState({
        id,
        current_password: "",
        password: "",
        password_confirmation: "",
    })


    const handlePassword = (type) => {
        const newPassword = Object.assign({}, password)
        return (e) => {
            newPassword[type] = e.currentTarget.value
            setPassword(newPassword)
        }
    }

    const passwordSubmit = (e) => {
        e.preventDefault()
        updateUser(password)
        .then(()=> {if (errors.length > 0) clearErrors()})
    }

    const splitBirthday = birthday.split("-")

    const currentBirthday = {
        year: parseInt(splitBirthday[0]),
        month: parseInt(splitBirthday[1]),
        day: parseInt(splitBirthday[2].slice(0, 2))
    }

    const { year, month, day } = currentBirthday

    const handleBirthday = () => {
        return () => {
            const newUser = Object.assign({}, user)
            const year = document.getElementById("year").value
            const month = document.getElementById("month").value
            const day = document.getElementById("day").value

            const date = `${year}-${month}-${day}`
            newUser["birthday"] = date
            setUser(newUser)
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

    const countries = countryList.map(country => (
        <option key={country} value={country}>{country}</option>
    ))

    const fileInput = document.getElementById("file-upload-hidden")

    const imageClick = () =>{
        fileInput.click()
    }

    const imageSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('user[id]', currentUser.id)
        formData.append('user[photo]', fileInput.files[0])
        updateUserPhoto(formData)
        .then(()=>fileInput.value = null)
    }

    return (
        <div className='main-outer'>
            <div className='home-grid'>
                <form className={!errors.length ? 'uu sign-up-form' : 'uu sign-up-form sign-up-form-errors'}>
                    <h1>Account Settings</h1>
                <h2 className="uu-header-text">Profile Picture</h2>

                    <Img className="beer-img user-img" src={currentUser.photoUrl} dft={window.defaultBeer} alt="user" />
                    <input onChange={imageSubmit} 
                    id="file-upload-hidden" 
                    type="file"
                    accept="image/*"
                />
                    <button onClick={imageClick} className='uu-submit form-submit'>Change Profile Picture</button>


                    <h2 className="uu-header-text">Profile Settings</h2>
                    <br />
                    {errors.length > 0 ? renderErrors(errors, "errors-container-sign-up") : null}

                    <div className='input-col-2'>
                        <div className='input-col-1 input-col-3'>
                            <div className="input-container-secondary">
                                <label className="uu-label">Username</label>
                                <input defaultValue={username} className='form-input-secondary' autoComplete="username" type="text" onChange={handleInput('username')} />
                            </div>

                            <div className="input-container-secondary">
                                <label className="uu-label">Email</label>
                                <input defaultValue={email} className='form-input-secondary' autoComplete="email" type="text" onChange={handleInput('email')} />
                            </div>

                        </div>
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
                                <input defaultValue={country} list="user-country" autoComplete="off" className='uu-input-form-data form-input-secondary' onChange={handleInput('country')} />
                                <datalist id="user-country" className='select'>
                                    {countries}
                                </datalist>
                            </div>
                            <div className="input-container-sign-up">

                                <p id="input-p">Birthday:</p>
                                <div className='form-birthday-container'>
                                    <select defaultValue={month} id="month" onChange={handleBirthday('month')} className='form-birthday' type="select" >
                                        {months}
                                    </select>
                                    <select defaultValue={day} id="day" onChange={handleBirthday('day')} className='form-birthday' type="select" >
                                        {days}
                                    </select>
                                    <select defaultValue={year} id="year" onChange={handleBirthday('year')} className='form-birthday' type="select" >
                                        {years}
                                    </select>
                                </div >
                            </div>
                        </div>

                        <button onClick={handleSubmit} className='uu-submit form-submit'>Update Profile</button>
                    </div>

                        <h2 className="uu-header-text">Password Settings</h2>
                    <div className='input-col-2'>


                        <div className='uu-input-container-outer input-col-1 input-col-3' >
                            <div className="input-container-secondary">

                                <div className='uu-input-container input-cont'>
                                    <input placeholder="Current Password"className='uu-input' onChange={handlePassword("current_password")} type="password" />
                                </div>
                            </div>
                            <div className="input-container-secondary">

                                <div className='uu-input-container input-cont'>
                                    <input placeholder="New Password"className='uu-input' onChange={handlePassword("password")} type="password" autoComplete="new-password" />
                                </div>
                            </div>
                            <div className="input-container-secondary">

                                <div className='uu-input-container input-cont'>
                                    <input placeholder="Confirm New Password" className='uu-input' onChange={handlePassword("password_confirmation")} type="password" autoComplete="new-password" />
                                </div>
                            </div>
                        </div>




                        <button onClick={passwordSubmit} className='uu-submit form-submit'>Update Password</button>
                    </div>
                    
                </form>



            </div>
        </div>
    )

}
export default UserUpdate