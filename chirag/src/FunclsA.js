//function to class
import FunclsB from "./FunclsB"
function FunclsA(){
   let cars=["SWIFT","BMW","BENZ"]
   var bikes_price={
    r15:150000,
    duke:250000
   }
    return <div>
        <FunclsB cars={cars} bikes={bikes_price} />

    </div>
}
export default FunclsA