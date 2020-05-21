import React from "react"
import ProductTableHeader from "./ProductTableHeader"
import ProductRow from "./ProductRow";

class ProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sort: {
                column: "name",
                direction: "desc"
            }
        }
        this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this);
    }
    sortByColumnAndDirection(objA, objB){
        let isDesc = this.state.sort.direction === "desc" ? 1 : -1;
        let [a,b] = [objA[this.state.sort.column], objB[this.state.sort.column]];
        if(this.state.sort.column === "price"){
            [a,b] = [a,b].map((value)=> parseFloat(value.replace(/[^\d.]/g,''),''),10)
        }
        if(a>b) return 1 * isDesc;
        if(a<b) return -1 * isDesc;
        return 0;
    }
    sortProducts(){
        let productAsArray = Object.keys(this.props.products).map((pid) => (this.props.products[pid]));
        return productAsArray.sort(this.sortByColumnAndDirection)
    }
    render() {       
        let rows = [];
        this.sortProducts().forEach((product) => {
            if(product.name.indexOf(this.props.filterText)===-1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            rows.push (
                <ProductRow product={product} key={product.id} onDestroy={this.props.onDestroy} onEdit={this.props.onEdit}/>
            )
        });
        return(
            <table>
                <thead>
                    <tr>
                        <ProductTableHeader column="Name" currentSort={this.state.sort}/>
                        <ProductTableHeader column="Price" currentSort={this.state.sort}/>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;