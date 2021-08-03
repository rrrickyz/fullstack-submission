import React, { useState,useEffect } from 'react'
import searchFilter from './searchFilter.js'
import PersonForm from "./PersonForm"
import Filter from "./Filter"
import personService from './services/personService.js'
import Notification from './Notification'
import Success from './Success'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [search,setSearch] = useState('')
    const [errorMessage,setErrorMessage] = useState(null)
    const [success,setSuccess] = useState(null)


    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons =>{
                setPersons(initialPersons)
            })    
    },[])

    function addPerson(){
        //for updating
        if(persons.some(item =>item.name===newName&item.number!==newPhone)){
            const Id = persons.find(p => p.name ===newName).id
            if(window.confirm(newName + " is already added to phonebook, replace the old number with a new one？")){
                const updatedPerson = {
                    name:newName,
                    number:newPhone,
                    id:Id
                }
                personService.update(Id,updatedPerson).then(returned =>{
                    setSuccess(`Updated ${newName}`)
                    setTimeout(() =>{setSuccess(null)},5000)
                    setPersons(persons.filter(p=>p.id===Id))
                })
                .catch(error =>{
                    setErrorMessage(
                        `Information of '${newName}' has already been removed from server`
                    )
                    setTimeout(() =>{setErrorMessage(null)},5000)
                    setPersons(persons.filter(p=>p.id===Id))
                })}       
        }
        //for adding the same person
        else if(persons.some(item =>item.name===newName)){
            window.alert(newName + ' is already added to phonebook')
    
        }
        //for adding a new person
        else{
            const personObject ={
                name:newName,
                number:newPhone
            }
            personService
                .create(personObject)
                .then(returnedPerson =>{
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewPhone('')
                   
                })
                setTimeout(() =>{setSuccess(null)},5000)
        }
    }

    // for the delete button
    function deletePerson(id,name){
        if(window.confirm("Delete " + name + " ?")){
            personService.remove(id)
            setPersons(persons.filter(p=>p.id!==id))
        }
    }

        return(
            <div>
                <h2>Phonebook</h2>
                <Notification message={errorMessage}/>
                <Success message={success}/>
                <Filter search={search} setSearch={handleSearch}/>
                <h3>Add a new</h3>
                <PersonForm add={addPerson}
                    name={newName} setName={handleNameChange}
                    phone={newPhone} setPhone={handlePhoneChange}/>
                <h3>Numbers</h3>
                    {searchFilter(persons,search,deletePerson)}
            </div>
        )
  
}

export default App;