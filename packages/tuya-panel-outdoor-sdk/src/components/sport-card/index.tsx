import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Utils, IconFont } from 'tuya-panel-kit';

interface ICard {
  /**
   *
   */
  tip: string;
  /**
   * iconfont字符串图片
   */
  iconFont: string;
  /**
   * 值
   */
  value: string;
  /**
   * 单位
   */
  unit: string;
  /**
   * key
   */
  dp: string;
  /**
   * 背景色
   */
  bgColor: string;
}

interface IProps {
  /**
   * dp点数据
   */
  dpDatas: ICard[];
  /**
   * 文本颜色
   */
  titleColor?: string;
  /**
   * 子标题
   */
  subTitleColor?: string;
  subTitleOpacity?: number;
  iconColor?: string;
}

const { convertX: cx } = Utils.RatioUtils;

const SportCard: React.FC<IProps> = (props: IProps) => {
  const { dpDatas = [], titleColor, subTitleColor, subTitleOpacity, iconColor } = props;

  return (
    <View style={styles.contentBottom}>
      {dpDatas.map((item: ICard) => {
        return (
          <View style={styles.dpElement} key={item.dp}>
            <View style={styles.dpElementTop}>
              <Text style={[styles.dpElementTopTitle, { color: titleColor }]}>{item.value}</Text>
              <Text style={[styles.dpElementTopUnit, { color: titleColor }]}>{item.unit}</Text>
            </View>
            <View style={styles.dpElementBottom}>
              <View style={[styles.iconView, { backgroundColor: item.bgColor }]}>
                <IconFont color={iconColor} size={cx(14)} d={item.iconFont} />
              </View>
              <Text
                style={[
                  styles.dpElementBottomName,
                  { color: subTitleColor, opacity: subTitleOpacity },
                ]}
              >
                {item.tip}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

SportCard.defaultProps = {
  titleColor: '#000',
  subTitleColor: '#000',
  subTitleOpacity: 1,
  iconColor: '#fff',
};

const styles = StyleSheet.create({
  contentBottom: {
    flexDirection: 'row',
    height: cx(50),
  },
  dpElement: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  dpElementBottom: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: cx(5),
  },
  dpElementBottomName: {
    fontSize: cx(10),
    lineHeight: cx(14),
  },
  dpElementTop: {
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  dpElementTopTitle: {
    fontSize: cx(22),
    fontWeight: 'bold',
  },
  dpElementTopUnit: {
    fontSize: cx(14),
  },
  iconView: {
    borderRadius: cx(7),
    height: cx(14),
    marginRight: cx(6),
    width: cx(14),
  },
});

export default SportCard;
