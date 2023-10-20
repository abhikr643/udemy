import React from "react";

function Header1(){
    return(
        <div>
            <div className="Header1">
                <h6> Development <span>{">"}</span> Web Development <span>{">"}</span> Angular</h6>
                <div className="flex-head">
                <div>
                    <div className="header-div">
                <h2 className="heading-top">
                Angular - The Complete Guide (2023 Edition)
                </h2>
                <p>
                Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js
                </p>
                <p>
                <span className="bestseller">Bestseller</span> <span className="rating">4.6</span>⭐⭐⭐⭐⭐ <span className="raters">(192,259 ratings)</span> <span className="raters-outoff">714,984 students.</span>
                <br></br><span className="raters-outoff">Created by</span> <span className="raters">Abhikr645.</span>
                </p>

                <p>
                
                </p>
                </div>
                    </div>

                <div className="header-img">
                    <img className="img-head" src="./Images/head-img.png"></img>
                    <div className="flex-bottom-img">
                    <div>
                        Personal 
                    </div>
                    <div>
                        Teams
                    </div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default Header1;