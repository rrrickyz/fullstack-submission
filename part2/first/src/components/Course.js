import Header from './Header'
import Content from './Content'
import React from 'react'


const Course = (props) => {

    const {course} = props
    console.log("course",course);

    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <b>total of {course.parts.reduce(function(sum,p){
                return sum+p.exercises},0)} exercises</b>
        </div>
    )
}


/*class Course extends React.PureComponent{
    constructor(props) {
        super(props);
    }

    render() {
        const {course} = this.props
        return (

            <li>
                <Header props={course.name}/>
                <Content parts={course.parts}/>
            </li>
        )
    }
}

 */

export default Course;