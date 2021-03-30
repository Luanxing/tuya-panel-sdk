import React from 'react';
import { shallow } from 'enzyme';
import SocketListItem from '../../socket-view/index';

describe('SocketListItem components', () => {
  it('basic render', () => {
    const fn = jest.fn();
    const wrapper = shallow(
      <SocketListItem
        socketWrapperStyle={{ backgroundColor: '#123452' }}
        socketBackgroundImage="http://images.tuyacn.com/smart/panelos/common/imgs/1588928982565_dc-bg@3x.png"
        socketBackgroundImageSize={{ width: 240, height: 240 }}
        socketImage="http://images.tuyacn.com/smart/panelos/common/imgs/1588929002104_dc-ck-1@3x.png"
        socketImageSize={{ width: 140, height: 140 }}
        socketImageTintColor="#123512"
        onPress={fn}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
