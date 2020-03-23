// import React from 'react';
// import Radium from 'radium';
// import { loc } from '@texts/texts';
// import styles from './styles';
// import { vg } from 'view-globals';
// import { store, helpers } from 'model';
// import { Base } from '../base/base';
// import { Box } from '../box/box';
// import Comment from '../Comment';
// import CommentInput from '../CommentInput';
// import { Separator, Text } from '@bancor/client_base';
// import { LocalcoinButton } from '@src/components/localcoin_button/localcoin_button';

// export interface ICommentsBoxProps {
//     comments: any;
//     style: {};
//     onLoadReplies: Function;
//     onReply: Function;
//     onComment: Function;
//     onDeleteComment: Function;
//     onUndoDeleteComment: Function;
//     onLoadComments: Function;
//     onUploadAttachment: Function;
//     totalComments: number;
//     isSingleComment: boolean;
//     baseCommentUrl: string;
//     listingId?: string;
//     isCommentActionsDisabled: boolean;
//     primaryColor?: string;
// }

// export class CommentsBox extends Base<ICommentsBoxProps> {
//     static defaultProps: ICommentsBoxProps = {
//         comments: [],
//         style: null,
//         onLoadReplies: vg.utils.noop,
//         onReply: vg.utils.noop,
//         onComment: vg.utils.noop,
//         onDeleteComment: vg.utils.noop,
//         onUndoDeleteComment: vg.utils.noop,
//         onLoadComments: vg.utils.noop,
//         onUploadAttachment: vg.utils.noop,
//         totalComments: null,
//         isSingleComment: false,
//         baseCommentUrl: '',
//         isCommentActionsDisabled: false
//     };

//     constructor(props) {
//         super(props);
//         this._enableStoreEvents = true;

//         this.state = {
//             comments: null
//         };
//     }

//     onStoreChange() {
//         const { comments } = this.props;
//         if (this.state.comments != comments) {
//             this.setState({
//                 comments: comments
//             });
//         }
//     }

//     componentDidMount() {
//         super.componentDidMount();
//     }

//     renderComment(id, isLast) {
//         const { onLoadReplies, onReply, onDeleteComment, onUndoDeleteComment,
//             onUploadAttachment, isSingleComment, baseCommentUrl, isCommentActionsDisabled, primaryColor } = this.props;
//         const comment = store.getState().comments.getIn(['comments', id]);
//         if (!comment) return null;

//         const props = {
//             onLoadReplies: onLoadReplies,
//             commentId: id,
//             onReply: onReply,
//             onDelete: onDeleteComment,
//             onUndoDeleteComment: onUndoDeleteComment,
//             onUploadAttachment: onUploadAttachment,
//             isRepliesVisible: isSingleComment,
//             baseCommentUrl: baseCommentUrl,
//             isActionsDisabled: isCommentActionsDisabled,
//             primaryColor: primaryColor
//         };

//         let separator = null;
//         if (!isLast)
//             separator = <Separator style={styles.separator} />;

//         return (
//             <div key={id} style={styles.commentContainer}>
//                 <Comment {...props} />
//                 {separator}
//             </div>
//         );
//     }

//     renderLoadMore() {
//         const { comments, totalComments, onLoadComments, isSingleComment, listingId, primaryColor } = this.props;
//         const deletedComments = helpers.listings.getDeletedCommentsAmount(listingId);

//         if (!comments || isSingleComment || totalComments == (comments.size - deletedComments) || comments.size < 1) return null;

//         const loadMoreProps = {
//             primaryColor: primaryColor,
//             buttonProps: {
//                 onClick: () => { onLoadComments(comments.size); }
//             },
//             isBorderButton: true
//         };

//         return (

//             <div style={styles.loadMore}>
//                 <LocalcoinButton {...loadMoreProps}>
//                     <Text>{loc('loadMorecommentsBox')}</Text>
//                 </LocalcoinButton>
//             </div>
//         );
//     }

//     renderCommentInput() {
//         const { onComment, onUploadAttachment, isSingleComment, isCommentActionsDisabled, primaryColor } = this.props;

//         if (isSingleComment) return null;
//         const props = {
//             style: styles.inputArea,
//             onReply: onComment,
//             onUploadAttachment: onUploadAttachment,
//             isCommentActionsDisabled: isCommentActionsDisabled,
//             primaryColor: primaryColor
//         };

//         return <CommentInput {...props} />;
//     }

//     renderComments() {
//         const { comments, isSingleComment } = this.props;

//         if (!comments || comments && comments.size == 0 && !isSingleComment)
//             return null;

//         return comments.map(id => this.renderComment(id, id == comments.last()));
//     }

//     render() {
//         const { totalComments, style } = this.props;

//         const baseStyle = [styles.box, style];
//         const renderedComments = this.renderComments();
//         const commentInput = this.renderCommentInput();
//         const loadMore = this.renderLoadMore();

//         return (
//             <Box style={baseStyle}>
//                 <div style={styles.commentsTitleContainer}>
//                     <Text style={styles.commentsTitle}>{loc('commentsTitlecommentsBox')}</Text>
//                     <Text style={styles.numberOfComments}>{totalComments}</Text>
//                 </div>
//                 {commentInput}
//                 {renderedComments}
//                 {loadMore}
//             </Box>
//         );
//     }
// }

