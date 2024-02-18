import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransaction'

Modal.setAppElement('#root')

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCLoseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCLoseNewTransactionModal}
			/>

			<Dashboard />
			<GlobalStyle />
		</TransactionsProvider>
	)
}
