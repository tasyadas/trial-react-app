import React, { useContext } from "react";
import Nav from './Master/Navbar';
import Sidebar from './Master/Sidebar';
import {MovieContext} from './context/MovieContext';
import Movie from './components/Movie';
import Game from './components/Game';
import Login from './components/Login';
import Register from './components/Register';
import ChangePassword from './components/ChangePassword';
import App from './Master/Home';
import GameCard from './Master/GameCard';
import DetailMovie from './components/DetailMovie';
import DetailGame from './components/DetailGame';
import FormMovie from './components/FormMovie';
import FormGame from './components/FormGame';

import { Layout, Breadcrumb } from "antd";
import Cookies from 'js-cookie'

import "./App.css";
import "./assets/css/index.css";



import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";


const { Footer, Content } = Layout;

const Routes = () => {

  const {token} = useContext(MovieContext)
  const RouteLogin = ({...props}) => {
    if( Cookies.get('token') !== undefined && token ) {
      return <Redirect to='/' />
    } else {
      return <Router {...props} />
    }
  }

  return (
    <Router>
    <Layout>
      <Nav />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          {Cookies.get('token') !== undefined && token && <Sidebar />}
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/movies">
                    <Movie />
                </Route>
                <Route exact path="/games">
                    <Game />
                </Route>
                <Route exact path="/game-cards">
                    <GameCard />
                </Route>
                <Route exact path="/movie/show/:slug">
                    <DetailMovie />
                </Route>
                <Route exact path="/game/show/:slug">
                    <DetailGame />
                </Route>
                <Route exact path="/movie/create">
                    <FormMovie />
                </Route>
                <Route exact path="/movie/edit/:slug">
                    <FormMovie />
                </Route>
                <Route exact path="/game/create">
                    <FormGame />
                </Route>
                <Route exact path="/game/edit/:slug">
                    <FormGame />
                </Route>
                <RouteLogin exact path="/login">
                    <Login />
                </RouteLogin>
                <RouteLogin exact path="/register">
                    <Register />
                </RouteLogin>
                <Route exact path="/change-password">
                    <ChangePassword />
                </Route>
            </Switch>
          </Content>
        </Layout>
      </Content>
        <Footer style={{ textAlign: 'center' }}>Final Project ReactJS Sanbercode</Footer>
    </Layout>
    </Router>)
}

export default Routes;