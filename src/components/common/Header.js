import {NavLink} from 'react-router-dom';

function Header(){
  const active = {color: "black"};
  return(
    <header>
      <div className="inner">
        <h1><NavLink exact to="/">Portfolio</NavLink></h1>

        <ul id="gnb">
          <li><NavLink activeStyle={active} exact to="/about">About</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/product">Product</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/guide">Guide</NavLink></li>
        </ul>

        <ul id="util">
          <li><NavLink activeStyle={active} exact to="/help" href="#">Help</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/contact" href="#">Contact</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/join" href="#">Join</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/search" href="#"><i class="fas fa-search"></i></NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;