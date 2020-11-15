import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form'

import './app.css'

const App = () => {

    const data = [
        { label: "Going to learn React", important: true, id: 'qwqw' },
        { label: "That is so good", important: false, id: 'weewe' },
        { label: "I need a break...", important: false, id: 'fgg' }
    ]

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}

export default App;