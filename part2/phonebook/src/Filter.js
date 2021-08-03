import React from "react";

const Filter = (props) =>{

    const {search} = props
    const {setSearch} = props

    return(
        <div>
            <label>filter shown with </label>
            <input
                value = {search}
                onChange={setSearch}/>
        </div>
    )

}
export default Filter;