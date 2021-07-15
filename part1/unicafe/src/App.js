import React, { useState } from 'react'

const History = (props) =>{
    if(props.allClicks===0){
        return(
            <div>
                No feedback given
            </div>
        )
    }
    return(
        <table>
            <Statistics text="good" value={props.good}/>
            <Statistics text="neutral" value={props.neutral}/>
            <Statistics text="bad" value={props.bad}/>
            <Statistics text="all" value={props.all}/>
            <Statistics text="average" value={props.average}/>
            <Statistics text="positive" value={props.positive}/>
        </table>
    )
}

const Statistics = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Button = ({handleClick,text}) =>(
    <button onClick ={handleClick}>
        {text}
    </button>
)

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all,setAll] = useState(0)
    const average = (good -bad)/all
    const positive = good*100/all + " %"

    const handleGood = () => {
        setGood(good+1)
        setAll(all+1)
    }

    const handleNeutral = () => {
        setNeutral(neutral+1)
        setAll(all+1)
    }

    const handleBad = () => {
        setBad(bad + 1)
        setAll(all + 1)
    }

        return (
            <div>
                <h2>give feedback</h2>
                <Button handleClick={handleGood} text=" good "/>
                <Button handleClick={handleNeutral} text=" neutral "/>
                <Button handleClick={handleBad} text=" bad "/>
                <h2>statistics</h2>
                <History allClicks={all} good={good} neutral={neutral} bad={bad}
                         all={all} average={average} positive={positive}/>
            </div>
        )
}


export default App



