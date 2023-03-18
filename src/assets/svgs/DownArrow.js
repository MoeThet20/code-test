import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => (
    <Svg width={props.width} height={props.height} viewBox="0 0 1024 1024" {...props}>
        <Path d="M903.232 256 960 306.432 512 768 64 306.432 120.768 256 512 659.072z" />
    </Svg>
);

export default SvgComponent;
