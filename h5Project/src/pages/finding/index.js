
import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Tabbar from '../../components/tabBar/index'
class Finding extends Component {
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
                <Text>发现</Text>
                <Tabbar index={2} />
            </View>
        );
    }
}
export default Finding;
