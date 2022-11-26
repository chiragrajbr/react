//class to function
import React from "react"
import ClsfunB from "./ClsfunB"
class ClsfunA extends React.Component{
    students={chirag:101,
              muni:102,
            chandan:103,
        darshan:104}

        teachers=["jerry","sumalatha","veena","shwetha"]
        call=120121

    render(){
        return <div>
      <ClsfunB student={this.students} teacher={this.teachers} call={this.call}/>
        </div>
    }
}
export default ClsfunA