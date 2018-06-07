import * as React from 'react';
import { ScrollView, View, Button } from 'react-native';
import { TsList } from './TsList';
import { JsList } from './JsList';

export class Screen extends React.Component {
  state = {
    isTs: true,
  };

  setJs = () => this.setState({ isTs: false });

  setTs = () => this.setState({ isTs: true });

  render() {
    const List = this.state.isTs ? TsList : JsList;
    return (
      <View style={{ paddingTop: 30, flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Button title="TS - Bad Hot Reload" onPress={this.setTs} />
          <Button title="JS - Good Hot Reload" onPress={this.setJs} />
        </View>
        <ScrollView>
          <List />
        </ScrollView>
      </View>
    );
  }
}
