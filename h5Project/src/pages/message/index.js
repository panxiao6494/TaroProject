
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Form, Button } from '@tarojs/components';
import Tabbar from '../../components/tabBar/index';
import { connect } from '@tarojs/redux';
import { add, minus, asyncAdd } from '../../redux/actions/counter';

class Mesg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {
                name: 'px',
                age: 19
            }
        }
    }


    componentDidMount() {
        this.props.asyncAdd({
            name: 'px',
            id: 34
        });//异步传参
    }

    render() {
        console.log(this.props, 111111)
        return (
            <View>
                <View className='todo'>
                    <Button className='add_btn' onClick={this.props.add}>+</Button>
                    <Button className='dec_btn' onClick={this.props.dec}>-</Button>
                    <View>{this.props.counter.num}</View>
                </View>
                <Tabbar index={3} />
            </View>
        );
    }
}

//连接的是reducer/index暴露出来的参数
export default connect(({ counter }) => ({
    counter
}), (dispatch) => ({
    add() {
        dispatch(add())
    },
    dec() {
        dispatch(minus())
    },
    asyncAdd(obj) {
        dispatch(asyncAdd(obj))
    }
}))(Mesg);

