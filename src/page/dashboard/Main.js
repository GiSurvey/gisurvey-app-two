import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Image, Avatar, Space, Input } from 'antd';

import {
  LogoutOutlined,
  FundProjectionScreenOutlined,
  InsertRowAboveOutlined,
  FileProtectOutlined,
  UserOutlined,
  SoundOutlined 
} from '@ant-design/icons';
import LocationAnalysis from './locationAnalysis/LocationAnalysis';
import Recommendations from './recommendations/Recommendations';
import News from './news/News'
import Charts from './charts/Charts'
import { useAuth } from './../../context/AuthContext';
const { Search } = Input;
function getItem(label, key, icon, children, disabled) {
  return {
    key,
    icon,
    children,
    label,
    disabled,
  };
}

const { Header, Content, Footer, Sider } = Layout;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Main = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate();
    const { logout } = useAuth();
  
    const handleLogout = () => {
      logout(); // Update authentication state to false
      navigate('/'); // Navigate to the homepage or login page
    };
    const items = [
     
      /* getItem(<Link to="/dashboard/criteriaOverview">Criteria Overview</Link>, '1', <FileProtectOutlined />), */
      getItem(<Link to="/dashboard/charts">Charts</Link>, '1', <FileProtectOutlined />),
      getItem(<Link to="/dashboard/locationAnalysis">Location Analysis</Link>, '2', <FundProjectionScreenOutlined />),
      getItem(<Link to="/dashboard/recommendations">Recommendations</Link>, '3', <InsertRowAboveOutlined />),
      getItem(<Link to="/dashboard/news">News</Link>, '4', <SoundOutlined /> ),
  
    ];
  return (

    <Layout style={{ minHeight: '100vh' }}>
       <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
          <div className="logo"  style={{width:"100%", height:"64px", backgroundColor:"gray"}}></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}  items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: "15px 20px", background: "white", display:"flex", justifyContent:'flex-end'}} > 
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
              marginRight: 20
            }}
          />
          <Avatar icon={<UserOutlined />}  style={{marginRight: 6 , backgroundColor: '#1677ff'}}/>
          <Button shape="circle" icon={ <LogoutOutlined />}  onClick={handleLogout}  style={{backgroundColor: '#f56a00', color:"white", fontSize:"15px"}}  />
        
          </Header>
          <Content style={{ margin: '15px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24,  height:"100%" }}>
              <Routes>
               
               {/*  <Route path="/criteriaOverview" element={<CriteriaOverview />} /> */}
                <Route path="/charts" element={<Charts />} />
                <Route path="/locationAnalysis" element={<LocationAnalysis />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </Layout>

  );
};

export default Main;
