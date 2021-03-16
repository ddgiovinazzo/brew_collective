import React from "react";
import { Link } from 'react-router-dom'
import { elapsedTime } from '../../../util/time_util'
import Img from "../../image/image";



const CheckInShow = ({ checkIn, user, beer, brewery }) => {

    if (!checkIn || !user || !beer) return null

    const { rating, review } = checkIn
    const renderReview = (
        <div>
            <br />
            <p>{checkIn.review}</p>
            <br />
        </div>
    )

    const caps = () => {
        switch (rating) {
            case 1: return window.oneCap
            case 2: return window.twoCaps
            case 3: return window.threeCaps
            case 4: return window.fourCaps
            case 5: return window.fiveCaps


            default: return null
        }
    }


    return (
        <div className="check-in-content">
            <div className="check-in-img-container">
                <Link to={`/user/${user.id}`}>
                    <Img className="user-img check_in-img" src={user.photoUrl} dft={window.defaultBeer} alt="user" />
                </Link>
                <Link to={`/beer/${beer.id}`}>
                    <Img className="check_in-img" src={beer.imageUrl} dft={window.defaultBeer} alt="user" />
                </Link>
            </div>
            <p>
                <Link to={`/user/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link>
                {` is drinking ${['a','e','i','o','u','A','E','I','O','U'].includes(beer.name[0]) ? "an" : "a"} `}
                <Link to={`/beer/${beer.id}`}>{`${beer.name}`}</Link>
                {' by '}
                <Link to={`/brewery/${brewery.id}`}>{`${brewery.name}`}</Link>
            </p>
            {rating ? <img className="rating c-rating" src={caps()} alt="" /> : null}
            {review ? renderReview : <br />}
            <p>{`- ${elapsedTime(checkIn.createdAt)} -`}</p>
        </div>
    )
}

export default CheckInShow