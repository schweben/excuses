import { useRef, useState } from "react";

type BuildYourOwnExcuseProps = {
	whatOptions: string[];
	whereOptions: string[];
}

const BuildYourOwnExcuse: React.FC<BuildYourOwnExcuseProps> = ({whatOptions, whereOptions}) => {

	const [excuse, setExcuse] = useState<string>();

	const what = useRef<string>('');
	const where = useRef<string>('');

	const getByoeExcuse = () => {
		setExcuse(`I have to take my ${what.current.toLowerCase()} to the ${where.current.toLowerCase()}`);
	}

	return (
		<div>
			<div>
				<h2>Build your own excuse or get a random one</h2>
				<label>
					What
					<select onChange={(e) => what.current = e.currentTarget.value}>
						{whatOptions.map(function (option, index) {
							return (
								<option key={index}>{option}</option>
							)
						})}
					</select>
				</label>
				<label>
					Where
					<select onChange={(e) => where.current = e.currentTarget.value}>
						{whereOptions.map(function (option, index) {
							return (
								<option key={index}>{option}</option>
							)
						})}
					</select>
				</label>
				<button onClick={getByoeExcuse}>Get Excuse</button>
			</div>
			<div>
				{excuse}
			</div>
		</div>
	);
}

export default BuildYourOwnExcuse;
