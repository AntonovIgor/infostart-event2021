import { Layout, Breadcrumb, Table } from 'antd';
import { useAsync } from 'react-async';
import { loadInvoices } from '../../serivce/api';
import MainMenu from '../../components/main-menu/main-menu';
import { columns } from './columns';
import Footer from '../../components/footer/footer';

const { Header, Content, Sider } = Layout;

export default function InvoicesPage():JSX.Element {
  const { data, isPending } = useAsync({ promiseFn: loadInvoices });
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <MainMenu selectedItem="1" />
      </Sider>
      <Layout className="site-layout">
          <Header className="header site-layout-background" />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item>Список чеков</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background content">
              <Table
                columns={columns}
                dataSource={isPending ? [] : data.data}
                loading={isPending}
                rowKey={(row) => row.id}
              />
            </div>
          </Content>
          <Footer />
        </Layout>
    </Layout>
  )
}
