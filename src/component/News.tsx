import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function News() {
  return (
    <>
        <Navbar focus={5}/>
        <div className='news-page'>
            <h2>ข่าวสาร</h2>
            <p className='body-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat magni labore itaque minima, aspernatur totam? Voluptates sint nemo repellat earum incidunt reprehenderit doloremque, fugit sequi, officia dolorem harum reiciendis labore error! Distinctio quas tempore, animi quisquam possimus, accusamus ratione libero illum quo deleniti velit facere. At, eum eaque! Aliquid suscipit ullam nemo, assumenda tempora, cumque facere labore laboriosam temporibus ratione dolores in odit eligendi minus nobis voluptates qui! Atque, minima omnis doloribus amet ut quidem provident animi cupiditate facilis sit perspiciatis. Dignissimos sequi beatae soluta cumque saepe magnam vel fugit nulla iste amet itaque laudantium possimus veniam aut, sit ipsa, quisquam natus distinctio iure odio sed voluptate. Doloribus officiis perspiciatis recusandae voluptatibus quia, nihil esse? Sapiente hic fuga exercitationem. Corrupti?</p>
            <span className='dropdown'>หมวดหมู่</span>
            <div className="dropdown-content">
                <p>test</p>     
                <p>test</p>     
                <p>test</p>     
            </div>   
            <section className="news-card-section">
                {[...Array(9)].map((x, i)=>
                    <div className="news-card">
                        <div className="img"></div>
                        <h3>หัวข้อ</h3>
                        <p>รายละเอียด</p>
                    </div>
                )}
            </section>
            <div className="pagination">1 2 3 4 ... 17 18 19</div>
        </div>
        <Footer/>
    </>
  )
}

export default News