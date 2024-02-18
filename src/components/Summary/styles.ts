import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-top: -8rem;

	div {
		background: var(--gray400);
		padding: 1.5rem 2rem;
		border-radius: 0.25rem;
		color: var(--gray700);

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		strong {
			margin-top: 1rem;
			font-size: 2rem;
			font-weight: bold;
			line-height: 3rem;
		}

		&:last-child {
			background: var(--green-dark);
		}
	}
`
