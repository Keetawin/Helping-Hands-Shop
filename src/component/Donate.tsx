import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Donate() {
  return (
    <>
        <Navbar focus={2}/>
        <div className='donate-page'>
            <h2>ร่วมบริจาค</h2>
            <p className="body-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, alias doloribus maxime doloremque architecto nesciunt modi atque incidunt perspiciatis, ipsum fugit corporis itaque nihil vel assumenda, facere dolorem in consequatur consequuntur ratione officia. Molestias numquam perferendis totam magni iusto deserunt asperiores dicta, aspernatur quos veniam necessitatibus doloribus repudiandae. Nemo sint vero nulla earum ab vel pariatur ex fugit aperiam eaque nesciunt voluptatibus nam reprehenderit consectetur numquam nostrum, consequatur enim tempore vitae facere? Vel sit omnis aperiam fugiat vero reiciendis autem, a, eligendi dolor at praesentium est consectetur sapiente eius! Culpa sint minus pariatur quis iste enim molestiae quod quidem, cum quasi debitis, ea, vitae ducimus ex eveniet! Magnam, aliquam iusto esse veniam eum pariatur neque nemo omnis, atque distinctio quod?</p>
            <section className="card-section">
                <div className="card card-form">
                    <div className="header">
                        <h3>1 ข้อมูลบริจาค</h3>
                    </div>
                    <form action="">
                        <div className="input">
                            <label htmlFor="amount">จำนวนเงิน</label>
                            <input type="text" id='amount' />
                        </div>
                        <div className="input">
                            <label htmlFor="name">ชื่อ-นามสกุล</label>
                            <input type="text" id='name' />
                        </div>
                        <div className="input">
                            <label htmlFor="e-mail">อึเมล</label>
                            <input type="text" id='e-mail' />
                        </div>
                        <div className="input">
                            <label htmlFor="phone-num">เบอร์โทรศัพท์</label>
                            <input type="text" id='phone-num' />
                        </div>
                        <input type="submit" value="ถัดไป >" className='submit-btn' />
                    </form>
                </div>
                <div className="card card-information">
                    <div className="header">
                        <h3>ข้อมูลสำหรับบริจาคสิ่งของ</h3>
                    </div>
                    <div className="body">
                        <h4>นำมาบริจาคด้วยตนเอง หรือส่งพัสดุมาที่ร้านเกื้อกูล</h4>
                        <p>ร้านเกื้อกูล โรงพยาบาลพุทธชินราช<br/> เลขที่ 90 ถ.ศรีธรรมไตรปิฎก ต.ในเมือง อ.เมือง จ.พิษณุโลก 65000<br/> (089-7058378 , 095-2639699)</p>
                        <div className="img">
                            <img src="./5.png" alt="" />
                            <img src="./6.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="how-to-help grid-col-span-2">
                    <h3>ท่านช่วย
                        <span style={{color: "#3EBDC0"}}>เกื้<span style={{color: "#DCC748"}}>อ</span><span style={{color: "#5E61B7"}}>กู</span><span style={{color: "#DCC748"}}>ล</span></span>
                        อะไรได้บ้าง
                    </h3>
                    <div className="card card-help">
                        <ul>
                            <li>เกื้อกูลสิ่งของมาเป็นสินค้าเพื่อขาย</li>
                            <li>เกื้อกูลแรงคัดของและขาย</li>
                            <li>เกื้อกูลทุนทรัพย์ในการดำเนินการ</li>
                        </ul>
                        <div className="img">
                            <h4>สิ่งของที่นำมาจำหน่ายต่อได้</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </>
  )
}

export default Donate