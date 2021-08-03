import React from 'react'

const Header = (props) => {
    console.log(props);
    return (<h2>{props.name}</h2>)
}

/*class Header extends React.PureComponent{
    constructor(props) {
        super(props)
    }
    render() {

        return(<h1>{this.props}</h1>)
    }

}
*/


export default Header;