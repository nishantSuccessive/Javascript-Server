export default function diamond(row) {
    let pattern =  " ";
    let temp = row;
    for(let index = 0; index<row ; index++) {
       for(let temp1 = temp; temp1>0; temp1--) {
             pattern = pattern + " ";
         }
          for(let temp2 = index; temp2>=0; temp2--){
            pattern = pattern + "* ";
          }
    console.log(pattern);
        temp--;
        pattern = " "
    }
       temp = row;
    for(let index = 0; index < row; index++){
              if(index>0){
                 for(let temp3=index; temp3>=0; temp3--){
                    pattern = pattern + " "
            }
        }
     for(let temp4 = temp; temp4 > 0; temp4--) {
               pattern = pattern + " *";
          }
      console.log(pattern)
          temp--;
          pattern = ""
      }
}



