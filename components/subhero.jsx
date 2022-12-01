import { link, icon } from '../pages/api/_media'
import React, { useState } from "react";
import Link from 'next/link'


/* Slideshow */
const slideIndex = [];
for (let i = 0; i < 1; i++) {
    if (i === 10) {
        break;
    }
    slideIndex.push({
        i,
        id: i
    })
}

const dayOfWeekName = new Date().toLocaleString(
    'default', { weekday: 'long' }
);

function SubHero()
{
    const [index, setIndex] = useState(0);
    const regHours = {
        monday: ' 11:00am - 9:00pm',
        tuesday: ' 11:00am - 9:00pm',
        wednesday: ' 11:00am - 9:00pm',
        thrusday: ' 11:00am - 9:00pm',
        friday: ' 11:00am - 10:00pm',
        saturday: ' 11:00am - 10:00pm',
        sunday: ' 12:00pm - 9:00pm'
    }
    const delvHours = {
        monday: ' 11:00am - 8:30pm',
        tuesday: ' 11:00am - 8:30pm',
        wednesday: ' 11:00am - 8:30pm',
        thrusday: ' 11:00am - 8:30pm',
        friday: ' 11:00am - 9:30pm',
        saturday: ' 11:00am - 9:30pm',
        sunday: ' 12:00am - 8:30pm'
    }

    const location = {
        tacoma: '8718 S Tacoma Way B, Lakewood, WA 98499'
    }
    return (
        <div className="subhero-wrapper">
            <div className="sub-container">
                    {/* buttons */}
                 <div className="btn-wrapper">
                     <Link className="a-btn" href="/menu#milk-tea"><button className="btn" type="button">Milk Tea</button></Link>
                     <Link className="a-btn" href="/menu#specialty"><button className="btn" type="button">Specialty</button></Link>
                     <Link className="a-btn" href="/menu#matcha"><button className="btn" type="button">Matcha</button></Link>
                     <Link className="a-btn" href="/menu#fruit-tea"><button className="btn" type="button">Fruit Tea</button></Link>
                 </div>
            </div>
            <div className="sl-container">
                <div className="slideshow-container">
            {/* Slideshow Background */}
                {slideIndex.map((i) => (
                    <div key={index} className={ index === 0 ? 'activeOne' : 'none'}>
                        <div className="hours-container fade" >
                            <h1 className="sl-header">Hours Open</h1> {/* *hours maybe subject to change */}
                            <div className="sl-hours-container">
                                <div className="day-container">
                                    <p id={dayOfWeekName === 'Monday' ? 'text-ul' : 'na'}>Monday:</p>
                                    <p id={dayOfWeekName === 'Tuesday' ? 'text-ul' : 'na'}>Tuesday:</p>
                                    <p id={dayOfWeekName === 'Wednesday' ? 'text-ul' : 'na'}>Wednesday:</p>
                                    <p id={dayOfWeekName === 'Thursday' ? 'text-ul' : 'na'}>Thursday:</p>
                                    <p id={dayOfWeekName === 'Friday' ? 'text-ul' : 'na'}>Friday:</p>
                                    <p id={dayOfWeekName === 'Saturday' ? 'text-ul' : 'na'}>Saturday:</p>
                                    <p id={dayOfWeekName === 'Sunday' ? 'text-ul' : 'na'}>Sunday:</p>
                                </div>
                                <div className="hours-container">
                                    <p id={dayOfWeekName === 'Monday'  ? 'text-ul' : 'na'}>{regHours.monday}</p>
                                    <p id={dayOfWeekName === 'Tuesday' ? 'text-ul' : 'na'}>{regHours.tuesday}</p>
                                    <p id={dayOfWeekName === 'Wednesday' ? 'text-ul' : 'na'}>{regHours.wednesday}</p>
                                    <p id={dayOfWeekName === 'Thursday' ? 'text-ul' : 'na'}>{regHours.thrusday}</p>
                                    <p id={dayOfWeekName === 'Friday'  ? 'text-ul' : 'na'}>{regHours.friday}</p>
                                    <p id={dayOfWeekName === 'Saturday' ? 'text-ul' : 'na'}>{regHours.saturday}</p>
                                    <p id={dayOfWeekName === 'Sunday'  ? 'text-ul' : 'na'}>{regHours.sunday}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {slideIndex.map((i) => (
                    <div key={index} className={index === 1 ? 'activeTwo' : 'none'}>
                        <div className="hours-container fade">
                            <h1 className="sl-header">Delivery Hours</h1>
                            <div className="sl-hours-container">
                                <div className="day-container">
                                    <p id={dayOfWeekName === 'Monday'  ? 'text-ul' : 'na'}>Monday:</p>
                                    <p id={dayOfWeekName === 'Tuesday' ? 'text-ul' : 'na'}>Tuesday:</p>
                                    <p id={dayOfWeekName === 'Wednesday' ? 'text-ul' : 'na'}>Wednesday:</p>
                                    <p id={dayOfWeekName === 'Thursday' ? 'text-ul' : 'na'}>Thursday:</p>
                                    <p id={dayOfWeekName === 'Friday'  ? 'text-ul' : 'na'}>Friday:</p>
                                    <p id={dayOfWeekName === 'Saturday' ? 'text-ul' : 'na'}>Saturday:</p>
                                    <p id={dayOfWeekName === 'Sunday' ? 'text-ul' : 'na'}>Sunday:</p>
                                </div>
                                <div className="hours-container">
                                    <p id={dayOfWeekName === 'Monday'  ? 'text-ul' : 'na'}>{delvHours.monday}</p>
                                    <p id={dayOfWeekName === 'Tuesday' ? 'text-ul' : 'na'}>{delvHours.tuesday}</p>
                                    <p id={dayOfWeekName === 'Wednesday' ? 'text-ul' : 'na'}>{delvHours.wednesday}</p>
                                    <p id={dayOfWeekName === 'Thursday' ? 'text-ul' : 'na'}>{delvHours.thrusday}</p>
                                    <p id={dayOfWeekName === 'Friday'  ? 'text-ul' : 'na'}>{delvHours.friday}</p>
                                    <p id={dayOfWeekName === 'Saturday' ? 'text-ul' : 'na'}>{delvHours.saturday}</p>
                                    <p id={dayOfWeekName === 'Sunday' ? 'text-ul' : 'na'}>{delvHours.sunday}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            {/* Button Function Container */}
            <div className="button-container">
                <a id="left" className="sl-btn" onClick={() => {
                    if (index < slideIndex.length) {
                        setIndex(index + 1)
                    } else {
                        setIndex(0)
                    }}}> &#10094;
                </a> 

                <a id="right" className="sl-btn"onClick={() => {
                    if (index < slideIndex.length) {
                        setIndex(index + 1)
                    } else {
                        setIndex(0)
                    }}}> &#10095;
                </a>
            </div>{/* Button Function Container */}
            
            <div className="dots-container">
                <a className="dots" id={index === 0 ? 'dots-one' : ''}> </a>
                <a className="dots" id={index === 1 ? 'dots-two' : '' }> </a>
                </div>
            </div>
            <div className="static-background">
                  <div className="location-container">
                      <h1 className="location-header"> Location </h1>
                      <p className="location">{location.tacoma}</p>
                      <a className="directions" href={link.directions}>Directions</a>
                  </div>
             </div>

                
           </div> {/* sl-container */}

            
        </div>
    );
}

export default SubHero;

/* 
    q: why won't the button-container align with the parent flexbox?
    q: why won't the dots-container align with the parent flexbox?
    a: the parent flexbox is not a flexbox, it's a grid.
    q: what is the name of the grid?
    a: the grid is called "sl-container"



*/