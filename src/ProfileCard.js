import React from 'react'
import './'
const ProfileCard = () => {
    return (
        <div className="profile-card">
            <svg src="./assets/bg-pattern-card.svg" alt=""/>

            <div className="profile-details">
             Victor Crest 26
            London

            </div>
            <div className="stat-wrapper">
            <div className="followers">
            80K Followers

            </div>
            <div className="likes">
            803K Likes


            </div>
            <div className="photos">
            1.4K Photos


            </div>

            </div>
            <footer>
                Challenge by Frontend Mentor. Coded by Sam C.
            </footer>
        </div>
    )
}

export default ProfileCard
