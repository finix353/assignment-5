
// innerText Chenge function


function changeInnerText(idName, value) {

    let idInnerText = document.getElementById(idName);
    idInnerText.innerText = value
  
  
  }
  
  
  //  append Element function and remove
  function appendElement(idName, Element) {
    document.getElementById(idName).appendChild(Element)
  
  }
  
  function removeElement(idName, Element) {
    document.getElementById(idName).appendChild(Element)
  
  }
  
  
  let ticketButtonList = document.getElementsByClassName('t-btn');
  let totalSeatsLeft = parseInt(document.getElementById('seatLeft').innerText);
  let totalPrice = parseInt(document.getElementById('total_Price').innerText)
  let grandTotal = parseInt(document.getElementById('grand_Total').innerText)
  let seatCount = 0;
  let addList1ClassList = document.getElementById('addList1').classList;
  let addList2ClassList = document.getElementById('addList2').classList;
  let addList3ClassList = document.getElementById('addList3').classList;
  let addList4ClassList = document.getElementById('addList4').classList;
  let ticketSelectCount = 1;
  const numberInputValue = document.getElementById('number');
  const submitButton = document.getElementById('next');
  let number = document.getElementById('number')
  
  
  
  
  
  
  for (let ticketButton of ticketButtonList) {
    let ticketButtonInnerText = ticketButton.innerText;
  
  
    
    ticketButton.addEventListener('click', function () {
  
      document.getElementById('discountList-2').classList.add('hidden')
      document.getElementById('discountList-1').classList.add('hidden')
       if (ticketSelectCount <= 4 && !ticketButton.classList.contains('bg-[#1AD100]', 'text-white')) {
          //   add total price and show on page
          totalPrice = totalPrice + 550;
  
          // grandTotal 
  
          grandTotal = grandTotal + 550;
  
          changeInnerText('grand_Total', grandTotal);
  
          // grandTotal 
  
  
          changeInnerText('total_Price', totalPrice);
  
          changeInnerText('total_Price', totalPrice);
          //   add total price and show on page
  
  
          ticketButton.classList.add('bg-[#1AD100]', 'text-white');
          //   add and append child classlist 
  
          if (addList1ClassList.contains('addListRed') === false) {
  
             addList1ClassList.add('addList', 'addListRed')
  
             let createElement1 = document.createElement('h6');
             createElement1.innerText = ticketButtonInnerText;
             createElement1.className = ticketButtonInnerText + " " + "addListText-1";
  
             appendElement('addList1', createElement1)
             let a = "hallo";
  
  
             let createElement2 = document.createElement('h6');
             createElement2.innerText = "Economoy";
             createElement2.className = ticketButtonInnerText + " " + "addListText-2";
  
             appendElement('addList1', createElement2);
  
  
             let createElement3 = document.createElement('h6');
             createElement3.innerText = "550";
             createElement3.className = ticketButtonInnerText + " " + "addListText-3";
  
             appendElement('addList1', createElement3);
  
  
          } else if (addList2ClassList.contains('addListRed') === false) {
  
             addList2ClassList.add('addList', 'addListRed')
             let createElement1 = document.createElement('h6');
             createElement1.innerText = ticketButtonInnerText;
             createElement1.className = ticketButtonInnerText + " " + "addListText-1";
  
             appendElement('addList2', createElement1)
             let a = "hallo";
  
  
             let createElement2 = document.createElement('h6');
             createElement2.innerText = "Economoy";
             createElement2.className = ticketButtonInnerText + " " + "addListText-2";
  
             appendElement('addList2', createElement2);
  
  
             let createElement3 = document.createElement('h6');
             createElement3.innerText = "550";
             createElement3.className = ticketButtonInnerText + " " + "addListText-3";
  
             appendElement('addList2', createElement3);
  
  
          } else if (addList3ClassList.contains('addListRed') === false) {
             addList3ClassList.add('addList', 'addListRed')
             let createElement1 = document.createElement('h6');
             createElement1.innerText = ticketButtonInnerText;
             createElement1.className = ticketButtonInnerText + " " + "addListText-1";
  
             appendElement('addList3', createElement1)
             let a = "hallo";
  
  
             let createElement2 = document.createElement('h6');
             createElement2.innerText = "Economoy";
             createElement2.className = ticketButtonInnerText + " " + "addListText-2";
  
             appendElement('addList3', createElement2);
  
  
             let createElement3 = document.createElement('h6');
             createElement3.innerText = "550";
             createElement3.className = ticketButtonInnerText + " " + "addListText-3";
  
             appendElement('addList3', createElement3);
  
  
          } else if (addList4ClassList.contains('addListRed') === false) {
             addList4ClassList.add('addList', 'addListRed')
             let createElement1 = document.createElement('h6');
             createElement1.innerText = ticketButtonInnerText;
             createElement1.className = ticketButtonInnerText + " " + "addListText-1";
  
             appendElement('addList4', createElement1)
             let a = "hallo";
  
  
             let createElement2 = document.createElement('h6');
             createElement2.innerText = "Economoy";
             createElement2.className = ticketButtonInnerText + " " + "addListText-2";
  
             appendElement('addList4', createElement2);
  
  
             let createElement3 = document.createElement('h6');
             createElement3.innerText = "550";
             createElement3.className = ticketButtonInnerText + " " + "addListText-3";
  
             appendElement('addList4', createElement3);
  
  
          }
          //   add and append child classlist 
  
  
          //   Count seat and display increase on page
          seatCount = seatCount + 1;
          changeInnerText("ticketSelectedCount", seatCount)
  
          totalSeatsLeft = totalSeatsLeft - 1;
          changeInnerText('seatLeft', totalSeatsLeft)
          ticketSelectCount++;
          //   Count seat and display increase on page
          // next button disable and enable 
          // if (seatCount !==0){
  
          //   let applyButton = document.getElementById('next');
          //   applyButton.disabled = false ;
  
  
          // }else{
          //   let applyButton = document.getElementById('next');
          //   applyButton.disabled = true ;
  
          //        }
          // next button disable and enable 
  
  
          // apply button Enable on fore sits complit
  
          if (seatCount === 4) {
             let applyButton = document.getElementById('apply');
             applyButton.disabled = false;
             
  
  
          }
  
          // apply button Enable on fore sits
  
  
          // normal cheak on clik button
  
          if (seatCount > 0 && numberInputValue.value.length > 0) {
             submitButton.disabled = false;
          } else {
             submitButton.disabled = true;
          }
  
  
          // input cheke
  
          numberInputValue.addEventListener('input', function () {
  
             if (seatCount > 0 && numberInputValue.value.length > 0) {
                submitButton.disabled = false;
             } else {
                submitButton.disabled = true;
             }
          });
  
  
          // / Disable and enable next button submit
  
  
       } else if (ticketButton.classList.contains('bg-[#1AD100]', 'text-white')) {
          //   Decrease total price and show on page
          totalPrice = totalPrice - 550;
          changeInnerText('total_Price', totalPrice);
          // grandTotal 
          grandTotal = grandTotal - 550;
          changeInnerText('grand_Total', grandTotal)
          //   Decrease total price and show on page
  
  
          //    remove class list 
  
  
          let ticketButtonInnerText = ticketButton.innerText;
          let removeClassList = "." + ticketButtonInnerText;
          let classList = document.querySelectorAll(removeClassList);
  
          let bgRedClass = ".addListRed" + " " + "." + ticketButtonInnerText;
  
          let bgRedParent = document.querySelector(bgRedClass).parentElement;
          bgRedParent.classList.remove('addListRed')
  
  
          document.querySelector('.addListRed ')
  
          classList.forEach(function (item) {
             item.remove();
  
  
          })
  
          //    remove class list 
  
  
          // left seat and set count is hear
  
          ticketButton.classList.remove('bg-[#1AD100]', 'text-white');
          totalSeatsLeft = totalSeatsLeft + 1;
          changeInnerText('seatLeft', totalSeatsLeft)
  
          ticketSelectCount--;
          changeInnerText("ticketSelectedCount", ticketSelectCount)
          seatCount = seatCount - 1;
          changeInnerText("ticketSelectedCount", seatCount)
          //   left seat and set count is hear
  
       }
  
  
       if (seatCount < 4) {
          let applyButton = document.getElementById('apply');
          applyButton.disabled = true;
       }
  
  
       // / Disable and enable next button submit
  
  
       // normal cheak on clik button
  
       if (seatCount > 0 && numberInputValue.value.length > 0) {
          submitButton.disabled = false;
       } else {
          submitButton.disabled = true;
       }
  
  
       // input cheke
  
       numberInputValue.addEventListener('input', function () {
  
          if (seatCount > 0 && numberInputValue.value.length > 0) {
             submitButton.disabled = false;
          } else {
             submitButton.disabled = true;
          }
       });
  
  
       // / Disable and enable next button submit
  
  
       // next button disable and enable 
  
       //  if (seatCount ===0){
  
       //   let applyButton = document.getElementById('next');
       //   applyButton.disabled = true ;
  
  
       // }
       // next button disable and enable 
  
  
  
  
  
  
  
  
  
  
  
    })
  
  }
  
  
  //  document.getElementById('next').addEventListener('click', function() {
  //   window.location.href = "./pages/Success.html";
  // });
  
  
  
  
  
  
  
  
  let applyButton = document.getElementById('apply')
  applyButton.addEventListener('click',couponFinder)
  
  function goContinue() {
  
    document.getElementById('next').addEventListener('click', function () {
       window.location.href = "./pages/Success.html";
    });
  
  
  }
  
  
  function couponFinder(number){
  let inputValue =document.getElementById('applyInput').value;
  let couponOne =  document.getElementById('couponOne').innerText;
  let couponTwo= document.getElementById('couponTwo').innerText;
  
  
  if(inputValue === couponOne){
    couponOneCalculation(number)
  }else if(inputValue === couponTwo){
    couponTwoCalculation(number)
  }else{
    console.log("else")
  }
  
  
   
  }
  
  
  
  function couponOneCalculation(number){
    
    document.getElementById('applyAndInput').classList.add('hidden')
  
    let discountPrice = (grandTotal * 15 / 100)
    grandTotal =  grandTotal - discountPrice ;
  
    changeInnerText('coupon1'," - " + discountPrice);
    changeInnerText('grand_Total', grandTotal);
  
  
  grandTotal = totalPrice;
  
  changeInnerText('coupon2',"000");
  document.getElementById('discountList-1').classList.remove('hidden')
    document.getElementById('discountList-2').classList.add('hidden')
  
  }
  function couponTwoCalculation(number){
    document.getElementById('applyAndInput').classList.add('hidden')
    
    
    let discountPrice = (grandTotal * 20 / 100);
    grandTotal =  grandTotal - discountPrice ;
    changeInnerText('coupon2'," - " + discountPrice);
  
    changeInnerText('grand_Total', grandTotal);
    grandTotal = totalPrice;
    changeInnerText('coupon1', "000")
  
    document.getElementById('discountList-2').classList.remove('hidden')
    document.getElementById('discountList-1').classList.add('hidden')
  
  }