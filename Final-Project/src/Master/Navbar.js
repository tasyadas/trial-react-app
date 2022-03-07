import { useContext } from "react";
import { Layout, Menu } from 'antd';
import { MovieContext } from '../context/MovieContext';
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie'

const { Header } = Layout;

const Navbar = () => {
  let history = useHistory()
  const {token, setToken} = useContext(MovieContext)

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Movie</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/game-cards">Game</Link></Menu.Item>
        {Cookies.get('token') === undefined || !token ? 
          <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item> : <Menu.Item key="3" onClick={ () => {
          Cookies.remove('token')
          setToken(false)
          history.push('/login')
        }}>Logout</Menu.Item>}
        {(Cookies.get('token') === undefined || !token) ? <Menu.Item key="4"><Link to="/register">Register</Link></Menu.Item> : <Menu.Item key="4" onClick={ () => {
          history.push('/change-password')
        }}>Change Password</Menu.Item>}
      </Menu>
    </Header>
  )
};

export default Navbar;