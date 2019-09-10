import  React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Table, Col, Row} from 'antd';
import {Layout} from 'antd';

import './index.css';
const {Content: Index}=Layout;

const columns = [
  {
    title: '站点统计:',
    dataIndex: 'name'
  }
];
const data = [
  {
    key: '1',
    name: '10篇文章（2篇草稿）'
  },
  {
    key: '2',
    name: '6个分类'
  },
  {
    key: '3',
    name: '5条评论（1条待审核）'
  }
];
export default class Content_home extends  Component {
  render() {
    return (
        <Index style={{ margin: 70 }}>
          <div className='content'>
            <h1>One Belt,One Road</h1>
            <p>Thoughts,stories and ideas</p>
            <p className='button'>
              <Link to='/home/passage'>
                <span>写文章</span>
              </Link>
            </p>
          </div>
          <Row>
            <Col span={8}>
              <Table columns={columns} dataSource={data} pagination={false} bordered />
            </Col>
          </Row>
        </Index>
    );
  }
}