import React from "react"
import NotFoundImage from '../public/image/404_not_found.jpg'

export const NotFound = () => {

    return(
        <div className="not-found-container">
            <img src={NotFoundImage} alt="Not found error image"/>
            <span> We couldn't find page you requested. <a href="/">Return</a> to home page</span>
        </div>)
}