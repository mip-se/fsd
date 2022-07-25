import React, {useState, useEffect} from 'react';

import { getMetrics } from '../api/request';

const Metrics = () => {
    const [metrics, setMetrics] = useState('');
    const [isLoading, setLoading] = useState(false);

    const request = async () => {
        setLoading(true);

        try {
            const metrics = await getMetrics();
            setMetrics(metrics);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        request();

        const interval = setInterval(() => {
            request()
        }, 30000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="Metrics">
            <h2 className="Metrics__title">Metrics</h2>
            <div className="Metrics__inner-wrapper">
                {
                    isLoading
                    ?
                    <div className="loading">
                        <p><b>Loading...</b></p>
                    </div>
                    :
                    <pre className="Metrics__content">{metrics}</pre>
                }
            </div>
        </div>
    )
}


export default Metrics
