import React,{Component} from "react";
import Product from "./product"
export default class ShoppingCart extends Component{
    state={
        products:[
            {id:1,productName:"iphone",price:8900,quantity:0},
            {id:2,productName:"vphone",price:88900,quantity:12},
            {id:3,productName:"vphone",price:8500,quantity:8},
            {id:4,productName:"zphone",price:800,quantity:45},
            {id:5,productName:"ophone",price:900,quantity:7},
        ],
    };
    render(){
        return <div className="container-fluid">
            <h4>Shopping cart</h4>
            <div className="row">
                {this.state.products.map((prod)=>{
                        return <Product key={prod.id} 
                        id={prod.id}
                        productName={prod.productName}
                        price={prod.price}/>
                })}
            </div>
            
            </div>
    }
}