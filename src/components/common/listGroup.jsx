import React, { Component } from 'react';

class Listgroup extends Component {
    render() {
        return (
            <div className="listGroup">
                <a href="#" className="list-group-item list-group-item-action active">
                    All Genres
  </a>
                <a href="#" className="list-group-item list-group-item-action">Action</a>
                <a href="#" className="list-group-item list-group-item-action">Comedy</a>
                <a href="#" className="list-group-item list-group-item-action">Thriller</a>
            </div>

        );
    }
}

export default Listgroup;
