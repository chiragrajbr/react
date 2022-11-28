import React from "react";
class Product extends React.Component{
    state={
        name:"vivo Y16 (Drizzling Gold, 64 GB)  (3 GB RAM)",
        names:"Knotyy Back Cover for vivo Y16  (Blue, Flexible, Silicon, Pack of: 1)",
        image:"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/d/p/-original-imaggcerdxgpxyh3.jpeg?q=70",
        images:"https://rukminim1.flixcart.com/image/416/416/xif0q/cases-covers/back-cover/q/z/g/knty-rc-vivoy16-blu-01-knotyy-original-imaggssz7ypzm8jg.jpeg?q=70",
        price:16999,
        prices:20000,
        quntity:1,
        
        
        
    }
    
    decrement=()=>{
        this.setState({quntity:this.state.quntity -1})

    }
    increment=()=>{
        this.setState({quntity:this.state.quntity +1})

    }


    render(){
        return <div>
            <div className="container ">
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover " >
                        <thead className="table table-primary">
                            <tr>
                           <th>name</th>
                           <th>image</th>
                           <th>price</th>
                           <th>quantity</th>
                           <th>total</th>
                            </tr>
                        </thead>
                        <tbody className="table table-light">
                            <tr>
                                <td>{this.state.name}</td>
                                <td><img src={this.state.image}height="100px"></img></td>
                                <td>{this.state.price}</td>
                                <td><i className="fa fa-minus-circle " onClick={this.decrement}></i>{this.state.quntity}<i className="fa fa-plus-circle "onClick={this.increment}></i></td>
                                <td>{this.state.price * this.state.quntity}</td>
                                
                            </tr>
                            <tr>
                            <td>{this.state.names}</td>
                                <td><img src={this.state.images}height="100px"></img></td>
                                <td>{this.state.prices}</td>
                                <td><i className="fa fa-minus-circle " onClick={this.decrement}></i>{this.state.quntity}<i className="fa fa-plus-circle "onClick={this.increment
                                }></i></td>
                                <td>{this.state.prices * this.state.quntity}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    
    }
}
export default Product
        
             
