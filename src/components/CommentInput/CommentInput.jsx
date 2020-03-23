// import React from 'react';
// import PropTypes from 'prop-types';
// import { loc } from '@texts/texts';
// import styles from './styles';
// import Radium from 'radium';
// import { Base } from '../base/base';
// import { helpers, validators } from 'model';
// import { vg } from 'view-globals';
// import { ProfileImage } from '../profile_image/profile_image';
// import TextArea from '@src/components/text_area';
// import { Text, Icon, Image, Spinner } from '@bancor/client_base';
// import ProgressBar from '../../../view/components/progress_bar';
// import LoginPopup from '../login_popup';
// import DropzoneWrapper from '../dropzone_wrapper';
// import * as mouseTrap from 'mousetrap';
// import Link from '../link';

// class CommentInput extends Base {
//     constructor(props) {
//         super(props);
//         this._enableStoreEvents = true;

//         vg.utils.bindAll(this, [
//             'onCommentChange',
//             'onReply',
//             'onImageAdded',
//             'onUploadProgress',
//             'onUploadFinished',
//             'deleteInputImage',
//             'onDragEnter',
//             'onDragLeave',
//             'onFocus',
//             'onBlur']
//         );

//         this.state = {
//             replyText: props.value,
//             file: null,
//             isSending: false,
//             uploadProgress: 0,
//             uploadedImageName: null,
//             isUploading: false,
//             isDragOver: false,
//             myProfileId: null
//         };
//     }

//     onFocus() {
//         return mouseTrap.bind(['meta+enter', 'ctrl+enter'], this.onReply);
//     }

//     onBlur() {
//         mouseTrap.unbind(['meta+enter', 'ctrl+enter']);
//     }

//     componentWillReceiveProps() {
//         this.setState({
//             isSending: false,
//             uploadProgress: 0,
//             uploadedImageName: null,
//             isUploading: false,
//             file: null
//         });
//     }

//     onStoreChange() {
//         const myProfileId = helpers.profiles.getActiveProfileId();
//         if (this.state.myProfileId != myProfileId) {
//             this.setState({
//                 myProfileId: myProfileId
//             });
//         }
//     }

//     onUploadProgress(progress) {
//         this.setState({
//             uploadProgress: progress
//         });
//     }

//     onUploadFinished(imageName) {
//         this.setState({
//             uploadedImageName: imageName,
//             isUploading: false
//         });
//     }

//     onImageAdded(acceptedFiles) {
//         const { onUploadAttachment } = this.props;
//         const file = acceptedFiles[0];
//         const validate = validators.images.validate(file);

//         if (!validate.isValid) {
//             this.setState({ isDragOver: false });
//             return this.context.notificationShow('error', validate.errors[0]);
//         }

//         this.setState({
//             isDragOver: false,
//             file: file,
//             uploadProgress: 0,
//             isUploading: true
//         });
//         return onUploadAttachment(file, this.onUploadProgress, this.onUploadFinished);
//     }

//     onCommentChange(e) {
//         const isAuthenticated = helpers.accounts.isAuthenticated();
//         if (!isAuthenticated) return this.context.popupShow(<LoginPopup />, { isCentered: true, size: 'xs' });

//         const value = e.target.value;
//         this.setState({
//             replyText: value
//         });
//     }

//     onDragEnter() {
//         return this.setState({
//             isDragOver: true
//         });
//     }

//     onDragLeave() {
//         this.setState({
//             isDragOver: false
//         });
//     }

//     onReply() {
//         const { replyText, uploadedImageName, isUploading } = this.state;
//         const { onReply, isCommentActionsDisabled } = this.props;

//         if (isCommentActionsDisabled || isUploading) return null;
//         if (replyText && !this.validate(replyText)) return;

//         let attachment;
//         if (uploadedImageName)
//             attachment = { type: 'image', filename: uploadedImageName };

//         if (!replyText && !attachment) return;

//         onReply(replyText, attachment);

//         this.setState({
//             replyText: '',
//             isSending: true,
//             file: null,
//             uploadProgress: null,
//             uploadedImageName: null
//         });
//     }

//     validate(text) {
//         if (text.length == 0) return false;
//         const validate = validators.comments.validate({ comment: text });
//         return validate.isValid;
//     }

//     deleteInputImage() {
//         this.setState({
//             file: null,
//             uploadProgress: 1,
//             uploadedImageName: null
//         });
//     }

//     renderSend() {
//         const { isCommentActionsDisabled, primaryColor } = this.props;
//         const { replyText, isSending, uploadedImageName, isUploading } = this.state;

//         const baseStyle = [styles.send];
//         const isValid = this.validate(replyText);
//         const isActive = (isValid || uploadedImageName) && !isUploading && !isCommentActionsDisabled;

//         if (isActive)
//             baseStyle.push(styles.sendActive(primaryColor));

//         const textProps = {
//             style: baseStyle,
//             onClick: isActive ? this.onReply : null
//         };

//         if (isSending || isUploading) return null;
//         return <Text {...textProps}>{loc('sendcommentInput')}</Text>;
//     }

