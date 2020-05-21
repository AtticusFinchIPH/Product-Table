import React from "react"
import "./ProductTableHeader.css"

class ProductTableHeader extends React.Component{
    render() {
        return(
            <th>
                {this.props.column}
                <button className={this.props.currentSort.column === this.props.column.toLowerCase() ? (this.props.currentSort.direction === "incr" ? "ProductTableHeader-current" : "") : ""}>&#x25B2;</button>
                <button className={this.props.currentSort.column === this.props.column.toLowerCase() ? (this.props.currentSort.direction === "desc" ? "ProductTableHeader-current" : "") : ""}>&#x25BC;</button>
            </th>
        );
    }
}

export default ProductTableHeader;