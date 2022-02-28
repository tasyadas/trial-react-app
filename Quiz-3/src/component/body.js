import React, {useContext} from "react"
import { MobileContext } from "../context/mobileContext"

import "../assets/css/style.css"


const Body = () => {
    const {mobile} = useContext(MobileContext)

    return (
    mobile.map((val, index) => {
        return (
            <>
            <div className="row">
                <div className="section">
                    <div className="card">
                        <div>
                            <h2>bame</h2>
                            <h5>Release Year : {val.year}</h5>
                            <img className="fakeimg" style={{width: "50%", height: "300px", objectFit: "cover"}} alt=""/>
                            <br />
                            <br />
                            <div>
                                <strong>Price: {val.price}</strong><br />
                                <strong>Rating: {val.rating}</strong><br />
                                <strong>Size: {val.size}</strong><br />
                                <strong style={{marginRight: "10px"}}>Platform : {val.platform.length !== 0 ? (val.platform.length > 0 && val.platform.length > 1 ? `${val.platform.length[0]} & ${val.platform.length[1]}` : `${val.platform.length[0]}`) : '-' }
                                </strong>
                                <br />
                            </div>
                            <p>
                                <strong style={{marginRight: "10px"}}>Description :</strong>
                                {val.description}
                            </p>

                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    })
    )
}

export default Body
