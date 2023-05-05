// Format any date created with SPRING BOOT to dd-mm-yyyy
export function timeToDate(date: Date): string {


  const dateFormat = new Date(date);
  console.log(dateFormat);

  let dd = dateFormat.getDate();
  let MM = dateFormat.getMonth() + 1;
  let yyyy = dateFormat.getFullYear();

  console.log(yyyy,"-",MM,"-",dd);
  
    // let yyyy = dateArray[0];
    // let MM = dateArray[1];
    // let dd = dateArray[2];
    
    // console.log(yyyy,"-",MM,"-",dd);
    // console.log(typeof yyyy,"-",typeof MM,"-",typeof dd);
    
    // return dd+"-"+MM+"-"+yyyy;

    return dd+"-"+MM+"-"+yyyy;
  }

  
  
  
  
  
  

