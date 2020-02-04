
import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Tabbar from '../../components/tabBar/index'
class Mycenter extends Component {
    constructor(props) {
        super(props)
    }
    state = {}
    componentWillMount() { }
    componentDidMount() { }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    render() {
        return (
            <View>
                <Text>我的</Text>
                <Tabbar index={4} />
            </View>
        );
    }
}
export default Mycenter;
