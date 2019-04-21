import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList, StatusBar
} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";

export default class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[
                {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"March SoulLaComa", text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://lorempixel.com/100/100/nature/6/"},
                {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"John DoeLink",     text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://lorempixel.com/100/100/nature/5/"},
                {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"Finn DoRemiFaso",  text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:""},
                {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"Maria More More",  text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:""},
                {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"Frank Odalthh",    text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://lorempixel.com/100/100/nature/4/"},
                {id:6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name:"Clark June Boom!", text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:""},
                {id:7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"The googler",      text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:""},
            ]
        }
    }

    render() {
        return (

            <View style={styles.root}>
                <StatusBar barStyle="light-content" translucent={false} backgroundColor={'#666666'} animated={true}/>

                <View style={{flex: 0.1, flexDirection: 'row', paddingLeft: 10,borderBottomWidth: 0.5,borderBottomColor:'gray'}}>

                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}
                                      style={{flex: 0.2, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Icon name="menu" style={{fontSize: 18, color: 'black', marginLeft: 5}}/>
                    </TouchableOpacity>

                    <View style={{flex: 0.6, justifyItems: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'black', fontSize: 25}}>Notifications</Text>
                    </View>
                </View>


                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.separator}/>
                        )
                    }}
                    keyExtractor={(item)=>{
                        return item.id;
                    }}
                    renderItem={(item) => {
                        const Notification = item.item;
                        let attachment = <View/>;

                        let mainContentStyle;
                        if(Notification.attachment) {
                            mainContentStyle = styles.mainContent;
                            attachment = <Image style={styles.attachment} source={{uri:Notification.attachment}}/>
                        }
                        return(
                            <View style={styles.container}>
                                <Image source={{uri:Notification.image}} style={styles.avatar}/>
                                <View style={styles.content}>
                                    <View style={mainContentStyle}>
                                        <View style={styles.text}>
                                            <Text style={styles.name}>{Notification.name}</Text>
                                            <Text>{Notification.text}</Text>
                                        </View>
                                        <Text style={styles.timeAgo}>
                                            2 hours ago
                                        </Text>
                                    </View>
                                    {/*{attachment}*/}
                                </View>
                            </View>
                        );
                    }}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFFFFF"
    },
    container: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: 'flex-start'
    },
    avatar: {
        width:50,
        height:50,
        borderRadius:25,
    },
    text: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0
    },
    mainContent: {
        marginRight: 60
    },
    img: {
        height: 50,
        width: 50,
        margin: 0
    },
    attachment: {
        position: 'absolute',
        right: 0,
        height: 50,
        width: 50
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    timeAgo:{
        fontSize:12,
        color:"#696969"
    },
    name:{
        fontSize:16,
        color:"#1E90FF"
    }
});