import React from 'react'
import "./Footer.css"
import logos from "../Assets/logos.svg"
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer_main' >
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={logos} alt="" />
                        </div>
                        <div className="col-lg-3 mt">Terms & Conditions</div>
                        <div className="col-lg-3 mt">Privacy Policy</div>
                        <div className="col-lg-2 mt">Multisend</div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-5 p-0" >
                            <AiOutlineTwitter className='footer_icons'></AiOutlineTwitter>
                            <FaTelegramPlane className='footer_icons'></FaTelegramPlane>
                            <BsInstagram className='footer_icons'></BsInstagram>
                            <FaDiscord className='footer_icons'></FaDiscord>
                        </div>
                        <div className="col-lg-7 p-0">
                            <p>© 2022 Palmare Ltd. All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}
 
export default Footer
