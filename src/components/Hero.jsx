import React from 'react';
import Chart from './Live Price Chart/ws-chart';

export default function Hero () {
    return (
        <>
            <div className="flex-col gap-y-5 p-16">
                <h1>BTC/USDT</h1>
                <Chart/>
            </div>
        </>
    )
}