import React from "react";
class Flip extends React.Component{
    state={
        image:"https://rukminim1.flixcart.com/image/416/416/xif0q/screen-guard/edge-to-edge-tempered-glass/h/v/e/oneplus-nord-2-ce-realme-gt-gtneo-gtmaster-x7max-oppo-reno-6-original-imaggkppwjgcshz3.jpeg?q=70"
        }
        render(){
            
          return <div>
        
            <div className="container-fluid ">
                <div className="card  ">
                    <div className="card-body bg-warning ">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <div className="card">
                            <div className="card-body">
                                <img src={this.state.image} height="300px"></img>&nbsp;
                                <div className="row mt-4">
                                    <div className="col-4">
                                        <button className="btn-danger">cart</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn-success">buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 mt-4">
                        <h3>OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM)</h3>
                        <h2>₹19,360₹19,9993% off</h2>
                        <pre>
                            <ul>
                                <li>Bank Offer10% off on Citi Credit Card Transactions, up to ₹1,500. On orders of ₹5,000 and aboveT&C</li>
                                <li>Bank Offer12% off on Citi Credit Card EMI Transactions, up to ₹2,000. On orders of ₹5,000 and aboveT&C</li>
                                <li>Special PriceGet extra ₹639 off (price inclusive of cashback/coupon)T&C</li>
                            </ul>
                        </pre>
                        <h5>Highlights</h5>
                        <pre>
                            <ul>
                            <li>6 GB RAM | 128 GB ROM</li>
                            <li>16.74 cm (6.59 inch) Display</li>
                            <li>64MP Rear Camera</li>
                            <li>5000 mAh Battery</li>
                                
                            </ul>
                        </pre>
                        
                           <div className="row">
                            <div className="col-2 ">
                                <img src="data:image/png;base64,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" height="150px"></img>
                            </div>
                            <div className="col-1"></div>
                    
                            <div className="col-4 my-5">
                                <h5>for every rs:100 earn 2 coins</h5>
                            </div>
                            
                           </div>
                           <div className="row">
                            <div className="col-3"><h4>Specifications</h4></div>
                            <div className="row">
                            <pre>
                                <ul>
                                    <li>in The BoxPhone,SIM Tray Ejector, Adapter, Phone Case, USB Cable</li>
                                    <li>Model NumberCPH2381</li>
                                    <li>Model Name Nord CE 2 Lite 5G</li>
                                    <li>Color Blue Tide</li>
                                </ul>
                            </pre>
                            </div>
        
                            </div>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-4">
                                    <button className="btn-success">RATING***</button>
                                </div>
                           </div>
                        
                        
                    </div>
                </div>
                </div>
              </div>
            </div>
            </div>
            
                            
                              
               
    }
}
        export default Flip