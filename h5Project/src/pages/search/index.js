
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Image } from '@tarojs/components';
import Tabbar from '../../components/tabBar/index';
import './index.less'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: 0,
            gameCate: [
                '全部', '手游', '端游'
            ]
        }
    }
    state = {}

    componentDidMount() { }
    chooseCate(idx) {
        console.log(idx);
        this.setState({
            cur: idx
        })
    }
    render() {
        return (
            <View className="search">
                <View className="topSearch">
                    <View className="search_box">
                        <Image src={require('../../images/search.png')} style={{ width: '25px', height: '25px' }}></Image>
                        <Input placeholder="输入游戏名称搜索" />
                    </View>
                </View>
                <View className="game_tab">
                    {
                        this.state.gameCate.map((item, index) => {
                            return (
                                <View key={index} className={index == this.state.cur ? "active" : ''} onClick={this.chooseCate.bind(this, index)}>{item}</View>
                            )
                        })
                    }
                </View>
                <Tabbar index={1} />
            </View>
        );
    }
}
export default Search;
