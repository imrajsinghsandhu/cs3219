import React, {useState, useEffect} from "react";
import CalendarHeatmap from 'reactjs-calendar-heatmap';
import moment from 'moment';
import * as d3 from 'd3';

const Heatmap = () => {

    const [data, setData] = useState([]);

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

    const renderHeatmap = () => {

        return (data.length > 0 &&
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
    return <div>
        {renderHeatmap()}
    </div>
}

export default Heatmap;