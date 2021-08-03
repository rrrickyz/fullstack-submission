import React from "react";
import Weather from "./Weather";

const View = (props) => {
    let {view} = props

    return(
        <div>
                <h1>{view.name}</h1>
                <p>capital {view.capital}</p>
                <p>population {view.population}</p>
                <h2>languages</h2>
                    <ul>
                        {view.languages.map((language,i) =>
                            <li key={i}>{language.name}</li>
                        )}
                    </ul>
                    <img src={view.flag} width="250" height="300" alt="flag"/>
                    <Weather city={view.capital}/>
        </div>
        )
}
export default View;