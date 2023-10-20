import React from "react";

function Learn(){
    return(
        <div>
            <div className="flex-learning">
            <div className="learn">
                <h3 className="learn-heading">What you'll learn</h3>
                <div className="flex-learn">
                    <div>
                        <p>
                        ✓  Develop modern, complex, responsive and scalable web applications with Angular
                        </p>

                        <p>
                        ✓  Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer
                        </p>
                    </div>

                    <div>
                        <p>✓  Fully understand the architecture behind an Angular application and how to use it</p>
                        <p>✓ Create single-page applications with one of the most modern JavaScript frameworks out there</p>
                    </div>
                </div>

            <div>
            <h4 style={{marginTop: "2rem", fontWeight: "bold"}}>
            This course includes:
            </h4>

            <div style={{display: "flex" , gap: "5rem"}}>
            <div>
                <p><img src="./Images/video-icon.png"></img>  36 hours on-demand video</p>
                <p><img src="./Images/article.png"></img> Assignments</p>
                <p><img src="./Images/file.png"></img> 47 articles</p>
                <p><img src="./Images/download.png"></img> 179 downloadable resources</p>
            </div>

            <div>
                <p><img src="./Images/phone.png"></img> Access on mobile and TV</p>
                <p><img src="./Images/caption.png"></img> Closed captions</p>
                <p><img src="./Images/trophy.png"></img> Certificate of completion</p>
            </div>
            </div>
            </div>

            <div className="companies">
            <h5 style={{paddingTop: "0.8rem" ,paddingLeft: "0.8rem"  ,fontSize: "large" , fontWeight: "bold"}}>
            Top companies offer this course to their employees
            </h5>
            <p style={{paddingLeft: "0.8rem" , color: "grey"}}>This course was selected for our collection of top-rated courses trusted by businesses worldwide. <a href="#">Learn more</a></p>
            
            <div style={{display :"flex",justifyContent : "space-evenly"}}>
             <img className="company-logo" src="./Images/nasdaq.png"></img>
             <img className="company-logo" style={{height: "2.5rem"}} src="./Images/volks.png"></img>
             <img className="company-logo" style={{height: "2.5rem"}} src="./Images/box.png"></img>
             <img className="company-logo" src="./Images/netapp.png"></img>
             <img className="company-logo" src="./Images/eventbrite.png"></img>
            </div>

            </div>
            

            </div>

            <div className="learn-sidebar">
                <h3>
                Subscribe to Udemy’s top courses
                </h3>
                <p>
                Get this course, plus 10,500+ of our top-rated courses, with Personal Plan. <a href="#">Learn more</a>
                </p>

                <button> Start Subscription</button>
                <p className="below-button">
                Starting at ₹750 per month
                <br></br>
                Cancel anytime
                </p>

                <hr></hr>
                <p style={{fontWeight:"bold"}}>₹549 <span className="strike-price">₹3,199</span> <span> 83% off</span></p>
                <button style={{backgroundColor:"white" , color: "black" , fontSize: "large" , fontWeight: "bold"}}> Buy this course</button>
                <p className="below-button">
                30-Day Money-Back Guarantee
                <br></br>
                Full Lifetime Access
                </p>

                <div className="sidebar-link">
                    <a href="#">Share</a>
                    <a href="#">Gift this course</a>
                    <a href="#">Apply coupon</a>
                </div>
            </div>
        </div>

        
        </div>
    )
}

export default Learn;