import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Home, About} from 'pages';
import Menu from 'components/Menu';

////exact 값을 입력하지 않으니 About 페이지에 들어왔는데 
//Home 라우트도 보입니다.
// 이렇게 / 경로에 매칭을 시키려면 꼭 exact 값을 설정해야 합니다.
const App = () => {
  return (
    <div>
      리액트 라우터를 배워봅시다.
      <Menu/>
      <Route exact path="/" component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route path='/about/:name' component={About}/>
    </div>
  )
}
export default App;
