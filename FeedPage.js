import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ListView,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    row: {
        padding: 10,
        backgroundColor: 'lightgray',
    },
    post: {
        color: 'gray',
    }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class FeedPage extends React.Component {
    constructor(props) {
        super(props);

        this.rowData = [
            {
                name: 'GY loh',
                post: 'Im sexy and i know it',
            },
            {
                name: 'gim',
                post: 'Im muscular',
            },
            {
                name: 'gyong',
                post: 'Im love crocs',
            }
        ];

        this.state = {
            dataSource: ds.cloneWithRows(this.rowData),
        };

        this.renderRow = this.renderRow.bind(this);
    }

    componentDidMount() {
        // setInterval(() => {
        //   this.rowData.push({
        //     name: 'ggg',
        //     post: 'im hacking',
        //   });

        //   this.setState({
        //     dataSource: ds.cloneWithRows(this.rowData),
        //   });
        // }, 1000);
    }

    onRowPress(rowData) {
        this.props.navigator.push({
            pageName: 'post',
            rowData,
        });
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity onPress={() => this.onRowPress(rowData)}>
                <View style={styles.row}>
                <Text style={styles.name}>{rowData.name}</Text>
                <Text style={styles.post}>{rowData.post}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}