import React, { useState } from "react";
import Fallback from "../../fallback/fallback";
import CheckInFormContainer from '../../check-in/check-in-form-container'
import BeerContentTop from './beer_content/beer_content_top'
import BeerContentBottom from './beer_content/beer_content_bottom'
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'

const BeerShow = ({ currentUser, beer, breweries }) => {
    const [openModal, setOpenModal] = useState(false)
    const [sort, setSort] = useState("global")

    if (!beer) return <Fallback />
    const brewery = breweries[beer.breweryId]
    if (!brewery) return <Fallback />

    const { checkIns, ratings } = beer

    const noCheckIns = <p>There doesn't seem to be any recent activity!</p>
    const uniques = {}
    const stats = {
        uniquesCount: 0,
        you: 0
    }
    const checkInList = []

    checkIns.forEach(checkIn => {
        const checkInShow = <CheckInShowContainer key={checkIn.id} beer={beer} checkIn={checkIn} brewery={brewery} />

        if (!uniques[checkIn.userId]) {
            uniques[checkIn.userId] = 1;
            stats.uniquesCount++
        }
        if (checkIn.userId === currentUser.id){
            stats.you++
            if(sort === "you")checkInList.push(checkInShow)
        }

        const {friendshipsAsReceiver, friendshipsAsRequestor} = currentUser
        const {userId} = checkIn
        const fARec = friendshipsAsReceiver
        const fAReq = friendshipsAsRequestor
        const friend = fARec[userId] || fAReq[userId]
        if(sort === "friends" && friend) checkInList.push(checkInShow)
        if(sort === "global") checkInList.push(checkInShow)
    })

   const handleSort = (e) =>{
       let sortValue = sort
        if(e.currentTarget.id != sort){
            const element = e.currentTarget
            if(sortValue != element.id){
                setSort(element.id)
                sortValue = element.id
                element.classList.add("activity-selected")
                const ids = ["global", "friends", "you"]
                ids.forEach(id => {
                    if(id != sortValue){
                        const currentElement = document.getElementById(id)
                        currentElement.classList.remove("activity-selected")
                    }
                })
            }
            }
    }

    const activityText = () => {
        if(sort === "global") return "Global Recent Activity"
        if(sort === "friends") return "Your Recent Friends Activity"
        if(sort === "you") return "Your Recent Activity"
    }

    return (
        <div className='main-outer'>

            <div className='home-grid'>

                {
                    openModal ?
                        <CheckInFormContainer
                            beer={beer}
                            user={currentUser}
                            setOpenModal={setOpenModal}
                        />
                        : null
                }

                <div className='beer-show-container'>
                    <BeerContentTop beer={beer} ratings={ratings} stats={stats} brewery={brewery} sort={sort} setSort={setSort}/>
                    <BeerContentBottom beer={beer} setOpenModal={setOpenModal} />
                </div>

                <div className="content-container">
                    <div id='recent-activity'>
                        <div className="activity-header">
                            <h4>{activityText()}</h4>
                            <div className="activity-sort">
                                <p>Sort By:</p>
                                <p id="global" onClick={handleSort} className="sort activity-selected">Global</p>
                                <p id="friends" onClick={handleSort} className="sort">Friends</p>
                                <p id="you" onClick={handleSort} className="sort">You</p>
                            </div>
                        </div>
                        {beer.checkIns.length ? checkInList : noCheckIns}
                    </div>
                </div>
            </div>

        </div>





    )
}

export default BeerShow