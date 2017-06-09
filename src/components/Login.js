/**
 * Created by zll on 2017/6/6.
 */
import React, { Component, PropTypes } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './login.css';


const FormItem = Form.Item;
// React component
class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onLoginClick(values);
      }
    });
  }

  componentDidMount() {
  debugger;
  console.log(this.props);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="wrapper">
        <div className="content">
          <header className="content-header">Login</header>
          <section className="content-body">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '用户名不能为空!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                  )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码不能为!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                  )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                  )}
                <a className="login-forgot" href="">忘记密码</a>
                <Button type="primary" htmlType="submit" className="login-button">
                  登陆
                </Button>
                {/* Or <a href="">register now!</a>*/}
              </FormItem>
            </Form>
          </section>
        </div>
      </div>

    );
  }
  // render() {
  //     const { value ,onIncreaseClick ,onDecareaseClick} = this.props;
  //     debugger;
  //     return (
  //         <div className="wrapper">
  //             <span className="wrapper_text" ref="keyword">当前：{value}</span>   
  //             <Button type="primary" onClick={onIncreaseClick}>Increase</Button>
  //             <Button type="danger" onClick={onDecareaseClick}>Dcrease</Button>
  //         </div>
  //     )
  // }

}

Login = Form.create()(Login);

export default Login;



