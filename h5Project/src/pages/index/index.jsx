import Taro, { Component, connectSocket } from "@tarojs/taro";
import $httpRequest from "../../http";
import Tabbar from '../../components/tabBar/index'
import {
  View,
  Text,
  Button,
  Navigator,
  Image,
  Input,
  Swiper,
  SwiperItem
} from "@tarojs/components";
import Nav from './nav'
import "./index.less";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      swiperList: [
        { url: require('../../images/index/mebg.png') },
        { url: require('../../images/index/mebg.png') },
        { url: require('../../images/index/mebg.png') },
        { url: require('../../images/index/bgl.png') }
      ]
    };
  }
  componentWillMount() { }

  componentDidMount() {
    $httpRequest("POST", "category/listCommodityByCategoryId", {}).then(res => {
      console.log(res);
    });
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: "首页"
  };

  swipetChange(e) {
    //console.log(e.detail.current)
    let current = e.detail.current;
    this.setState({
      current: current
    })

  }
  render() {
    const { current } = this.state;
    console.log(current, 3)
    return (
      <View className="index">
        <View className="head">
          <Swiper className="swiper_box" autoplay circular onChange={this.swipetChange.bind(this)} interval={1500}>
            {
              this.state.swiperList.map((item, index) => {
                return (
                  <SwiperItem key={index} style={{ width: '100%' }}>
                    <Image src={item.url} className="mebg"></Image>
                  </SwiperItem>
                )
              })
            }
          </Swiper>
          <View className="idots">
            {
              this.state.swiperList.map((item, index) => {
                return (
                  <View className={index == current ? 'active' : 'idot'}></View>
                )
              })
            }
          </View>
          <View className="topSearch">
            <Image src={require('../../images/log.png')} style={{ width: '80px', height: '50px', zIndex: '9' }}></Image>
            <View className="ipt">
              <Input placeholder="请输入搜索名称" />
              <Image src={require('../../images/search.png')} style={{ width: '23px', height: '23px' }}></Image>
            </View>

            <Navigator className="login" url="/pages/login/login">
              登录
          </Navigator>
          </View>
        </View>
        <Nav />
        <Tabbar index={0} />
      </View>
    );
  }
}
