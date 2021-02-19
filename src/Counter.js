import React, {useEffect, useState, useRef} from 'react';
import './Counter.css';

export default function Counter() {
    const[days, setDays] = useState('00');
    const[hours, setHours] = useState('00');
    const[minutes, setMinutes] = useState('00');
    const[seconds, setSeconds] = useState('00');

    let interval = useRef();

    const runTimer = () => {
        const countdownDates = new Date('Feb 28 2021 00:00:00').getTime();

        interval = setInterval(() =>{
            const today = new Date().getTime();
            const totalDays = countdownDates - today;

            const days = Math.floor(totalDays / (1000*60*60*24));
            const hours = Math.floor((totalDays % (1000*60*60*24))/(1000*60*60));
            const minutes = Math.floor((totalDays%(1000*60*60))/(1000*60));
            const seconds = Math.floor((totalDays%(1000*60))/1000);

            if (totalDays < 0) {
                clearInterval(interval.current);
            }else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);   
            }
        }, 1000);
    };

    useEffect(() => {
        runTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div className='counter'>
            <section className='timer'>
                <div className="days">
                    <p className='nums'>{days}</p>
                    <p className='description'><small>Days</small></p>
                </div>
                <div className="hours">
                    <p className='nums'>{hours}</p>
                    <p className='description'><small>Hours</small></p>
                </div>
                <div className="mins">
                    <p className='nums'>{minutes}</p>
                    <p className='description'><small>Minutes</small></p>
                </div>
                <div className="secs">
                    <p className='nums'>{seconds}</p>
                    <p className='description'><small>Seconds</small></p>
                </div>
            </section>
        </div>
    )
}
