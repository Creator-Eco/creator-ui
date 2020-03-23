import { vg } from 'view-globals';
import { padding } from '@bancor/client_base';

const styles = vg.utils.styles({
    skins: vg.skins.comment,

    contentContainer: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        borderRadius: '8px',
        width: '100%'
    },

    profileImage: {
        height: '36px',
        width: '36px',
        flex: '0 0 auto',
        marginRight: '8px',
        alignSelf: 'baseline'
    },

    base: {
        borderRadius: '8px',
        position: 'relative',
        display: 'flex',
        ...padding('8px'),
        width: '100%',
        background: vg.colors.white,
        alignItems: 'center'
    },

    inputContainer: {
        display: 'flex',
        borderRadius: '8px',
        minHeight: '36px',
        ...padding('8px'),
        borderRight: `2px solid ${vg.colors.cloudWhite}`,
        borderLeft: `2px solid ${vg.colors.cloudWhite}`,
        borderTop: `2px solid ${vg.colors.cloudWhite}`,
        borderBottom: `2px solid ${vg.colors.cloudWhite}`,
        flexDirection: 'row',
        width: '100%'
    },

    inputContainerTopPart: {
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        borderBottom: 'none'
    },

    sendContainer: {
        background: vg.colors.white,
        ...padding('6px'),
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flex: '0 0 auto'
    },

    send: {
        fontSize: '14px',
        marginLeft: '8px',
        fontWeight: 500,
        color: vg.colors.mediumGrey
    },

    sendActive(color) {
        return {
            color: color,
            cursor: 'pointer'
        };
    },

    textArea: {
        color: vg.colors.black
    },

    attachIcon: {
        fontSize: '16px',
        color: vg.colors.mediumGrey
    },

    attachIconAuthenticated: {
        cursor: 'pointer'
    },

    deleteIcon: {
        fontSize: '16px',
        marginLeft: '8px',
        color: vg.colors.darkGrey,
        cursor: 'pointer'
    },

    editOverlay: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '0px'
    },

    image: {
        position: 'relative',
        pointerEvents: 'none',
        border: `1px solid ${vg.colors.mediumGrey}`,
        borderBottomLeftRadius: '2px',
        borderBottomRightRadius: '2px',
        borderTopLeftRadius: '2px',
        borderTopRightRadius: '2px',
        backgroundSize: 'cover',
        maxHeight: '320px',
        maxWidth: '100%',
        marginBottom: '8px'
    },

    attachmentContainer: {
        width: '100%',
        display: 'flex',
        background: vg.colors.white,
        borderBottom: `1px solid ${vg.colors.cloudWhite}`,
        borderRight: `1px solid ${vg.colors.cloudWhite}`,
        borderLeft: `1px solid ${vg.colors.cloudWhite}`
    },

    spinner: {
        marginLeft: '8px',
        height: '16px',
        width: '16px',
        borderColor: `${vg.colors.cloudWhite} ${vg.colors.cloudWhite} ${vg.colors.cloudWhite} ${vg.colors.primary}`
    },

    attachment: {
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '8px'
    },

    dropzoneOverlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '0px',
        bottom: '0px',
        right: '0px',
        left: '0px',
        cursor: 'pointer',
        transition: 'opacity 150ms ease'
    },

    dropzoneOverlayActive: {
        background: vg.colors.white,
        opacity: 0.2,
        border: '1px dashed'
    },

    dropText: {
        position: 'absolute',
        textAlign: 'center',
        left: '0px',
        right: '0px',
        top: '40%',
        pointerEvents: 'none'
    }
});
export default styles;
