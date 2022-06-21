import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Shop() {
  return (
    <>
        <Navbar focus={3}/>
        <div className='shop-page'>
            <h2>ร้านค้า</h2>
            <p className='body-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat magni labore itaque minima, aspernatur totam? Voluptates sint nemo repellat earum incidunt reprehenderit doloremque, fugit sequi, officia dolorem harum reiciendis labore error! Distinctio quas tempore, animi quisquam possimus, accusamus ratione libero illum quo deleniti velit facere. At, eum eaque! Aliquid suscipit ullam nemo, assumenda tempora, cumque facere labore laboriosam temporibus ratione dolores in odit eligendi minus nobis voluptates qui! Atque, minima omnis doloribus amet ut quidem provident animi cupiditate facilis sit perspiciatis. Dignissimos sequi beatae soluta cumque saepe magnam vel fugit nulla iste amet itaque laudantium possimus veniam aut, sit ipsa, quisquam natus distinctio iure odio sed voluptate. Doloribus officiis perspiciatis recusandae voluptatibus quia, nihil esse? Sapiente hic fuga exercitationem. Corrupti?</p>
            <span className='dropdown'>หมวดหมู่</span>
            <div className="dropdown-content">
                <p>test</p>     
                <p>test</p>     
                <p>test</p>     
            </div>   
            <section className="shopping-card-section">
                {[...Array(9)].map((x, i)=>
                    <div className="shopping-card">
                        <div className="img"></div>
                        <h3>ชื่อสินค้า</h3>
                        <p>หมวดหมู่</p>
                        <h4>ราคา 69 บาท</h4>
                        <FontAwesomeIcon icon={faCartShopping} inverse className="shopping-icon"/>
                    </div>
                )}
            </section>
            <div className="pagination">1 2 3 4 ... 17 18 19</div>
        </div>
        <Footer/>
    </>
  )
}

export default Shop