
import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Tabbar from '../../components/tabBar/index'
class Mesg extends Component {
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
                <Text>信息</Text>


                <Tabbar index={3} />
            </View>
        );
    }
}
export default Mesg;
