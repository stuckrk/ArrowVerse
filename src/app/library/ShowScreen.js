/*  

TO DO: 

*/

import React, { Component } from 'react';
import { Text, View } from 'react-native';



import Header from '../shared/theme/Header';


class ShowScreen extends Component {
    render() {
        return (
            <View>

                <Header 
                    title={'Shows'} 
                />

                <Text>ShowScreen Works!</Text>
            </View>
        );
    }
}

export default ShowScreen;