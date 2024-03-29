import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 4rem;

	table {
		width: 100%;
		border-spacing: 0 0.5rem;

		td {
			padding: 1rem 2rem;
			border: 0;
			background: var(--gray300);
			color: var(--gray600);
			border-radius: 0%.25rem;

			&.deposit {
				color: var(--green-light);
			}

			&.withdraw {
				color: var(--red);
			}
		}
	}
`
