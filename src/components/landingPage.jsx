  
import React, { Component } from 'react'
import videira from '../assets/videiraLogo.png'
import '../App.css';

export default class LandingPage extends Component {
  render() {
    return (
      <section className="App">
        <div className="App-header">
          <img src={videira} className="logo" alt="videira" />
          <p>
            Escolha um valor para contribuir.
          </p>

          <div className="rows">

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/fb89b27c-f9a1-4fd4-bc26-30cf6c58c689?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 5,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/99b7a35f-b52a-4911-9d12-9ae34240fb2c?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 10,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/7edc02d9-562e-48aa-aa46-383443fca0e2?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 20,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/5a3af4e7-e433-4846-a0f1-49df3b9b87ef?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 30,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/8256c0aa-85ca-46f5-9039-5c4bae2cb016?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 40,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/db1f8976-b780-4c59-80c5-860ee1cabb8a?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 50,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/16cd570d-7c3e-48ed-8b59-993a9d6231dd?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 100,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/5594678a-80d8-4266-bf2d-3b828780f9c2?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 200,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/03257d82-b8e5-435f-a541-bfb1eece3706?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 300,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/72eb1648-f15b-468a-97ca-082fecf4737d?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 400,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/9b58af92-7006-4960-ba41-72ca00a2cf4a?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 500,00</span> 
                  </div>
              </a>
            </div>

            <div className="App-card">
              <a
                className="App-link"
                href="https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Finalize/733aa347-f0e8-4902-afa0-fa3d959b3362?type=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <div className="App-line">
                    <span className="App-title">R$ 1.000,00</span> 
                  </div>
              </a>
            </div>

          </div>
        </div>
      </section>
    )
  }
}