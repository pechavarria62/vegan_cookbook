import React from 'react';
import './App.css';
// import Header from './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const App =()=> {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo"
        style={{
          textAlign: 'center',
        }} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(5).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
              textAlign: 'right',
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Paem.io
      </Footer>
    </Layout>
    // <div className="App">
    //     <Header/>
        
    //     <Body/>


    //     <Footer/>

    // </div>
  );
};

export default App;
