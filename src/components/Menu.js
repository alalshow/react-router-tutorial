import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink, withRouter} from 'react-router-dom';
//현재 주소와 해당 컴포넌트의 목적지 주소가 일치한다면
// 특정 스타일 또는 클래스를 지정할 수 있습니다.
const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={activeStyle}>홈</NavLink>
                </li> 
                <li>
                    <NavLink exact to="/about" activeStyle={activeStyle}>소개</NavLink>
                </li>    
                <li>
                    <NavLink exact to="/about/frank" activeStyle={activeStyle}>Frank</NavLink>
                </li> 
                <li>
                    <NavLink to="/posts" activeStyle={activeStyle}>포스트 목록</NavLink>
                </li>                                             
            </ul>
        </div>
    )
}

export default withRouter(Menu);