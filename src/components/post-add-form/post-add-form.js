import React from 'react';

import './post-add-form.css'

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
            >
            </input>
            <button
                className="btn btn-outline-secondary"
                type="submit"
            >
                Добавить
            </button>
        </form>
    )
}

export default PostAddForm;