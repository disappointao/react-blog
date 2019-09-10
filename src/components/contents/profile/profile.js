import React, {Component} from 'react';
import {Layout, Row,Col,Icon,Button} from 'antd';
import avatar from '../../../static/assets/img/default.png';
import './profile.css';
export default class Profile extends Component {
  render() {
    return (
        <Layout style={{margin: 70}}>
          <div className='profile-title'>
            我的个人资料
          </div>
          <form>
            <Row>
              <Col span={8}>
                <label className="control-label">头像</label>
              </Col>
              <Col span={8}>
                <label className="form-image">
                  <input id="avatar" type="file"/>
                    <img src={avatar}/>
                      <i><Icon type='edit'></Icon></i>
                </label>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <label htmlFor="email" className='control-label'>邮箱</label>
              </Col>
              <Col span={8}>
                <input id="email" className="form-control" name="email" type="type" defaultValue="w@zce.me" placeholder="邮箱" readOnly/>
                  <p className="help-block">登录邮箱不允许修改</p>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <label htmlFor="slug" className='control-label'>别名</label>
              </Col>
              <Col span={8}>
                <input id="slug" className="form-control" name="slug" type="type" defaultValue="ao" placeholder="别名" />
                <p className="help-block">https://github.com/disappointao</p>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <label htmlFor="nickname" className='control-label'>昵称</label>
              </Col>
              <Col span={8}>
                <input id="nickname" className="form-control" name="nickname" type="type" defaultValue="刘创凹" placeholder="绰号" />
                <p className="help-block">限定在2-16个字符内</p>
              </Col>
            </Row>
            <Row>
            <Col span={8}>
              <label htmlFor="bio" className='control-label'>简介</label>
            </Col>
            <Col span={8}>
              <textarea id="bio" className="form-control" placeholder="Bio" cols="30" rows="6" defaultValue='Make It Better!'/>
            </Col>
          </Row>
            <Row>
              <Col span={8}/>
              <Col span={8}>
                <Button type='primary'>更新</Button>
                <a href="/home" className='editPass'>修改密码</a>
              </Col>
            </Row>
          </form>
        </Layout>
    );
  }
}