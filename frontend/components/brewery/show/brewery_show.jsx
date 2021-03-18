import React, {useState} from "react";
import Fallback from "../../fallback/fallback";
import BreweryContent from './brewery_content/brewery_content'
import CheckInShowContainer from '../../check-in/check_in_show/check_in_show_container'

const BreweryShow = ({ currentUser, brewery, beers }) => {

    if (!brewery) return <Fallback />
    
    const { checkIns, ratings } = brewery
    const [sort, setSort] = useState("global")


    const noCheckIns = <p>There doesn't seem to be any recent activity!</p>
    const uniques = {}
    const stats = {
        uniquesCount: 0,
        you: 0
    }
    const checkInList = []

    checkIns.forEach(checkIn => {
        const checkInShow = <CheckInShowContainer key={checkIn.id} brewery={brewery} beer={beers[checkIn.beerId]} checkIn={checkIn} />

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

                <div className='beer-show-container'>
                    <BreweryContent brewery={brewery} ratings={ratings} stats={stats} sort={sort} setSort={setSort}/>
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
                        {checkInList.length ? checkInList : noCheckIns}
                    </div>
                </div>
            </div>

        </div>





    )
}

export default BreweryShow