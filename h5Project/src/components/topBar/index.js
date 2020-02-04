
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.less'
class TopBar extends Component {
    constructor(props) {
        super(props)
    }
    state = {}
    componentWillMount() { }
    componentDidMount() { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    backPage() {
        Taro.navigateBack()
    }
    render() {
        return (
            <View className="top">
                <Image src={require('../../images/backIcon.png')} onClick={this.backPage} className="back_img" />
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
export default TopBar;
