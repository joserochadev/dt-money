import styled from 'styled-components'

export const Container = styled.form`
	h2 {
		color: var(--gray700);
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		border-radius: 0.25rem;
		font-weight: 400;
		font-size: 1rem;
		background: var(--gray100);
		color: var(--gray500);
		border: 0;

		&::placeholder {
			color: var(--gray500);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type='submit'] {
		width: 100%;
		height: 4rem;
		padding: 0 1.25rem;
		border-radius: 0.24rem;
		background: var(--green);
		color: var(--gray700);
		font-size: 1rem;
		font-weight: 700;
		border: 0;
		margin-top: 1rem;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`

export const TransactionTypeContainer = styled.div`
	margin: 1rem 0;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.5rem;
`

interface RadioBoxProps {
	isActive: boolean
	activeColor: 'green' | 'red'
}

const colors = {
	green: '#015f43',
	red: '#aa2834',
	default: '#29292e',
}

export const RadioBox = styled.button<RadioBoxProps>`
	height: 4rem;
	border-radius: 0.25rem;
	background: ${(props) => (props.isActive ? colors[props.activeColor] : colors.default)};
	border: 0;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.9);
	}

	img {
		width: 24px;
		height: 24px;
	}

	span {
		color: var(--gray600);
		font-size: 1rem;
	}
`
