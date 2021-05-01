export default function diamond( row: number ): void {
	let pattern: string = " ";
	let temp: number = row;
	for ( let index: number = 0; index < row; index++ ) {
		for ( let temp1: number = temp; temp1 > 0; temp1-- ) {
			pattern = pattern + " ";
		}
		for ( let temp2: number = index; temp2 >= 0; temp2-- ) {
			pattern = pattern + "* ";
		}
		console.log( pattern );
		temp--;
		pattern = " ";
	}
	temp = row;
	for ( let index: number = 0; index < row; index++ ) {
		if ( index > 0 ) {
			for ( let temp3: number = index; temp3 >= 0; temp3-- ) {
				pattern = pattern + " ";
			}
		}
		for ( let temp4: number = temp; temp4 > 0; temp4-- ) {
			pattern = pattern + " *";
		}
		console.log( pattern );
		temp--;
		pattern = "";
	}
}
