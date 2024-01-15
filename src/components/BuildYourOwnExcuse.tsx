import { useState } from "react";

import styles from '../styles/buildyourownexcuse.module.css';

type BuildYourOwnExcuseProps = {
	whatOptions: string[];
	whereOptions: string[];
}

const BuildYourOwnExcuse: React.FC<BuildYourOwnExcuseProps> = ({whatOptions, whereOptions}) => {

	const [excuse, setExcuse] = useState<string>();
	const [what, setWhat] = useState<string>('');
	const [where, setWhere] = useState<string>('');
	const [random, setRandom] = useState<boolean>(false);

	const getExcuse = () => {
		if (random) {
			const randomWhat = whatOptions[Math.floor(Math.random() * (whatOptions.length - 1))];
			const randomWhere = whereOptions[Math.floor(Math.random() * (whereOptions.length - 1))];
			setExcuse(`I have to take my ${randomWhat.toLowerCase()} to the ${randomWhere.toLowerCase()}`);
		} else {
			setExcuse(`I have to take my ${what.toLowerCase()} to the ${where.toLowerCase()}`);
		}
	}

	const disableButton = (): boolean => {
		if (random) {
			return false;
		}

		return (what === "" || what === 'invalid') || (where === "" || where === 'invalid') ? true : false;
	}

	return (
		<div>
			<div>
				<h2>Build your own excuse or get a random one</h2>
				<label>
					What:
					<select onChange={(e) => setWhat(e.currentTarget.value)}>
						<option value="invalid">Choose a 'what'</option>
						{whatOptions.map(function (option, index) {
							return (
								<option key={index} value={option}>{option}</option>
							)
						})}
					</select>
				</label>
				<label>
					Where:
					<select onChange={(e) => setWhere(e.currentTarget.value)}>
						<option value="invalid">Choose a 'where'</option>
						{whereOptions.map(function (option, index) {
							return (
								<option key={index}>{option}</option>
							)
						})}
					</select>
				</label>
				<label className={styles.random}>
					Generate a random excuse:
					<input type="checkbox" checked={random} onChange={(e) => setRandom(!random)}/>
				</label>
				<button
					onClick={getExcuse}
					disabled={disableButton()}>
					Get excuse
				</button>
			</div>
			<div className="excuse">
				{excuse}
			</div>
		</div>
	);
}

export default BuildYourOwnExcuse;
