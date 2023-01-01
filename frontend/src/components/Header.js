import React from 'react';
import { Layout ,Menu} from 'antd';
const { Header } = Layout;

function HeaderContent() {
    
    return (
        <Layout>
            <Header>
                <div className='logo'/>
                <Menu
                    
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(5).fill(null).map((_, index) => {
                    const key = index + 1;
                    return {
                        key,
                        label: `nav ${key}`,
                    };
                    })}
                />
                
            </Header>
        </Layout>
    );
};

export default HeaderContent;