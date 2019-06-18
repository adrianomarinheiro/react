import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import image from '../../assets/mercadolivre.jpg';

class Search extends Component {
    constructor(){
        super();

        this.onSearch = this.onSearch.bind(this);
        this.state = {
            results: [],
        };
    }

    onSearch(event) {
        console.log(event.currentTarget.value);
        const value = event.currentTarget.value;

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
        .then((data) => {
            console.log(data);
            this.setState({
                results: data.data.results,
            })
        })
    }

    renderItem(item){
        return (
            <div className="list">
                <ul className="list-two mdl-list">
                    <li key={ item.id } class="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                            <span className="title">{ item.title }</span>
                            <span className="mdl-list__item-sub-title">{ item.condition }</span>
                        </span>
                        <span className="mdl-list__item-secondary-content">
                            <Link to={ `/product/${item.id}`}>
                                <i className="material-icons">chevron_right</i>    
                            </Link>
                        </span>
                    </li>
                </ul>    
            </div>
            
        )
    }

    render() {
        return (
            <div className="home">
                <div className="search ">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--N-col-phone">
                        <div className="mdl-cell--middle">
                            <input className="searchField" type="text" placeholder="Buscar no Mercado Livre" onChange={ this.onSearch } />
                            <ul>
                                { this.state.results.map(this.renderItem) }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="image">
                        <img alt="image" src={image} className="banner"/>
                    </div>
                    <div  className="greeting">
                        <span><p>Veja nossos destaques</p></span>
                    </div>
                    <div className="detach mdl-grid">
                        <div className="card-square mdl-card mdl-shadow--4dp mdl-cell mdl-cell--3-col ">
                            <div className="mdl-card__title mdl-card--expand">
                            <img src="https://http2.mlstatic.com/D_Q_NP_785732-MLB30243424447_052019-AB.webp"  alt="Novo Kindle Paperwhite 8gb" />
                                
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>Novo Kindle Paperwhite 8gb</p>
                                <span className="price"><p>R$ 449 | <span className="off">10% OFF</span></p></span>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={ `/product/MLB1223725098`}>
                                Veja Mais
                                </a>
                            </div>
                        </div>
                    
                        <div className="card-square mdl-card mdl-shadow--4dp mdl-cell mdl-cell--3-col ">
                            <div className="mdl-card__title mdl-card--expand">
                            <img src="https://http2.mlstatic.com/D_Q_NP_864984-MLB28570625708_112018-AB.webp"  alt="Smart Tv Led 32 Aoc Le32s5970s 3 Hdmi 2 Usb Wifi" />
                                
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>Smart Tv Led 32 Aoc Le32s5970s 3 Hdmi 2 Usb Wifi</p>
                                <span className="price"><p>R$ 869 | <span className="off">33% OFF</span></p></span>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={ `/product/MLB1131356440`}>
                                Veja Mais
                                </a>
                            </div>
                        </div>
                    
                        <div className="card-square mdl-card mdl-shadow--4dp mdl-cell mdl-cell--2-col ">
                            <div className="mdl-card__title mdl-card--expand">
                            <img src="https://http2.mlstatic.com/D_Q_NP_625078-MLB31072493814_062019-AB.webp"  alt="Celular Zenfone 5 Preto Asus Tela 6,2  4g 64gb Ze620kl" />
                                
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>Celular Zenfone 5 Preto Asus Tela 6,2  4g 64gb Ze620kl</p>
                                <span className="price"><p>R$ 1.469 | <span className="off">23% OFF</span></p></span>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={ `/product/MLB1088128967`}>
                                Veja Mais
                                </a>
                            </div>
                        </div>
                    
                        <div className="card-square mdl-card mdl-shadow--4dp">
                            <div className="mdl-card__title mdl-card--expand">
                            <img src="https://http2.mlstatic.com/D_Q_NP_859201-MLB31100409659_062019-AB.webp"  alt="Samsung Galaxy A50 Infinita 6.4 4g 64 Gb 25mp Sm-a505gzwbzto" />
                                
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>Samsung Galaxy A50 Infinita 6.4 4g 64 Gb 25mp Sm-a505gzwbzto</p>
                                <span className="price"><p>R$ 1.599 | <span className="off">23% OFF</span></p></span>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={ `/product/MLB1231193580`}>
                                Veja Mais
                                </a>
                            </div>
                        </div>
                    
                        <div className="card-square mdl-card mdl-shadow--4dp">
                            <div className="mdl-card__title mdl-card--expand">
                            <img src="https://http2.mlstatic.com/D_Q_NP_642797-MLB31123320810_062019-AB.webp"  alt="Ar Condicionado Split Hi Wall Consul Inverter 9000 Frio 220v" />
                                
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>Ar Condicionado Split Hi Wall Consul Inverter 9000 Frio 220v</p>
                                <span className="price"><p>R$ 1.359 | <span className="off">32% OFF</span></p></span>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={ `/product/MLB31123320810`}>
                                Veja Mais
                                </a>
                            </div>
                        </div>

                        <div className="card-square mdl-card mdl-shadow--4dp">
                            <div className="mdl-card__title mdl-card--expand">
                            <img src="https://http2.mlstatic.com/D_Q_NP_600974-MLB31001566939_062019-AB.webp"  alt="Creme Preventivo De Assaduras Desitin Máxima Duração 57g" />
                                
                            </div>
                            <div className="mdl-card__supporting-text">
                                <p>Creme Preventivo De Assaduras Desitin Máxima Duração 57g</p>
                                <span className="price"><p>R$ 45 | <span className="off">31% OFF</span></p></span>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={ `/product/MLB31001566939`}>
                                Veja Mais
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="footer mdl-cell mdl-cell--12-col">
                    <table className="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
                        <thead>
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Garantias do maior site de compras da América Latina</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="mdl-data-table__cell--non-numeric"><img src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg" className="img-container" alt="Pague com cartão de crédito ou boleto"/>Pague com cartão de crédito ou boleto</td>
                            </tr>
                            <tr>
                                <td className="mdl-data-table__cell--non-numeric"><img src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg" className="img-container" alt="Frete grátis a partir de R$ 120"/>Frete grátis a partir de R$ 120</td>
                            </tr>
                            <tr>
                                <td className="mdl-data-table__cell--non-numeric"><img src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg" className="img-container" alt="Segurança, do início ao fim"/>Segurança, do início ao fim</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                

            </div>
            

            




        );
    }
}

export default Search;