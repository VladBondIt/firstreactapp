import React, { Component } from 'react';

import './post-list-item.css';


export default class PostListItem extends Component {


    onImportant() {
        this.setState(({ important }) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({ like }) => ({
            like: !like
        }))
    }

    render() {

        const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;

        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames += ` important`;
        }

        if (like) {
            classNames += ` like`;
        }

        return (
            <div className={classNames}>
                <span
                    onClick={onToggleLiked}
                    className="app-list-item-label"
                >
                    {label}
                </span>
                <div className="d-flex justify-content-between aligh-item-center">
                    <button
                        type="submit"
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="submit"
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}





// const PostListItem = ({ label, important = false }) => {

//     let classNames = "app-list-item d-flex justify-content-between";

//     if (important) {
//         classNames += ` important`;
//     }

//     return (
//         <div className={classNames}>
//             <span className="app-list-item-label">
//                 {label}
//             </span>
//             <div className="d-flex justify-content-between aligh-item-center">
//                 <button
//                     type="submit"
//                     className="btn-star btn-sm"
//                 >
//                     <i className="fa fa-star"></i>
//                 </button>
//                 <button
//                     type="submit"
//                     className="btn-trash btn-sm"
//                 >
//                     <i className="fa fa-trash-o"></i>
//                 </button>
//                 <i className="fa fa-heart"></i>
//             </div>
//         </div>
//     )
// }

// export default PostListItem;