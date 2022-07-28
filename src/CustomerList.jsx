import React,{Component} from "react";
export default class CustomerList extends Component{
    state={
        pageTitle:"Customers",customersCount:5,
    customers:[{id:1,name:"Cott",phone:"123-154",address:{city:"New Delhi"},photo:"https://picsum.photos/id/1010/60",},
                {id:2,name:"ravi",phone:null,address:{city:"Delhi Ncr"},photo:"https://picsum.photos/id/1011/60",},
            {id:3,name:"himf",phone:"542-256",address:{city:"Delhi"},photo:"https://picsum.photos/id/1012/60",},
            ],
    };
    render(){
        return <div>
            <h4 className=" m-1 p-1">{this.state.pageTitle}
        <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
        <button className="btn btn-info" onCLick={this.onRefreshClick}>Refresh</button>
        </h4>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Customer Name</th>
                    
                    <th>Phone</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
               {this.getCustomerRow()}; 
               
            </tbody>
        </table>
        </div>;
    }
    //Excutes when the user clicks on refresh butoon
    onRefreshClick= () => {
        this.setState({customersCount:7
        
        });
    }
    getPhoneTORender=(phone)=>{
        return phone?(phone):(<div className="bg-warning p-2 text-center">No phone</div>);
    }
    getCustomerRow=()=>{
        return this.state.customers.map((cust,index)=>{
            return ( <tr key={cust.id}>
                <td>{cust.id}</td>
                <td><img src={cust.photo} alt="customer"/>
                <div><button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust,index);}}>change picture</button>
                </div>
                </td>
               
                <td>{cust.name}</td>
                <td>{this.getPhoneTORender(cust.phone)}</td>
                <td>{cust.address.city}</td>
            </tr>
            );
    });
};
onChangePictureClick=(cust,index)=>{
    var custArr=this.state.customers;
    custArr[index].photo="https://picsum.photos/id/1016/60";
    this.setState({customers:custArr});
}  ;
}