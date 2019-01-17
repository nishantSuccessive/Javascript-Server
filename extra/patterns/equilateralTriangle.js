function equilateralTriangle(row){
    let pattern =  " ";
    let temp = row;
    for(let index = 0; i<row ; index++) {
        for(let temp1 = temp; temp1>0; temp1--) {
             pattern = pattern + " ";
         }

        for(let temp2 = index; temp2>=0; temp2--) {

            pattern = pattern + "* ";
        }
        console.log(pattern);
        temp--;
        pattern = " "
    }
}
EquilateralTriangle(10)