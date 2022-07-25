import React, {useState, useEffect} from 'react';

import { getTime } from '../api/request';

const Time = () => {
    const [time, setTime] = useState(0);
    const [difference, setDifference] = useState('');
    const [isLoading, setLoading] = useState(false);

    const calculateDifference = (serverTime) => {
        const server = serverTime;
        const local = Math.floor(new Date().getTime() / 1000);
        const diff = Math.abs(local - server);

        let s = Math.floor(diff / 1) % 60;
        let m = Math.floor(diff / 60) % 60;
        let h = Math.floor(diff / (60 * 60)) % 24;

        if(s < 10) {
            s = `0${s}`;
        }

        if(m < 10) {
            m = `0${m}`;
        }

        if(h < 10) {
            h = `0${h}`;
        }

        console.log(`${h}:${m}:${s}`);

        return `${h}:${m}:${s}`;
    }

    const request = async () => {
        setLoading(true);

        try {
            const time = await getTime();
            setTime(time.epoch);
            setDifference(calculateDifference(time.epoch));
            setLoading(false);
        } catch(err) {
            console.error(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        request();

        const interval = setInterval(() => {
            request();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Time">
            <h2>Time</h2>
            <div className="Time__inner-wrapper">
                {
                    isLoading
                    ?
                    <div className="loading">
                        <p><b>Loading...</b></p>
                    </div>
                    :
                    <>
                        <p><b>Epoch seconds:</b> { time }</p>
                        <p><b>Difference:</b> { difference }</p>
                    </>
                }
            </div>
        </div>
    )
}

export default Time
