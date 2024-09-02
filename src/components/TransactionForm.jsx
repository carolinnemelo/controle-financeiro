import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {

	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");

	const handleSubmit = (e) => {
		//e event
		e.preventDefault();
		if (description && amount) {
			addTransaction({ description, amount: parseFloat(amount) });
			setDescription("");
			setAmount("");

		}
		// limpar form
		setDescription("");
		setAmount("");
	};

	return (
		<div>
			<h2>Adicionar transação</h2>
			<div className="alert alert-danger">
				Por favor, preencha todos os campos corretamente.
			</div>
			<form
				action=""
				onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						className="form-control"
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						className="form-control"
						id="amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary">
					Adicionar transação
				</button>
			</form>
		</div>
	);
};

export default TransactionForm;
