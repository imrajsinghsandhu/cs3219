import React, { useState, useEffect } from "react";
import CalendarHeatmap from 'reactjs-calendar-heatmap'
import moment from 'moment';
import * as d3 from 'd3';
import "./UserProfileScreen.css";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../../utils/authUtils";

/**
 * User profile screen will have 
 * 1. Activity graph, like on github
 * 2. Questions completed
 */

const UserProfileScreen = () => {
    const navigate = useNavigate();

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
    
    const handleDeleteAccount = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/users/delete-account", {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuthToken()
                }
            })

            if (response.status === 200) {
                localStorage.removeItem('jwt_token');
                console.log("Token has been deleted, successfully deleted account!");
                alert("Account deleted successfully!");
                navigate('/sign-in');
            }
        } catch (error) {
            console.error("Theres en error!", error);
        }
    }

    const handleChangeEmail = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/users/profile", {
                method: "PUT",
                body:JSON.stringify(newEmail),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuthToken()
                }
            })

            if (response.status === 200) {
                // we have gotten the user's details
                alert('Email updated successfully! Log-in again!');
            }
        } catch (error) {
            console.error("Theres en error!", error);
        }
    }

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
                        <button type="button" className="sign-in-out-button" onClick={handleChangeEmail}>Change Email</button>
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

    const renderDeleteButton = () => {
        return <div className="sign-in-components">
            <button type="button" onClick={handleDeleteAccount} className="delete-button">Delete Account</button>
        </div>
    }

    return <div>
        {renderEmailChange()}
        {renderActivityHeatmap()}
        {renderDeleteButton()}
    </div>
}

export default UserProfileScreen;