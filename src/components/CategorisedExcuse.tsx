import { useState } from "react";
import { ExcuseCategory } from '../ExcuseCategory';

type CategorisedExcuseProps = {
	categories: ExcuseCategory[];
}

const CategorisedExcuse: React.FC<CategorisedExcuseProps> = ({categories}) => {

	const [excuse, setExcuse] = useState<string>();
	const [selectedCategory, setSelectedCategory] = useState<string>();

	const getRandomExcuse = (event: React.FormEvent<HTMLButtonElement>) => {
		if (selectedCategory) {
			const excuses: string[] = categories[categories.findIndex((category) => category.name === selectedCategory)].excuses;
			const random: number = Math.floor(Math.random() * (excuses.length - 1));
			setExcuse(excuses[random]);
		}
	}

	return (
		<div>
			<div>
				<h2>Choose a category to get an excuse</h2>
				<label>
					Excuse category:
					<select onChange={(e) => setSelectedCategory(e.currentTarget.value)}>
						<option value="invalid">Pick a category</option>
						{categories.map(function(category, index) {
							return (
								<option key={index} value={category.name}>{category.name}</option>
							)
						})}
					</select>
				</label>
				<button
					onClick={getRandomExcuse}
					disabled={selectedCategory === undefined || selectedCategory === 'invalid' ? true : false}>
					Get excuse
				</button>
			</div>
			<div className="excuse">
				{excuse}
			</div>
		</div>
	);
}

export default CategorisedExcuse;
