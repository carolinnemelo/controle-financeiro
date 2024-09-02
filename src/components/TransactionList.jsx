import React from "react";

const TransactionList = ({ transactions }) => {
	return (
		<div>
			<h2>Listar Transacoes</h2>

			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Descrição</th>
						<th>Valor</th>
					</tr>
				</thead>
				<tbody>
				
					{transactions.map((transaction) => {
						return (
                            
							<tr>
								<td>{transaction.id}</td>
								<td>{transaction.description}</td>
								<td>{transaction.amount}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionList;

// import React from "react";

// function TransactionList({ transactions }) {
// 	return (
// 		<div>
// 			<h2>Transaction List</h2>
// 			<ul>
// 				{transactions.map((transaction) => (
// 					<li key={transaction.id}>
// 						{transaction.id}
// 						{transaction.description}
// 						{transaction.amount}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default TransactionList;
