import React from 'react'

const Part =(props) =>{
    const {part} = props

    console.log({part})
    return(<div>{part.name} {part.exercises}</div>)
}


/*class Part extends React.PureComponent {

    render() {

        return(
            <li>{this.props.name} {this.props.exercises}</li>
        )
    }

}
*/
export default Part;