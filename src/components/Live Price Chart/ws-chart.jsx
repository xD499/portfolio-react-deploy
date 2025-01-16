import React, {useState} from 'react';
import WebSocketComponent from './ws';
import LineChart from './LineChart';

export default function Display() {
    const [chartData, setChartData] =  useState([]);

    const handleNewData = (newData) => {
        const newValue = parseFloat(newData);     
        setChartData(prevData => [...prevData, newValue]);
    };

    return(
        <div>
            {/* <WebSocketComponent onData={handleNewData}/> */}
            <WebSocketComponent onData={handleNewData}/>
            <LineChart liveData={chartData}/>
        </div>
    )
}