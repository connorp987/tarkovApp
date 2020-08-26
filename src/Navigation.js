import React, {useState} from 'react'

import { Menu, Icon } from "antd";
import { HomeOutlined, TableOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";
import * as ROUTES from "./routes";

export default function Navigation() {
  const [current, setCurrent] = useState("viking");

  function handleClick(e) {
    if (e !== undefined) {
      setCurrent(e.key);
    }
  }

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" style={{ marginLeft: "30px" }}>
        <Link style={{ textDecoration: "none" }} to={ROUTES.HOME}>
        <HomeOutlined />Home
        </Link>
      </Menu.Item>
      <Menu.Item key="table">
        <Link style={{ textDecoration: "none" }} to={ROUTES.TABLE}>
        <TableOutlined />Only Chart
      </Link>
      </Menu.Item>
    </Menu>
  )
}