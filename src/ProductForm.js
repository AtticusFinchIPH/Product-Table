import React from "react"

const RESET_VALUES = {
    id: "",
    name: "",
    category: "",
    price: "",
    stocked: false
}

class ProductForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: true,
            showError: false,
            product: Object.assign({}, RESET_VALUES)
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkName = this.checkName.bind(this);
        this.showError = this.showError.bind(this);
    }
    handleSave(e){
        if(!this.state.error) {
            this.props.onSave(this.state.product)
            this.setState({
                error: true,
                showError: false,
                product: Object.assign({}, RESET_VALUES)
            })
        } else {
            this.setState({
                showError: true
            })
        }      
        e.preventDefault();
    }
    handleChange(e){
        let target = e.target;
        let name = target.name;
        let value = target.type === "text" ? target.value : target.checked;
        if(name === "name") this.checkName(value);
        this.setState((preState)=>{
            preState.product[name] = value;
            return {product: preState.product}
        })
    }
    checkName(value){
        if(value) this.setState({
            error: false
        })
        else this.setState({
            error: true
        })
    }
    showError(){
        if(this.state.error && this.state.showError){
            return (
                <p>Name field must not be empty!</p>
            )
        } else return
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.edit!==this.props.edit){
          this.setState({product: nextProps.edit });
        }
      }
    /*static getDerivedStateFromProps(props, state){
        if(Object.keys(props.edit).length === 0 && props.edit.constructor === Object){
            this.setState(preState =>{
                let product = props.edit;
                return {product};
            })
        }
    }*/
    render() {
        return(
            <form>
                <h3>Enter a new Product</h3>
                <p>
                    <label>
                        Name : <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name}/>{this.showError()}
                    </label>
                </p>
                <p>
                    <label>
                        Category : <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category}/>
                    </label>
                </p>
                <p>
                    <label>
                        Price : <input type="text" name="price"  onChange={this.handleChange}  value={this.state.product.price}/>
                    </label>
                </p>
                <p>
                    <label>
          
                        <input type="checkbox" name="stocked" onChange={this.handleChange}  value={this.state.product.stocked}/>
                        In stock?                  
                    </label>
                </p>
                <input type="submit" value="save" onClick={this.handleSave}/>
            </form>
        );
    }
}

export default ProductForm;