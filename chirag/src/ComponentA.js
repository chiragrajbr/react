import ComponentB from "./ComponentB"
function ComponentA(){
    let name="prostack"
    let location="marathalli banglore"
    let employee={id:101,name:"chirag",phno:9591}
    let languages=["kannada","english","hindi"]
    
      return <div>
        <h1>componentA</h1>
        <hr />
        <ComponentB name={name} location={location} employee={employee} language={languages}  />
      </div>
}
export default ComponentA