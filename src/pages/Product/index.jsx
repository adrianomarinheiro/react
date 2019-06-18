import React, { Component } from 'react';
import axios from 'axios'
import './style.css';

class Product extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: props.match.params.id,
            loading: true,
            data: {},
        };
    }
    
    componentDidMount(){
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ])
        
        .then(([item, description]) => {
            console.log(item, description)
            
            this.setState({
                data: {
                    ...item.data,
                    description: description.data.plain_text,
                },
                loading: false,
            });
            
        })
        .catch((err) => {
            console.log(err)
        });
    }
    
    render () {
        const { id, data, loading } = this.state;
        if(loading){
            return (
                <div className="loading mdl-grid ">
                    <div className="mdl-spinner mdl-js-spinner is-active"></div>
                    <p>Carregando...</p>
                </div>
            );
        } else {
            return (
                <div className="main mdl-grid">
                    <div className="image mdl-cell mdl-cell--5-col">
                        <div className="mdl-cell mdl-cell--4-col">
                            <img  src={ data.pictures[0].url } />
                        </div>
                    </div>
                    <div className="info mdl-cell mdl-cell--5-col">
                        <div className="mdl-cell mdl-cell--12-col">
                            <div className="mdl-layout-title">
                                {data.title}
                            </div>
                            <div className="mdl-layout__sub-title">
                                {data.id}
                            </div>
                            <div className="available mdl-layout__sub-title">
                               <p>Disponíveis: {data.available_quantity} Peças</p>
                            </div>
                            <div className="price mdl-layout__content">
                                R$ {data.price}
                            </div>
                            <hr></hr>
                            <div className="location mdl-layout__sub-title">
                                <h5>Localização do vendedor</h5>
                               <p>Cidade: { data.seller_address.city.name }</p>
                               <p>Estado: { data.seller_address.state.name }</p>
                               <p>País: { data.seller_address.country.name }</p>
                            </div>
                            <hr></hr>
                            <div className="mdl-cell--12-col">
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"><a href="mailto:">Compartilhar</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="mdl-grid">
                        <div className="description mdl-cell mdl-cell--12-col">
                            <h5>Descrição</h5>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
                
                );
            }
            
        }
    }
    
    export default Product;