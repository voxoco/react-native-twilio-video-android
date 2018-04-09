// @flow
import {
    requireNativeComponent,
    View,
    // $FlowFixMe
} from 'react-native';
import { PropTypes } from 'prop-types';

module.exports = requireNativeComponent('RNTwilioVideoView', {
    propTypes: {
        twilioAccessToken: PropTypes.string,
        ...View.propTypes,
    },
});
