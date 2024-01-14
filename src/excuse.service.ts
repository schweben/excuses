class ExcuseCategory {
	public name: string = '';
	public excuses: string[] = [];
}

export default class ExcuseService {

	private url: string = '/excuses.json';
	private excuseCategories: ExcuseCategory[] = [];

	constructor() {
		fetch(this.url)
			.then((response) => response.json())
			.then((data) => {
				this.excuseCategories = data.categories;
				console.log(this.excuseCategories);
			});
	}

	public getCategories(): string[] {
		console.log(this.excuseCategories);
		// console.log(this.excuseCategories.map((category) => category.name));
		return this.excuseCategories.map((category) => category.name);
	}

	public getExcuse(): string {
		return 'It works on my machine';
	}
}
