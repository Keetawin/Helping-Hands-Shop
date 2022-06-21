import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Home() {
  return (
    <>
      <Navbar focus={0}/>
      <div className='home-page'>
        <section className='card-section'>
          <div className="card donate-card">
            <div className="text-container">
              <h2>ช่วยเหลือผู้ป่วยระยะสุดท้าย</h2>
              <p>บริจาคสิ่งของที่ไม่ใช้แล้วเพื่อมาจัดจำหน่ายต่อ หรือสมทบทุนเพื่อนำรายได้ไปช่วยเหลือ ผู้ป่วยระยะสุดท้าย</p>
            </div>
            <img src="./1.png" alt=""/>
            <button>บริจาค</button>
          </div>
          <div className="card shop-card">
            <div className="text-container">
              <h2>สินค้าใหม่ และมือสองสภาพดี ต่อชีวิตผู้ป่วย</h2>
              <p>อิ่มใจทั้งผู้ให้ สุขใจผู้รับ </p>
              <br />
            </div>
            <img src="./2.png" alt=""/>
            <button>ร้านค้า</button>
          </div>
          <div className="card registry-card grid-col-span-2">
            <div className="text-container">
              <h2>ยืมอุปกรณ์ทางการแพทย์ “ฟรี”</h2>
              <p>ช่วยเหลือผู้ป่วยยากไร้ ให้ยืมอุปกรณ์ทางการแพทย์โดยไม่เสียค่าใช้จ่าย</p>
              <br />
            </div>
            <img src="./3.png" alt=""/>
            <button>ลงทะเบียน</button>
          </div>
        </section>
        <section className='about-section'>
          <div className="text-header-container">
            <h2 style={{color: "#3EBDC0"}}>เกื้<span style={{color: "#DCC748"}}>อ</span><span style={{color: "#5E61B7"}}>กู</span><span style={{color: "#DCC748"}}>ล</span></h2>
            <h3>ธุรกิจเพื่อสังคม<br/><span>Social Enterprise</span></h3>
          </div>
          <div className='text-container' >
            <img src="./4.png" alt="" />
            <div>
              <p className='body-text'>เกิดจากความร่วมมือกันของบุคลากรทางการแพทย์ องค์กรบำเพ็ญประโยชน์ 
                และภาคประชาสังคมในจังหวัด<br/><br/>ตั้งขึ้นเพื่อจำหน่ายสินค้ามือสองและใหม่ที่คนใจบุญนำมา <span>“เกื้อกูล”</span> เพื่อนำ
                รายได้มาเปลี่ยนเป็นทุนสำหรับช่วยเหลือผู้ป่วยของโรงพยาบาลพุทธชินราช
              </p>
              <button>&gt;  เพิ่มเติมเกี่ยวกับเรา</button>
            </div>
          </div>
        </section>
        <section className="donate-section">
          <h3>ยอดเงินบริจาควันนี้</h3>
          <h2 className="total-donate-today">999,999,999 บาท</h2>
          <p>**รายได้ทั้งหมดมาจากการจำหน่ายสินค้า และเงินบริจาค**</p>
          <div className='donate-stat'>
            <div className="total-donate">
              <p>ยอดเงินบริจาคสะสม</p>
              <p>10,000,000.999</p>
              <p>บาท</p>
            </div>
            <div className="total-help">
              <p>ผู้ที่ได้รับการช่วยเหลือ</p>
              <p>239</p>
              <p>คน</p>
            </div>
          </div>
        </section>
        <section className="new-activity">
          <h3>ข่าวสารและกิจกรรม</h3>
          <div className="img-frame">
            <div className="frame"></div>
            <div className="frame"></div>
          </div>
          <button>&gt;  ข่าวสารเพิ่มเติม</button>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Home