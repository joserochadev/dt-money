import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { Container, RadioBox, TransactionTypeContainer } from './style'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { useTransaction } from '../../hooks/useTransaction'

interface NewTransactionModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
	const { createTransaction } = useTransaction()

	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState(0)
	const [category, setCategory] = useState('')
	const [type, setType] = useState('deposit')

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault()

		await createTransaction({
			title,
			amount,
			category,
			type,
		})

		onRequestClose()
		setTitle('')
		setCategory('')
		setAmount(0)
		setType('')
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button type="button" onClick={onRequestClose} className="react-modal-close">
				<img src={closeImg} alt="close button" />
			</button>

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Nova transação</h2>

				<input
					placeholder="Descrição"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<input
					type="number"
					placeholder="Valor"
					value={amount}
					onChange={(event) => setAmount(Number(event.target.value))}
				/>
				<input
					placeholder="Categoria"
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>

				<TransactionTypeContainer>
					<RadioBox
						type="button"
						isActive={type === 'deposit'}
						activeColor="green"
						onClick={() => {
							setType('deposit')
						}}
					>
						<img src={incomeImg} alt="entradas" />
						<span>Entradas</span>
					</RadioBox>

					<RadioBox
						type="button"
						isActive={type === 'withdraw'}
						activeColor="red"
						onClick={() => {
							setType('withdraw')
						}}
					>
						<img src={outcomeImg} alt="saídas" />
						<span>Saídas</span>
					</RadioBox>
				</TransactionTypeContainer>

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	)
}
