/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import * as styles from './styles';
import { base, image } from './styles';
import { ExternalStyles } from '@src/utils/utils';

export interface ProfileImageProps {
    styles?: ExternalStyles<typeof styles>;
    className?: string;
    testId?: string;
    username: string;
}

const ProfileImage: FC<ProfileImageProps> = props => {
    const { testId, className, styles: extenalStyles = {} } = props;

    // const userInfo = useStoreState(state => state.user.userInfo);
    const src = 'https://picsum.photos/400/200';

    function getBaseStyle() {
        return [base, image(src), extenalStyles.base];
    }

    return (
        <div css={getBaseStyle()} data-test={testId} className={className}></div>
    );
};

ProfileImage.defaultProps = {
    testId: 'profile-image'
};

export default ProfileImage;
