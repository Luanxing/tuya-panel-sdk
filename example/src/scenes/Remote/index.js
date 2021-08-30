import React, { Component } from 'react';
import { TYFlatList } from 'tuya-panel-kit';
import { subRouters } from '../../config/routers';
import { produceRouterDatas } from '../../utils';
import CircleHandle from './CircleHandle';
import PressKey from './PressKey';
import DoubleKey from './DoubleKey';
import CurtainsAnimate from './CurtainsAnimate';

export default class SweepRobotCategoryScene extends Component {
  static CircleHandle = CircleHandle;
  static PressKey = PressKey;
  static DoubleKey = DoubleKey;
  static CurtainsAnimate = CurtainsAnimate;

  get data() {
    return produceRouterDatas(subRouters.filter(r => /^Remote\.[^.]+$/.test(r.id)));
  }

  render() {
    return (
      <TYFlatList
        style={{ backgroundColor: '#fff' }}
        contentContainerStyle={{ paddingTop: 16, marginHorizontal: 24, backgroundColor: '#fff' }}
        data={this.data}
      />
    );
  }
}
