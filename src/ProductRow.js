import React from "react";
import "./ProductRow.css";

class ProductRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: this.props.product
        };
        this.destroy = this.destroy.bind(this);
        this.edit = this.edit.bind(this);
    }
    destroy(e){
        this.props.onDestroy(this.state.product);
        e.preventDefault();
    }
    edit(e){
        this.props.onEdit(this.state.product);
        e.preventDefault();
    }
    render() {
        return(
            <tr>
                <td>
                    <span className={this.props.product.stocked? "" : "ProductRow-out-of-stock"}>
                        {this.props.product.name}
                    </span>
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    <button onClick={this.edit} style={{color: "blue"}}>Edit</button>
                </td>
                <td>
                    <button onClick={this.destroy} style={{color: "red"}}>X</button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;