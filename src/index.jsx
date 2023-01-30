import React, { Component } from 'react';
import './index.less';

class VerificationCode extends Component {
  state = {
    curCode: '1234',
    value: '',
  };
  componentDidMount() {
    this.props?.onRef?.(this);
    this.draw();
  }
  reset = () => {
    this.setState({ value: '' });
  };
  randomCode = () => (1000 + Math.floor(Math.random() * 8999)).toString();
  randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // return 'rgb(' + r + ',' + g + ',' + b + ')';
    return `rgb(${r},${g},${b})`;
  };

  getCurCode = () => {
    return this.state.curCode
  }

  draw = () => {
    // const {curCode} = this.state
    const code = this.randomCode();
    const showNum = [];
    const canvas = document.getElementById('verification_code_image');
    if (!canvas) {return} 
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const context = canvas.getContext('2d'); // 获取到canvas画图的环境，演员表演的舞台
    context.fillStyle = '#ffffff';
    context.beginPath();
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.closePath();

    for (let i = 0, len = code.length; i < len; i++) {
      // 这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
      // const j = Math.floor(Math.random() * aLength) // 获取到随机的索引值
      // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
      const deg = Math.random() - 0.5; // 产生一个随机弧度
      // const txt = aCode[j] // 得到随机的一个内容
      const txt = code[i];
      showNum[i] = txt.toLowerCase();
      const x = 8 + i * 16; // 文字在canvas上的x坐标
      const y = 16 + Math.random() * 10; // 文字在canvas上的y坐标
      context.font = 'bold 22px 微软雅黑';

      context.translate(x, y);
      context.rotate(deg);

      context.fillStyle = this.randomColor();
      context.fillText(txt, 0, 0);

      context.rotate(-deg);
      context.translate(-x, -y);
    }
    for (let i = 0; i <= 5; i++) {
      // 验证码上显示线条
      context.strokeStyle = this.randomColor();
      context.beginPath();
      context.moveTo(Math.random() * canvasWidth, Math.random() * canvasHeight);
      context.lineTo(Math.random() * canvasWidth, Math.random() * canvasHeight);
      context.stroke();
    }
    for (let i = 0; i <= 30; i++) {
      // 验证码上显示小点
      context.strokeStyle = this.randomColor();
      context.beginPath();
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight;
      context.moveTo(x, y);
      context.lineTo(x + 1, y + 1);
      context.stroke();
    }
    this.setState({ curCode: code });
    this.reset();
  };

  render() {
    const { width, height } = this.props;
    const { value } = this.state;
    return (
      <div className="m-common-verficationCode">
        <canvas
          title="点击刷新"
          id="verification_code_image"
          onClick={this.draw}
          width={width || 72}
          height={height || 30}
        />
      </div>
    );
  }
}
export default VerificationCode;
