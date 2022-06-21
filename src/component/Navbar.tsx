import { faCartShopping, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

type PrivateProps = {
  focus: number
}

const Navbar = ({focus}:PrivateProps) => {
  const [Active, setActive] = useState(focus);
    const menus = [
      {name:"หน้าหลัก", width: "5.3em", dis: "0px", link:"/"},
      {name:"เกี่ยวกับเรา", width: "6.5em", dis: "82px", link: "/about"},
      {name:"บริจาค", width: "4.2em", dis: "187px", link: "/donate"},
      {name:"ร้านค้า", width: "4.2em", dis: "259px", link: "/shop"},
      {name:"บริการ", width: "4.2em", dis: "331px", link: "/service"},
      {name:"ข่าวสาร", width: "4.6em", dis: "402px", link: "/news"},
      {name:"ติดต่อ", width: "4em", dis: "481px", link: "/contact"}

    ]
    
  return (
        <header>
          <h1> <img src="./icon.png" alt="" /> ร้านเกื้อกูล</h1>
            <nav>
                <ul>
                    {
                      menus.map((menu, i)=>(
                        <li className={`list${Active === i ? 'Active' : ''}`}>
                          {/* <Link to={menu.link} onClick={()=>setActive(i)}>{menu.name}</Link> */}
                          <Link to={menu.link} onClick={()=>{setActive(i)}} className="nav-link">{menu.name}</Link>
                        </li>
                      ))
                    }
                    {/* <Link to="shop">test</Link> */}
                    <div className="indicator" style={{width: `${menus[Active].width}`, transform: `translate(${menus[Active].dis})`}}></div>
                </ul>
            </nav>
            <div>
              <FontAwesomeIcon inverse icon={faCartShopping} size="lg"/>
              <FontAwesomeIcon inverse icon={faCircleUser} size="lg"/>
              
            </div>
        </header>
  )
}

export default Navbar