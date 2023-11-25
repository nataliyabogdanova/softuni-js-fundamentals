function taxCalculator(array) {

    let arrayString = array[0];
    let vehicles = arrayString.split(">>");
    let totalTaxCollected = 0;
      
        for (let vehicleInfo of vehicles) {
          let [carType, years, kilometers] = vehicleInfo.split(" ");
          years = Number(years);
          kilometers = Number(kilometers);
      
          let tax = 0;
      
          switch (carType) {
            case "family":
              tax = 50 - years * 5 + Math.floor(kilometers / 3000) * 12;
              break;
            case "heavyDuty":
              tax = 80 - years * 8 + Math.floor(kilometers / 9000) * 14;
              break;
            case "sports":
              tax = 100 - years * 9 + Math.floor(kilometers / 2000) * 18;
              break;
            default:
              console.log("Invalid car type.");
              continue;
          }
      
          totalTaxCollected += tax;
          console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
        }
      
        console.log(`The National Revenue Agency will collect ${totalTaxCollected.toFixed(2)} euros in taxes.`);
      }  
taxCalculator(([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]))