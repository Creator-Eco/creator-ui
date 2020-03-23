// import React from '@src/components/Comment/node_modules/react';
// import Radium from '@src/components/Comment/node_modules/radium';
// import { loc } from '@src/components/Comment/node_modules/@texts/texts';
// import styles from './styles';
// import { Base } from '../base/base';
// import { store, helpers } from '@src/components/Comment/node_modules/model';
// import { vg } from '@src/components/Comment/node_modules/view-globals';
// import { ProfileImage } from '../profile_image/profile_image';
// import { Image, Text, Separator } from '@src/components/Comment/node_modules/@bancor/client_base';
// import CommentInput from '@src/components/Comment/node_modules/components/comment_input';
// import FullScreenImagePopup from '@src/components/Comment/node_modules/components/full_screen_image_popup';
// import fileStoreApi from '../../../network/file_store_api';
// import Link from '../link';
// import SeeMore from '../see_more';

// class Comment extends Base {
//     constructor(props) {
//         super(props);
//         this._enableStoreEvents = true;

//         vg.utils.bindAll(this, [
//             'onReply',
//             'fetchReplies',
//             'onRepliesClick',
//             'onCommentChange',
//             'onDelete',
//             'onImageClick']
//         );

//         this.state = {
//             isRepliesVisible: props.isRepliesVisible,
//             profiles: null,
//             replies: null,
//             replyText: '',
//             comment: null,
//             comments: null,
//             isFetchingReplies: false
//         };
//     }

//     componentWillMount() {
//         this.initState();
//     }

//     componentWillReceiveProps(nextProps) {
//         const { isRepliesVisible } = this.props;
//         const { replies } = this.state;

//         if (nextProps.isRepliesVisible != isRepliesVisible && nextProps.isRepliesVisible) {
//             if (!replies)
//                 this.fetchReplies();

//             this.setState({
//                 isRepliesVisible: nextProps.isRepliesVisible
//             });
//         }
//     }

//     initState() {
//         const { commentId } = this.props;

//         const profiles = store.getState().profiles;
//         const replies = store.getState().comments.getIn(['replies', commentId]);
//         const comment = store.getState().comments.getIn(['comments', commentId]);
//         const comments = store.getState().comments.get('comments');

//         if (replies && replies != this.state.replies) {
//             this.setState({
//                 replies: replies,
//                 isFetchingReplies: false
//             });
//         }

//         if (this.state.profiles != profiles ||
//             this.state.comment != comment ||
//             this.state.comments != comments) {
//             this.setState({
//                 comment: comment,
//                 comments: comments
//             });
//         }
//     }

//     onStoreChange() {
//         this.initState();
//     }

//     onCommentChange(e) {
//         const value = e.target.value;
//         this.setState({
//             replyText: value
//         });
//     }

//     onReply(replyText, attachment) {
//         const { commentId } = this.props;
//         if (!replyText && !attachment) return;
//         this.props.onReply(replyText, commentId, attachment);
//     }

//     onRepliesClick() {
//         const { isRepliesVisible } = this.state;
//         this.fetchReplies();

//         this.setState({
//             isRepliesVisible: !isRepliesVisible
//         });
//     }

//     fetchReplies() {
//         const { isRepliesVisible, comment, replies, isFetchingReplies } = this.state;
//         const { onLoadReplies, commentId } = this.props;
//         if (isFetchingReplies)
//             return null;
//         const replyCount = comment.get('replyCount');
//         let skip = 0;
//         if (replies) skip = replies.size;
//         if (replyCount > 0 && !isRepliesVisible)
//             onLoadReplies(commentId, skip);

//         this.setState({
//             isFetchingReplies: true
//         });
//     }

//     onDelete(replyId, isReply) {
//         const { commentId, onDelete } = this.props;

//         onDelete(replyId, isReply ? commentId : null);

//         if (!isReply) {
//             this.setState({
//                 isRepliesVisible: false
//             });
//         }
//     }

//     onImageClick(src) {
//         return this.context.popupShow(<FullScreenImagePopup src={src} />, { enableMobileFullScreen: false });
//     }

//     renderRepliesCount() {
//         const { comment } = this.state;

//         const replyCount = comment.get('replyCount');
//         const numOfRepliesText = `${replyCount} ${replyCount == 1 ? loc('replycomment') : loc('repliescomment')}`;
//         const repliesProps = {
//             enableMultiline: true,
//             onClick: this.onRepliesClick,
//             style: styles.clickable
//         };

//         if (!replyCount) return null;
//         return <Text {...repliesProps}>{numOfRepliesText}</Text>;
//     }

