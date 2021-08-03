import React from "react";

const PersonForm = (props) =>{
    const {add} = props;
    const {name,setName} = props;
    const {phone,setPhone} = props;

    return(
        <div>
            <form onSubmit={add}>
                <div>
                name:
                    <input
                        value={name}
                        onChange={setName}/>
                </div>
                <br/>
                <div>
                number:
                    <input
                        value={phone}
                        onChange={setPhone}/>
                </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        </div>
    )
}
export default PersonForm;