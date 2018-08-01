import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl: 'https://picsum.photos/200'
        // tags: ['tag1', 'tag2', 'tag3']
        tags: []
    };



    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    }

    styles = {
        fontSize: 0
        // fontWeight: 'bold'
    };

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement = product => {
        console.log(product);
        // console.log('Increment Clicked', this);
        // this.state.count++;
        this.setState({ count: this.state.count + 1 })
        // obj.method();
        // function();
    };

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 });
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <button
                    onClick={() => this.handleIncrement(product)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
        </button> */}


                {/* {this.state.tags.length === 0 && 'Please create a new tag!'} */}
                {/* <img src={this.state.imageUrl} alt="" /> */}
                {/* <span style={this.styles} className="badge badge-primary m-2"> */}
                {/* <span style={{ fontSize: 35 }} className="badge badge-primary m-2"> */}
                {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}
                {/* {this.renderTags()} */}


            </div>
        );
    }




    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h2>Zero</h2> : count;
    }
}

export default Counter;
