import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

function Footer() {
  return (
    <>
        <footer>
            <div className='co-op'>
                <img src="./hospital-logo.png" alt="" />
                <img src="./rotary-international.png" alt="" />
            </div>
            <section>
                <div>
                    <h4>ติดต่อเรา</h4>
                    <p><a target="_blank" href="https://www.google.com/maps/search/%E0%B8%A3%E0%B9%89%E0%B8%B2%E ร้านเกื้อกูล  รพ. พุทธชินราชพิษณุโลก 90 0%B8%99%E0%B9%80%E0%B8%81%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%81%E0%B8%B9%E0%B8%A5+%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%8A%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%8A+%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%97%E0%B8%B5%E0%B9%88+90+%E0%B8%96.%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%95%E0%B8%A3%E0%B8%9B%E0%B8%B4%E0%B8%8E%E0%B8%81+%E0%B8%95.%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%AD.%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%88.%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%93%E0%B8%B8%E0%B9%82%E0%B8%A5%E0%B8%81+65000/@16.8081819,100.2617221,17z">ถ.ศรีธรรมไตรปิฎก <br/>ต.ในเมือง อ.เมือง จ.พิษณุโลก 65000
                    </a></p>
                    <p> <FontAwesomeIcon icon={faPhone}/> 089-7058378, 095-2639699</p>
                    <p> <FontAwesomeIcon icon={faFacebook}/><a target="_blank" href="https://www.facebook.com/HelpingHelping.hands/"> ร้านเกื้อกูล Helping Hands Shop</a></p>
                </div>
                <div>
                    <br />
                    <br />
                    <p>เวลาทำการ:</p>
                    <p>จันทร์ - ศุกร์ 8.30-17.30 ​น.<br/>เสาร์ 8.30-13.30​ น.</p>
                    <p>ปิดวันอาทิตย์และวันหยุด​นักขัตฤกษ์​</p>
                </div>
            </section>
            <span>2020 © HELPING HANDS SHOP  </span>
        </footer>
    </>
  )
}

export default Footer