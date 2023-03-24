import React from 'react'
import "./services.css"
import {TbTruckDelivery} from "react-icons/tb"
import {RiSecurePaymentLine} from "react-icons/ri"
import {GiReceiveMoney} from "react-icons/gi"
import {MdOutlineHealthAndSafety} from "react-icons/md"

const Services = () => {
  return (
    <div className="home_services">
        <div className="service_1">
            <div>
                <TbTruckDelivery className="icon"/>
                <h3 className="service_text">
                    Super Fast and Free Delivery.
                </h3>
            </div>
        </div>
        <div className="service_2">
            <div>
                <MdOutlineHealthAndSafety className="icon"/>
                <h3 className="service_text">
                    Non-Contact Shipping.
                </h3>
            </div>
            <div>
                <GiReceiveMoney className="icon"/>
                <h3 className="service_text">
                    Money back Guaranteed.
                </h3>
            </div>
        </div>
        <div className="service_3">
            <div>
                <RiSecurePaymentLine className="icon"/>
                <h3 className="service_text">
                    Super Secure payment System.
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Services