//     renderSpinner() {
//         const { isSending, isUploading } = this.state;
//         if (!isSending && !isUploading) return null;
//         return <Spinner style={styles.spinner} />;
//     }

//     renderImage() {
//         const { file, uploadProgress } = this.state;
//         const src = file ? file.preview : null;

//         if (!src) return null;
//         return (
//             <div style={styles.attachmentContainer}>
//                 <div style={styles.attachment}>
//                     <Image useImageTag={true} style={styles.image} src={src} />
//                     <ProgressBar progress={uploadProgress} isReverseProgress={true} />
//                 </div>
//                 <Icon name="delete1" style={styles.deleteIcon} onClick={this.deleteInputImage} />
//             </div>
//         );
//     }

//     renderInput() {
//         const { replyText } = this.state;

//         const props = {
//             onChange: this.onCommentChange,
//             skin: 'borderless',
//             placeholder: loc('writeCommentcommentInput'),
//             value: replyText,
//             onFocus: this.onFocus,
//             onBlur: this.onBlur,
//             style: styles.textArea
//         };

//         return <TextArea {...props} />;
//     }

//     renderSendArea() {
//         const { isCommentActionsDisabled } = this.props;

//         const send = this.renderSend();
//         const spinner = this.renderSpinner();
//         const isAuthenticated = helpers.accounts.isAuthenticated();

//         const iconStyle = [styles.attachIcon, isAuthenticated && styles.attachIconAuthenticated];
//         const dropProps = {
//             style: styles.editOverlay,
//             multiple: false,
//             onDropAccepted: isCommentActionsDisabled ? vg.utils.noop : this.onImageAdded,
//             accept: 'image/*',
//             disableClick: !isAuthenticated || isCommentActionsDisabled,
//             onDragEnter: isCommentActionsDisabled ? vg.utils.noop : this.onDragEnter
//         };

//         return (
//             <div style={styles.sendContainer}>
//                 <DropzoneWrapper {...dropProps}>
//                     <Icon name="attach" style={iconStyle} />
//                 </DropzoneWrapper>
//                 {spinner}
//                 {send}
//             </div>
//         );
//     }

//     renderInputContainer() {
//         const { file } = this.state;

//         const src = file ? file.preview : null;

//         const inputContainerStyle = [styles.inputContainer];
//         if (src)
//             inputContainerStyle.push(styles.inputContainerTopPart);

//         const sendArea = this.renderSendArea();
//         const input = this.renderInput();

//         return (
//             <div style={inputContainerStyle}>
//                 {input}
//                 {sendArea}
//             </div>
//         );
//     }

//     renderProfileImage() {
//         const { myProfileId } = this.state;

//         return (
//             <Link to={`/profiles/${myProfileId}`} >
//                 <ProfileImage style={styles.profileImage} entityId={myProfileId} />
//             </Link>
//         );
//     }

//     renderContent() {
//         const { style } = this.props;

//         const profileImage = this.renderProfileImage();
//         const baseStyle = [styles.base, style];
//         const image = this.renderImage();
//         const inputContainer = this.renderInputContainer();

//         return (
//             <div style={baseStyle}>
//                 {profileImage}
//                 <div style={styles.contentContainer}>
//                     {inputContainer}
//                     {image}
//                 </div>
//             </div>
//         );
//     }

//     renderDropZone() {
//         const { isCommentActionsDisabled } = this.props;
//         const { isDragOver } = this.state;
//         const dropStyle = Object.assign({}, styles.dropzoneOverlay);
//         if (isDragOver)
//             // TODO - array of style .. check why [styles.tab, activeTab == tab ? styles.tabActive : null] doensn't work here
//             Object.assign(dropStyle, styles.dropzoneOverlayActive);

//         const dropZoneProps = {
//             onDropAccepted: isCommentActionsDisabled ? vg.utils.noop : this.onImageAdded,
//             onDragEnter: isCommentActionsDisabled ? vg.utils.noop : this.onDragEnter,
//             onDragLeave: isCommentActionsDisabled ? vg.utils.noop : this.onDragLeave,
//             multiple: false,
//             disableClick: true,
//             style: dropStyle,
//             accept: 'image/*'
//         };

//         const sendSection = this.renderContent();

//         return (
//             <DropzoneWrapper {...dropZoneProps}>
//                 {sendSection}
//             </DropzoneWrapper>
//         );
//     }

//     render() {
//         const { isDragOver } = this.state;
//         const dragOverText = isDragOver ? <Text style={styles.dropText}>{loc('dragHerecommentInput')}</Text> : null;

//         const isAuthenticated = helpers.accounts.isAuthenticated();
//         const content = isAuthenticated ? this.renderDropZone() : this.renderContent();

//         return (
//             <div style={styles.contentContainer}>
//                 {content}
//                 {dragOverText}
//             </div>
//         );
//     }
// }

// CommentInput.propTypes = {
//     skin: PropTypes.string
// };

// CommentInput.defaultProps = {
//     style: {},
//     value: '',
//     skin: 'primary',
//     primaryColor: vg.colors.primary,
//     className: '',
//     onReply: vg.utils.noop,
//     onUploadAttachment: vg.utils.noop,
//     isCommentActionsDisabled: false
// };

// export default Radium(CommentInput);
