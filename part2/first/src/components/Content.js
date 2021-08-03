import Part from './Part.js'
import React from 'react'

const Content =(props) =>{
    const {parts} = props


    return(
        <div>
            {parts.map(part => (
                <Part key={part.id} part={part}/>
            ))}
        </div>
    )
}


/*
class Content extends React.PureComponent{
    constructor(props) {
        super(props);
    }

    render(){
        const {parts} = this.props
        return(
            <div>
                <ul>
                    {parts.map(part => (
                        <Part key={part.id} part={part}/>
                    ))}
                </ul>
            </div>
        )
    }
}
*/
export default Content;