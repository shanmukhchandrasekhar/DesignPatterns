import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Venu'
        }
        console.log('Constructor called!')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps called!')
        return null;
    }

    // componentWillMount() {
    //     console.log('componentWillMount called!')
    //  }
    componentDidMount() {
        console.log('componentDidMount called!')
    }
    // componentWillUpda
    componentWillUnmount() {
        console.log('componentWillUnmount called!')
    }

    render() {
        console.log('render called!')
        return (
            <div>

            </div>
        )
    }
}

export default ClassComponent
