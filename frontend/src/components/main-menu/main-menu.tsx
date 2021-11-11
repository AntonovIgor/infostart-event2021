import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  FileOutlined,
  DesktopOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { AppRoute } from '../../const';

type MainMenuProps = {
  selectedItem: string;
}

export default function MainMenu ({selectedItem}: MainMenuProps): JSX.Element {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedItem]}>
      <Menu.Item key="1" icon={<DesktopOutlined />}>
        <Link to={AppRoute.Main}>Чеки</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<FileOutlined />}>
        <Link to={AppRoute.Favorites}>Избранное</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        Выход
      </Menu.Item>
    </Menu>
  );
}
