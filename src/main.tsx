import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Model, createServer } from 'miragejs'

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelancer website',
					type: 'deposit',
					amount: 6000,
					category: 'Dev',
					createdAt: new Date('2024-01-30 09:00:00'),
				},
				{
					id: 2,
					title: 'Aluguel',
					type: 'withdraw',
					amount: 500,
					category: 'Casa',
					createdAt: new Date('2024-02-30 09:00:00'),
				},
			],
		})
	},

	routes() {
		this.namespace = 'api'

		this.get('/transactions', () => {
			return this.schema.all('transaction')
		})

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody)
			return schema.create('transaction', data)
		})
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
