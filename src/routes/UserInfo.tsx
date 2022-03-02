import { PageHeader, Layout, List, Typography, Table, Space, Input, Button, Empty } from 'antd'
import { ColumnsType, TableProps } from 'antd/lib/table'
import React, { useEffect, useState } from 'react'
// import { getCustomer, getHotlines } from '../service/api'
import { IHotlineShortInfo, IUserInfo } from '../types/userInfo'
import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/authSlice';
import { ArrowRightOutlined, DownloadOutlined, SearchOutlined } from '@ant-design/icons'
import Highlighter from "react-highlight-words";
import Modal from 'antd/lib/modal/Modal'
import { vietnameDatetime } from '../utils/datetime'
const { Content } = Layout

export const UserInfo = () => {
  let auth = useAppSelector(selectAuth)

  
  return (
    <div id='user-info-page'>
      <PageHeader>
        <Typography.Title level={2}>
          Thông tin tài khoản
        </Typography.Title>
      </PageHeader>
      <Content>
        User {auth.user}
      </Content>
    </div>
  )
}