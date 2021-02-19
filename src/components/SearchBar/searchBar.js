import React from 'react';
import reactDom from 'react-dom';
import './searchBar.css';

const sortByOptions = {
   " Best Match" : "best_match",
"Highest Rated" : "rating",
"Most Reviewed" : "review_count"
}

class SearchBar extends React.Component{
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(x) => {

        })
    }
}