//     renderReplyAction() {
//         const props = {
//             onClick: this.onRepliesClick,
//             style: styles.clickable
//         };
//         return <Text {...props}>{loc('replycomment')}</Text>;
//     }

//     renderCommentActions(commentId, isReply = false) {
//         const { isActionsDisabled, primaryColor } = this.props;

//         if (isActionsDisabled) return null;

//         const dot = <div style={styles.dot} />;
//         const deleteAction = this.renderDeleteAction(commentId, isReply);

//         let replyAction;
//         let repliesCount;
//         if (!isReply) {
//             replyAction = this.renderReplyAction();
//             repliesCount = this.renderRepliesCount();
//         }

//         return (
//             <div style={styles.commentActions(primaryColor)}>
//                 {deleteAction}
//                 {deleteAction && replyAction ? dot : null}
//                 {replyAction}
//                 {repliesCount ? dot : null}
//                 {repliesCount}
//             </div>
//         );
//     }

//     renderProfileImage(profileId) {
//         return (
//             <Link to={`/profiles/${profileId}`} >
//                 <ProfileImage style={styles.profileImage} entityId={profileId} />
//             </Link>
//         );
//     }

//     renderProfileName(profileId) {
//         const profile = store.getState().profiles.getIn(['profiles', profileId]);

//         if (!profile) return null;

//         const profileName = profile.get('displayName');

//         return (
//             <Link to={`/profiles/${profileId}`} >
//                 <Text style={styles.profileName}>{profileName}</Text>
//             </Link>
//         );
//     }

//     renderCommentDetails(profileId, commentId) {
//         const createdAt = store.getState().comments.getIn(['comments', commentId, 'createdAt']);
//         const profileName = this.renderProfileName(profileId);
//         const timeFromComment = this.renderTimeFromComment(createdAt);

//         return (
//             <div style={styles.commentDetailsContainer}>
//                 {profileName}
//                 {timeFromComment}
//             </div>
//         );
//     }

//     renderDeletedCommentText() {
//         return <Text style={styles.deletedComment}>{loc('deletedCommentcomment')}</Text>;
//     }

//     renderCommentContent(commentId, text, isReply = false, isDeleted = false) {
//         const commentActions = this.renderCommentActions(commentId, isReply);
//         const content = isDeleted ? this.renderDeletedCommentText() : this.renderSeeMore(text);
//         const image = !isDeleted && this.renderCommentImage(commentId);

//         return (
//             <div style={styles.multiline}>
//                 {content}
//                 {image}
//                 {commentActions}
//             </div>
//         );
//     }

//     renderComment(commentId, isReply) {
//         const comment = store.getState().comments.getIn(['comments', commentId]);

//         if (!comment) return null;

//         const isDeleted = comment.get('isDeleted');
//         const canDelete = helpers.permissions.canDeleteComment(commentId);

//         if (isDeleted && canDelete) return this.renderUndoDeleteComment(commentId);

//         const text = comment.get('text');
//         const profileId = comment.get('profileId');
//         const ProfileImage = this.renderProfileImage(profileId);
//         const commentDetails = this.renderCommentDetails(profileId, commentId);
//         const commentContent = this.renderCommentContent(commentId, text, isReply, isDeleted);

//         return (
//             <div style={styles.nameAndContent}>
//                 {ProfileImage}
//                 <div style={styles.contentContainer}>
//                     {commentDetails}
//                     {commentContent}
//                 </div>
//             </div>
//         );
//     }

//     renderTimeFromComment(createdAt) {
//         const { commentId, baseCommentUrl } = this.props;
//         const timeFromComment = vg.utils.fromNow(createdAt, false);
//         // TOOD check if we can replace the link location.pathname and keep it more generic
//         return (
//             <Link to={`${baseCommentUrl}/${commentId}`} >
//                 <Text style={styles.time}>{timeFromComment}</Text>
//             </Link>
//         );
//     }

//     renderCommentInput() {
//         const { commentId, onUploadAttachment, primaryColor } = this.props;

//         return (
//             <CommentInput
//                 onReply={this.onReply} commentId={commentId}
//                 onUploadAttachment={onUploadAttachment} primaryColor={primaryColor}
//             />);
//     }

//     renderUndoDeleteComment(replyId, isLast = false, isReply = false) {
//         const { onUndoDeleteComment } = this.props;
//         const canDelete = helpers.permissions.canDeleteComment(replyId);

//         if (!canDelete) return null;

//         const reply = store.getState().comments.getIn(['comments', replyId]);
//         if (!reply) return null;

//         const commentActions = !isReply && this.renderCommentActions(replyId);

//         const props = {
//             style: [styles.commentActions, styles.clickable],
//             onClick: () => { onUndoDeleteComment(reply); }
//         };

