import about from '@src/assets/icons/about.svg';
import circleAccept from '@src/assets/icons/circle-accept.svg';
import close from '@src/assets/icons/close.svg';
import helpTip from '@src/assets/icons/help-tip.svg';
import edit from '@src/assets/icons/edit.svg';
import profile from '@src/assets/icons/profile.svg';
import arrowLeft from '@src/assets/icons/arrow-left.svg';
import arrowUpWithBase from '@src/assets/icons/arrow-up-with-base.svg';
import dropzone from '@src/assets/icons/dropzone.svg';
import menuTrigger from '@src/assets/icons/menu-trigger.svg';

import { prop } from '@src/utils/utils';

export const icons = {
    about,
    circleAccept,
    close,
    helpTip,
    edit,
    profile,
    arrowLeft,
    arrowUpWithBase,
    dropzone,
    menuTrigger
};

export type IconType = keyof typeof icons;

export function getIconAsComponent(name: IconType): React.FC {
    return prop(icons, name);
}
