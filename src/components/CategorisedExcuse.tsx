import { useState, useRef } from "react";
import { ExcuseCategory } from '../ExcuseCategory';

type CategorisedExcuseProps = {
	categories: ExcuseCategory[];
}

const CategorisedExcuse: React.FC<CategorisedExcuseProps> = ({categories}) => {

	const [excuse, setExcuse] = useState<string>();
	const selectedCategory = useRef<string>();

	const getRandomExcuse = (event: React.FormEvent<HTMLButtonElement>) => {
		const excuses: string[] = categories[categories.findIndex((category) => category.name === selectedCategory.current)].excuses;
		let newExcuse;
		// do {
			const random: number = Math.floor(Math.random() * (excuses.length - 1));
			newExcuse = excuses[random];
		// } while (newExcuse !== excuse);
		setExcuse(newExcuse);
	}

	return (
		<div>
			<div>
				<h2>Choose a category to get an excuse</h2>
				<label>
					Excuse category
					<select onChange={(e) => selectedCategory.current = e.currentTarget.value}>
						{categories.map(function(category, index) {
							return (
								<option key={index}>{category.name}</option>
							)
						})}
					</select>
				</label>
				<button onClick={getRandomExcuse}>Get an excuse</button>
			</div>
			<div>
				{excuse}
			</div>
		</div>
	);
}

export default CategorisedExcuse;
