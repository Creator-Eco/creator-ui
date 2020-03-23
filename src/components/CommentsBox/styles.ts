import { vg } from 'view-globals';
import { asStyleMap, padding, margin } from '@bancor/client_base';

const styles = asStyleMap({
    base: {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '16px'
    },

    input: {
        width: '100%',
        fontSize: '12px'
    },

    box: {
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '0px',
        paddingRight: '0px'
    },

    inputArea: {
        paddingTop: '16px',
        paddingRight: '16px',
        paddingBottom: '16px',
        paddingLeft: '16px'
    },

    commentsTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: '16px',
        paddingRight: '16px',
        paddingBottom: '16px',
        paddingLeft: '16px'
    },

    commentsTitle: {
        fontWeight: 500,
        color: vg.colors.black,
        fontSize: '24px'
    },

    numberOfComments: {
        display: 'block',
        marginLeft: '8px',
        color: vg.colors.primary,
        fontSize: '16px',
        fontWeight: 500
    },

    separator: {
        height: '2px',
        ...margin('0px')
    },

    loadMore: {
        ...padding('8px 16px 16px 16px')
    },

    totalCommentsLoadedLabel: {
        color: vg.colors.mediumGrey
    },

    commentContainer: {
        ...padding('0px 16px')
    }
});
export default styles;
