import { View, Text, Image, Navigator } from '@tarojs/components';
import Taro, { useState, useEffect } from '@tarojs/taro';
import './index.less'
function Nav(props) {
    const [navArr, setArr] = useState([
        { imgUrl: require('../../images/index/nav.png'), text: '导航1' },
        { imgUrl: require('../../images/index/nav.png'), text: '导航2' },
        { imgUrl: require('../../images/index/nav.png'), text: '导航3' },
        { imgUrl: require('../../images/index/nav.png'), text: '导航4' }
    ])

    return (
        <View className="nav_box">
            {
                navArr.map((item, index) => {
                    return (
                        <View key={index}>
                            <Image src={item.imgUrl} style={{ width: '60px', height: '60px' }}></Image>
                            <Text>{item.text}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Nav;