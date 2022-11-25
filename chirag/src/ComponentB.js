function ComponentB(props) {
    return <div>
        <h1>component b</h1><hr />
        <h1>{JSON.stringify(props)}</h1>
        <h2>academy name:{props.name}</h2>
        <h2>location:{props.location}</h2>
        <h1>employee_details:{props.employee.id}</h1>
        <h2>known languages:{props.language}</h2>
    </div>
}
export default ComponentB