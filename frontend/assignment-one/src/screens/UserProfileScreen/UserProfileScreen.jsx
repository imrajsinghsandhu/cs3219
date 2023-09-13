import React, { useState, useEffect } from "react";
import CalendarHeatmap from 'reactjs-calendar-heatmap'
import moment from 'moment';
import * as d3 from 'd3';
import "./UserProfileScreen.css";

/**
 * User profile screen will have 
 * 1. Activity graph, like on github
 * 2. Questions completed
 */

const UserProfileScreen = () => {
    
    const [data, setData] = useState([]);
    const [newEmail, setNewEmail] = useState('');

    useEffect(() => {
        // Initialize random data for the demo
        const now = moment().endOf('day').toDate();
        const timeAgo = moment().startOf('day').subtract(10, 'year').toDate();

        let data = d3.timeDays(timeAgo, now).map(function (dateElement, index) {
            return {
              date: dateElement,
              details: Array.apply(null, new Array(Math.floor(Math.random() * 15))).map(function(e, i, arr) {
                return {
                  'name': 'Project ' + Math.ceil(Math.random() * 10),
                  'date': function () {
                    let projectDate = new Date(dateElement.getTime())
                    projectDate.setHours(Math.floor(Math.random() * 24))
                    projectDate.setMinutes(Math.floor(Math.random() * 60))
                    return projectDate
                  }(),
                  'value': 3600 * ((arr.length - i) / 5) + Math.floor(Math.random() * 3600) * Math.round(Math.random() * (index / 365))
                }
              }),
              init: function () {
                this.total = this.details.reduce(function (prev, e) {
                  return prev + e.value
                }, 0)
                return this
              }
            }.init()
        })

        setData(data);
    }, []);

    const renderEmailChange = () => {
        return (
            <div className="change-email-components">
                <h1>Change your email</h1>
                <form>
                    <div className="input-box-change-email">
                        <label>New Email:</label>
                        <input
                            type="email"
                            name="email-change"
                            value={newEmail.value}
                            onChange={e=>setNewEmail(e)}
                        />
                        <button className="sign-in-out-button">Change Email</button>
                    </div>
                </form>
            </div>
        )
    }

    const renderActivityHeatmap = () => {

        return ( data.length > 0 &&
            <div className="heatmap" >
                <h2>Here's how consistent you've been!</h2>
                <CalendarHeatmap
                    data={data}
                    // color="F4E9D3"
                >
                </CalendarHeatmap>
            </div>
        )
    }

    const handleDeleteAccount = () => {
        // Example:
        // deleteUserAccount()
        //   .then(() => {
        //     // Handle successful deletion, e.g., log user out and redirect
        //   })
        //   .catch((error) => {
        //     // Handle error, e.g., show an error message
        //   });

        // transfer the alert up there later
        return alert('Are you sure you want to delete your account?');
    }

    const renderDeleteButton = () => {
        return <div className="sign-in-components">
            <button onClick={handleDeleteAccount} className="delete-button">Delete Account</button>
        </div>
    }

    return <div>
        {renderEmailChange()}
        {renderActivityHeatmap()}
        {renderDeleteButton()}
    </div>
}

export default UserProfileScreen;