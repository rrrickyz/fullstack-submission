function searchFilter(arr,search,Remove){
        
    return(
        <div>
                {arr.filter(person => person.name.toLowerCase().includes(search.toLowerCase())).map(filteredPerson =>(
                        <p key={filteredPerson.id}>{filteredPerson.name} {filteredPerson.number}
                        <button onClick={() =>Remove(filteredPerson.id,filteredPerson.name)}>delete</button></p>
                        
                ))}
        </div>

    )
}

export default searchFilter;