//         const separator = isReply && !isLast ? <Separator style={styles.separator} /> : null;
//         return (
//             <div key={replyId} style={[styles.container, styles.replyContainer]}>
//                 <Text style={styles.undoDeleteCommentText}>{loc('undoDeleteCommentContentcomment')}</Text>
//                 <Text {...props}>{loc('undoDeleteCommentcomment')}</Text>
//                 {commentActions}
//                 {separator}
//             </div>
//         );
//     }

//     renderSeparator(isLast) {
//         if (isLast) return null;

//         return <div style={styles.separator} />;
//     }

//     renderSeeMore(commentText) {
//         if (!commentText) return null;

//         const seeMoreProps = {
//             text: commentText
//             // min: 80,
//             // ideal: 400,
//             // max: 500
//         };

//         return (
//             <SeeMore {...seeMoreProps} />
//         );
//     }

//     renderDeleteAction(replyId, isReply) {
//         const comment = store.getState().comments.getIn(['comments', replyId]);
//         const isDeleted = comment.get('isDeleted');

//         const canDelete = helpers.permissions.canDeleteComment(replyId);

//         if (!canDelete || isDeleted) return null;

//         const props = {
//             onClick: () => { this.onDelete(replyId, isReply); },
//             style: styles.clickable
//         };

//         return <Text {...props}>{loc('deletecomment')}</Text>;
//     }

//     renderCommentImage(replyId) {
//         const reply = store.getState().comments.getIn(['comments', replyId]);
//         const imageName = reply.getIn(['attachment', 'filename']);
//         if (!imageName) return null;
//         const src = fileStoreApi.buildImageSrc('attachments', imageName);
//         const props = {
//             useImageTag: true,
//             style: styles.commentImage,
//             src: src,
//             onClick: () => { this.onImageClick(src); }
//         };

//         return <Image {...props} />;
//     }

//     renderReply(replyId, isLast) {
//         const { comments } = this.state;

//         const reply = comments.get(replyId);
//         if (!reply) return null;
//         if (reply.get('isDeleted')) return this.renderUndoDeleteComment(replyId, isLast, true);

//         const replyContainer = [styles.container, styles.replyContainer];

//         const separator = this.renderSeparator(isLast);
//         const replyContent = this.renderComment(replyId, true);

//         return (
//             <div key={replyId} style={replyContainer}>
//                 <div style={styles.replyContent}>
//                     {replyContent}
//                 </div>
//                 {separator}
//             </div >
//         );
//     }

//     renderLoadMoreButton() {
//         const { replies, comment } = this.state;
//         const { onLoadReplies } = this.props;

//         const replyCount = comment.get('replyCount');

//         if (!replies || replyCount <= replies.size) return null;

//         const props = {
//             onClick: () => { onLoadReplies(comment.get('_id'), replies.size); },
//             style: [styles.clickable, styles.loadMore]
//         };

//         return (
//             <div {...props}>
//                 <Text>{loc('loadMorecomment')}</Text>
//             </div>
//         );
//     }

//     renderReplies() {
//         const { replies } = this.state;

//         if (!replies) return null;
//         return replies.map(replyId => { return this.renderReply(replyId, replyId == replies.last()); });
//     }

//     renderRepliesContainer() {
//         const { isRepliesVisible, comment } = this.state;

//         if (!comment || !isRepliesVisible) return null;

//         const renderedReplies = this.renderReplies();
//         const inputArea = this.renderCommentInput();
//         const loadMoreButton = this.renderLoadMoreButton();

//         return (
//             <div style={styles.repliesContainer}>
//                 {/* <Image src={TooltipTopImage} style={styles.arrow} />*/}
//                 {inputArea}
//                 {renderedReplies}
//                 {loadMoreButton}
//             </div>
//         );
//     }

//     render() {
//         const { commentId } = this.props;

//         const comment = this.renderComment(commentId, false);
//         const repliesContainer = this.renderRepliesContainer();

//         return (
//             <div style={styles.container}>
//                 <div style={styles.content}>
//                     {comment}
//                 </div>
//                 {repliesContainer}
//             </div>
//         );
//     }
// }

// Comment.defaultProps = {
//     commentId: null,
//     onLoadReplies: vg.utils.noop,
//     onReply: vg.utils.noop,
//     onDelete: vg.utils.noop,
//     onUndoDeleteComment: vg.utils.noop,
//     onUploadAttachment: vg.utils.noop,
//     isRepliesVisible: false,
//     baseCommentUrl: '',
//     primaryColor: vg.colors.primary,
//     isActionsDisabled: false
// };

// export default Radium(Comment);
