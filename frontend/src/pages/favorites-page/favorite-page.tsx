import { Layout, Breadcrumb, List, Button } from 'antd';
import { useAsync } from 'react-async';
import MainMenu from '../../components/main-menu/main-menu';
import Footer from '../../components/footer/footer';
import { loadFavorites } from '../../serivce/api';

const { Header, Content, Sider } = Layout;

type Product = {
  id: string;
  description: string;
  title: string;
}

export default function FavoritePage(): JSX.Element {
  const { data, isPending } = useAsync({ promiseFn: loadFavorites });
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <MainMenu selectedItem="2" />
      </Sider>
      <Layout className="site-layout">
          <Header className="header site-layout-background" />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item>Избранное</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background content">
              <List
                itemLayout="horizontal"
                className="favorites-list"
                loading={isPending}
                dataSource={isPending ? [] : data.data as Product[]}
                renderItem={({title, id, description}) => (
                  <List.Item
                    actions={[<Button type="text" key={`${id}-del-product`} danger>Удалить</Button>]}
                  >
                    <List.Item.Meta
                      title={title}
                      description={description}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Content>
          <Footer />
        </Layout>
    </Layout>
  );
}
