import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value != this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return <ul>
    //         {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //     </ul>
    // }

    // styles = {
    //     fontSize: 0
    //     // fontWeight: 'bold'
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = product => {
    //     console.log(product);
    //     // console.log('Increment Clicked', this);
    //     // this.state.count++;
    //     this.setState({ count: this.state.count + 1 })
    //     // obj.method();
    //     // function();
    // };

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 });
    // };

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 });
    };

    doHandleDecrement = () => {
        this.HandleDecrement({ id: 1 });
    }

    render() {
        console.log('Counter - rendered');
        return (
            // <div className="container">
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button
                        // onClick={() => this.handleIncrement(product)}
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-sm ">+
                    </button>

                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-secondary btn-sm m-2"
                        disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                    >-
                    </button>

                    <button onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm ">X
                    </button>
                </div>

            </div>

            // </div>

            // {/* <div> */ }

            // {/* {this.state.tags.length === 0 && 'Please create a new tag!'} */}
            // {/* <img src={this.state.imageUrl} alt="" /> */}
            // {/* <span style={this.styles} className="badge badge-primary m-2"> */}
            // {/* <span style={{ fontSize: 35 }} className="badge badge-primary m-2"> */}
            // {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            // <button className="btn btn-secondary btn-sm">Increment</button> */}
            // {/* {this.renderTags()} */}


            // </div>
        );
    }




    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? <h5>Zero</h5> : value;
    }
}

export default Counter;
