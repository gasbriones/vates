import  React from 'react'

export default class Combo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: props.datos,
            subDatos: [],
            background:''
        }
        this._handlechange = this._handlechange.bind(this);
    }

    _getSubDatos(key) {
        switch (key) {
            case 'Frutas':
                return ['Banana', 'Manzana', 'Peras', 'Uvas'];
                break;
            case 'Verduras':
                return ['Papa', 'Cebolla', 'Acelga', 'Zapallo'];
                break;
        }
    }

    _handlechange(e) {
        this.setState({
            subDatos: this._getSubDatos(e.target.value)
        });
    }
    //será
    componentWillMount(){
        this.setState({
            background: 'red'
        });
    }


    //fueMontado
    componentDidMount(){
        this.setState({
            background: 'green'
        });
    }

    getDatos() {
        return this.state.datos;
    }

    render() {
        return (
            <div>
                <select onChange={this._handlechange}>
                    {this.getDatos().map((dato, key)=> {
                        return <option key={key}>
                            {dato}
                        </option>
                    })}
                </select>
                <select>
                    {this.state.subDatos.map((subDato, key)=> {
                            return <option key={key}>
                                {subDato}
                            </option>
                        })}
                </select>
            </div>
        );
    }
}