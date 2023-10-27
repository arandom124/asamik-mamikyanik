import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import './SideMenu.scss';

export function SideMenu(props) {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <div className="side-menu-admin">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const { pathname } = props;
  const { auth } = useAuth();

  return (
    <Menu className="btn btn-outline" fixed="left" inverted vertical>
      <Menu.Item as={Link} to="/admin" active={pathname === '/admin'}>
        <p className='text-orange-500 text-xl text-left'><Icon name="clipboard list " /> Pedidos</p>
      </Menu.Item>
      <Menu.Item as={Link} to="/admin/tables" active={pathname === '/admin/tables'}>
      <p className='text-orange-500 text-xl text-left'><Icon name="utensils" /> Mesas</p>
      </Menu.Item>
      <Menu.Item as={Link} to="/admin/payments-history" active={pathname === '/admin/payments-history'}>
      <p className='text-orange-500 text-xl text-left'><Icon name="history" /> Historial de pagos</p>
      </Menu.Item>
      <Menu.Item as={Link} to="/admin/categories" active={pathname === '/admin/categories'}>
      <p className='text-orange-500 text-xl text-left'><Icon name="th" /> Categorías</p>
      </Menu.Item>
      <Menu.Item as={Link} to="/admin/products" active={pathname === '/admin/products'}>
      <p className='text-orange-500 text-xl text-left'><Icon name="coffee" /> Productos</p>
      </Menu.Item>
      {auth.me?.is_staff && (
        <Menu.Item as={Link} to="/admin/users" active={pathname === '/admin/users'}>
          <p className='text-orange-500 text-xl text-left'><Icon name="users" /> Usuarios</p>
        </Menu.Item>
      )}
    </Menu>
  );
}
