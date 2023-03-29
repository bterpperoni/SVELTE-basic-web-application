// Format any date created with SPRING BOOT to dd-mm-yyyy
export function timeToDate(date: Date): string {
    let dateArray = date.toString().split(',');

    console.log(dateArray);

    let yyyy = dateArray[0].trim();
    let MM = dateArray[1].trim();
    let dd = dateArray[2].trim();
    
    console.log(yyyy,"-",MM,"-",dd);
    console.log(typeof yyyy,"-",typeof MM,"-",typeof dd);
    
    return dd+"-"+MM+"-"+yyyy;
  }

  
  
  
  
  
  

