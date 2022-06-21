import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
        <Navbar focus={1}/>
        <div className='about-page'>  
            <h1>
                <h1 style={{color: "#3EBDC0"}}>เกื้<span style={{color: "#DCC748"}}>อ</span><span style={{color: "#5E61B7"}}>กู</span><span style={{color: "#DCC748"}}>ล</span></h1>
                <h2>คือใคร?</h2>
            </h1>
            <p className="body-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora autem possimus enim ipsum illo commodi mollitia vitae odit nisi voluptates, dolorem, illum veniam ab qui eaque fugiat, similique ducimus omnis officiis? Quae iste reiciendis magnam nihil temporibus non ipsum numquam iusto praesentium pariatur magni repudiandae dolorum veniam nesciunt consequuntur mollitia quisquam voluptas, accusantium perferendis blanditiis nobis. Similique in eligendi dolorum delectus ipsa provident totam labore voluptas doloremque, doloribus rerum expedita vero necessitatibus dolores sunt sequi voluptatibus quis incidunt minus cum dolor soluta facere fugit? Molestias ipsa veniam quae vel! Laborum.
            </p>
            <p className="body-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora autem possimus enim ipsum illo commodi mollitia vitae odit nisi voluptates, dolorem, illum veniam ab qui eaque fugiat, similique ducimus omnis officiis? Quae iste reiciendis magnam nihil temporibus non ipsum numquam iusto praesentium pariatur magni repudiandae dolorum veniam nesciunt consequuntur mollitia quisquam voluptas, accusantium perferendis blanditiis nobis. Similique in eligendi dolorum delectus ipsa provident totam labore voluptas doloremque, doloribus rerum expedita vero necessitatibus dolores sunt sequi voluptatibus quis incidunt minus cum dolor soluta facere fugit? Molestias ipsa veniam quae vel! Laborum.
            </p>
            <p className="body-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora autem possimus enim ipsum illo commodi mollitia vitae odit nisi voluptates, dolorem, illum veniam ab qui eaque fugiat, similique ducimus omnis officiis? Quae iste reiciendis magnam nihil temporibus non ipsum numquam iusto praesentium pariatur magni repudiandae dolorum veniam nesciunt consequuntur mollitia quisquam voluptas, accusantium perferendis blanditiis nobis. Similique in eligendi dolorum delectus ipsa provident totam labore voluptas doloremque, doloribus rerum expedita vero necessitatibus dolores sunt sequi voluptatibus quis incidunt minus cum dolor soluta facere fugit? Molestias ipsa veniam quae vel! Laborum.
            </p>
            <p className="body-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora autem possimus enim ipsum illo commodi mollitia vitae odit nisi voluptates, dolorem, illum veniam ab qui eaque fugiat, similique ducimus omnis officiis? Quae iste reiciendis magnam nihil temporibus non ipsum numquam iusto praesentium pariatur magni repudiandae dolorum veniam nesciunt consequuntur mollitia quisquam voluptas, accusantium perferendis blanditiis nobis. Similique in eligendi dolorum delectus ipsa provident totam labore voluptas doloremque, doloribus rerum expedita vero necessitatibus dolores sunt sequi voluptatibus quis incidunt minus cum dolor soluta facere fugit? Molestias ipsa veniam quae vel! Laborum.
            </p>
            <p className="body-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora autem possimus enim ipsum illo commodi mollitia vitae odit nisi voluptates, dolorem, illum veniam ab qui eaque fugiat, similique ducimus omnis officiis? Quae iste reiciendis magnam nihil temporibus non ipsum numquam iusto praesentium pariatur magni repudiandae dolorum veniam nesciunt consequuntur mollitia quisquam voluptas, accusantium perferendis blanditiis nobis. Similique in eligendi dolorum delectus ipsa provident totam labore voluptas doloremque, doloribus rerum expedita vero necessitatibus dolores sunt sequi voluptatibus quis incidunt minus cum dolor soluta facere fugit? Molestias ipsa veniam quae vel! Laborum.
            </p>
            <section className='board-section'>
                <h3>คณะกรรมการ</h3>
                <div className='board-frame'>
                    {
                        [...Array(12)].map((x, i)=> 
                        <div className="board-card">
                            <FontAwesomeIcon icon={faCircleUser} className="profile"/>
                            <p>ชื่อ-นามสกุล</p>
                            <span>ตำแหน่ง</span>
                        </div>
                        )
                    }
                </div>
            </section>
        </div>
        <Footer/>
    </>
  )
}

export default About