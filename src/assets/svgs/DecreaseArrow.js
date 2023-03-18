import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => (
    <Svg
        height={20}
        width={20}
        fill="#2886f4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 511.787 511.787"
        xmlSpace="preserve"
        {...props}
    >
        <Path d="M508.667 125.707a10.623 10.623 0 0 0-15.04 0L255.76 363.573 18 125.707c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 0 0 0 14.827L248.293 386.08a10.623 10.623 0 0 0 15.04 0l245.333-245.333c4.161-4.054 4.161-10.88.001-15.04z" />
    </Svg>
);

export default SvgComponent;
