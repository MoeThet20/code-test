import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => (
    <Svg width={15} height={15} viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path opacity={0.1} d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
        <Path d="m17 17 4 4" stroke="#323232" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="#323232" strokeWidth={2} />
    </Svg>
);

export default SvgComponent;
