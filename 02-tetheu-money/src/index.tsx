import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {createServer, Model} from 'miragejs';



createServer({

  models: {
    transaction: Model, 
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Teste 01',
          type: 'deposit',
          category: 'test',
          amount: 6000,
          createdAt: new Date()
        },

        {
          id: 2,
          title: 'Teste 02',
          type: 'withdraw',
          category: 'test',
          amount: 2000,
          createdAt: new Date()
        },
      ]
    })
  },

  routes(){
      this.namespace = 'api';
      this.get('/transactions', () => {
          return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return schema.create('transaction', data)
      })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

