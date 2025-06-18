// function addRow() {
//     const table = document.getElementById("materialTable").getElementsByTagName("tbody")[0];
//     const newRow = table.insertRow();
//     newRow.innerHTML = `
   
//       <tr>
//         <td><input type="checkbox" /></td>
//         <td><input class="description" type="text" placeholder="Enter description" /></td>
//         <td><input type="number" class="rate"  placeholder="Enter rate" /></td>
//         <td><input type="text"   class="qty"  placeholder="Enter QTY" /></td>
//           <td><input  class="total"  type="number" readonly /></td>
//             </tr>

//     `;

//     attachEventListeners(newRow);
//     updateGrandTotal(); // new row ke baad bhi grand total row ko move karo
//   }

//   function attachEventListeners(row){
//     const rateinput = row.querySelector('.rate');
//     const qtyinput = row.querySelector('.qty');
//     const totalinput = row.querySelector('.total');

//     function calculation(){
//       const rate = parseFloat(rateinput.value);
//       const qty = parseFloat(qtyinput.value);
//       totalinput.value = rate*qty;
//         updateGrandTotal();
//     }
//      rateinput.addEventListener("input",calculation);
//      qtyinput.addEventListener("input",calculation);
//   }


// // pehle se jo pehli row hai usme bhi event listener lagao
// document.querySelectorAll("#materialTable tbody tr").forEach(attachEventListeners);


// // Grand Total row banane ka kaam
// function createGrandTotalRow() {
//   const tbody = document.getElementById("materialTable").getElementsByTagName("tbody")[0];
//   const grandTotalRow = document.createElement("tr");
//   grandTotalRow.id = "grandTotalRow";
  
//   grandTotalRow.innerHTML = `

// <td colspan="4" style="text-align:right; font-weight:bold;">Grand Total</td>
//     <td><input type="number" id="grandTotal" readonly /></td>


//   `;
//   tbody.appendChild(grandTotalRow);

//   // Agar localStorage me pehle se value hai to dikha do
//   const storedGrandTotal = localStorage.getItem("grandTotalValue");
//   if (storedGrandTotal) {
//     document.getElementById("grandTotal").value = storedGrandTotal;
//   }
// }

// // Grand total calculate karne ka kaam
// function updateGrandTotal() {
//   const totals = document.querySelectorAll('.total');
//   let grandTotal = 0;
//   totals.forEach(total => {
//     grandTotal += parseFloat(total.value) || 0;
//   });
//   const grandTotalInput = document.getElementById("grandTotal");
//   if (grandTotalInput) {
//     grandTotalInput.value = grandTotal;

//     // localStorage me value save karo
//     localStorage.setItem("grandTotalValue", grandTotal);
//   }
// }

// // Page load pe grand total row bana do
// createGrandTotalRow();












 

// function deleteSelectedRows() {
//     const table = document.getElementById("materialTable");
//     const rows = table.rows;
//     for (let i = rows.length - 1; i > 0; i--) {
//       const checkbox = rows[i].cells[0].querySelector('input[type="checkbox"]');
//       if (checkbox && checkbox.checked) {
//         table.deleteRow(i);
//       }
//     }
//   }




//                                       //  Comment
//   // function saveData() {
//   //   const table = document.getElementById("materialTable");
//   //   const rows = table.rows;
//   //   let csv = "Description,Rate,Box\n"; // CSV header
  
//   //   for (let i = 1; i < rows.length; i++) {
//   //     const description = rows[i].cells[1].querySelector('input').value;
//   //     const rate = rows[i].cells[2].querySelector('input').value;
//   //     const box = rows[i].cells[3].querySelector('input').value;
  
//   //     // Escape commas and quotes for CSV safety
//   //     const row = `"${description}","${rate}","${box}"\n`;
//   //     csv += row;
//   //   }
  
//   //   const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });


//   //   const link = document.createElement("a");
//   //   link.href = URL.createObjectURL(blob);
//   //   link.download = "material_data.csv";
//   //   link.click();
//   // }
  
  
//   function printData() {
//     window.print();
//   }
  
  
  

//                                // purana code     Comment
// //   function openSelectedInNewPage() {
// //     const rows = document.querySelectorAll("#materialTable tbody tr");
// //     const selectedData = [];
  
// //     rows.forEach(row => {
// //       const checkbox = row.querySelector('input[type="checkbox"]');
// //       if (checkbox && checkbox.checked) {
// //         // Get either input or select value from 2nd cell
// //         const descCell = row.cells[1];
// //         let description = "";
  
// //         const input = descCell.querySelector("input");
// //         const select = descCell.querySelector("select");
  
// //         if (input) description = input.value;
// //         else if (select) description = select.value;
  
// //         const rate = row.cells[2].querySelector("input")?.value || "";
// //         const box = row.cells[3].querySelector("input")?.value || "";
  
// //         selectedData.push({
// //           description,
// //           rate,
// //           box
// //         });
// //       }
// //     });
  
// //     localStorage.setItem("selectedData", JSON.stringify(selectedData));
// //     window.open("popup.html", "_blank", "width=600,height=400");

// // }




// function openSelectedInNewPage() {
//   const rows = document.querySelectorAll("#materialTable tbody tr");
//   const selectedData = [];

//   rows.forEach(row => {
//     const checkbox = row.querySelector('input[type="checkbox"]');
//     if (checkbox && checkbox.checked) {
//       // Get description from either input or select
//       const descCell = row.cells[1];
//       let description = "";

//       const input = descCell.querySelector("input");
//       const select = descCell.querySelector("select");

//       if (input) description = input.value;
//       else if (select) description = select.value;

//       const rateValue = parseFloat(row.cells[2].querySelector("input")?.value) || 0;
//       const boxValue = parseFloat(row.cells[3].querySelector("input")?.value) || 0;
//       const totalValue = rateValue * boxValue;

//       selectedData.push({
//         description,
//         rate: rateValue,
//         box: boxValue,
//         total: totalValue
//       });
//     }
//   });

//   localStorage.setItem("selectedData", JSON.stringify(selectedData));
//   window.open("popup.html", "_blank", "width=600,height=400");
// }








// function downloadTableAsImage() {
//   const pageContent = document.getElementById("mainContent");


//   html2canvas(document.getElementById("mainContent")).then(canvas => {
//     const link = document.createElement("a");
//     link.download = "full_page.png"; // Change to .jpg if needed
//     link.href = canvas.toDataURL("image/png");
//     link.click();
//   });
// }

// function downloadTableAsPDF() {
//   const { jsPDF } = window.jspdf;
//   const doc = new jsPDF();

//   const table = document.getElementById("mainContent");

//   html2canvas(table).then(canvas => {
//     const imgData = canvas.toDataURL("image/png");
//     const imgProps = doc.getImageProperties(imgData);
//     const pdfWidth = doc.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     doc.save("material_table.pdf");
//   });
// }






//                                             //  Comment
// // function saveData() {
// //   let table = document.getElementById("materialTable");
// //   let rows = table.querySelector("tbody").querySelectorAll("tr");
// //   let data = [];

// //   for (let i = 0; i < rows.length; i++) {
// //     let descEl = rows[i].querySelector(".description");
// //     let rateEl = rows[i].querySelector(".rate");
// //     let qtyEl = rows[i].querySelector(".qty");

// //     if (descEl && rateEl && qtyEl) {
// //       let desc = descEl.value.trim();
// //       let rate = rateEl.value.trim();
// //       let qty = qtyEl.value.trim();

// //       if (desc && rate && qty) {
// //         data.push({ Description: desc, Rate: rate, QTY: qty });
// //       }
// //     } else {
// //       console.warn("Row no. " + (i+1) + " mein koi element missing hai");
// //     }
// //   }

// //   localStorage.setItem("mydata", JSON.stringify(data));
// //   alert("Data localStorage mein save ho gaya ✅");

// // }


// function goNext() {
//   localStorage.setItem("invoiceTo", document.getElementById("invoiceTo").value);
//   localStorage.setItem("dataNo", document.getElementById("dataNo").value);
//   localStorage.setItem("date", document.getElementById("date").value);
//   localStorage.setItem("gstNo", document.getElementById("gstNo").value);
//   localStorage.setItem("vehNo", document.getElementById("vehNo").value);

//   window.location.href = "popup.html";
// }



// new code



function addRow() {
  const table = document.getElementById("materialTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td><input type="checkbox" /></td>
    <td><input class="description" type="text" placeholder="Enter description" /></td>
    <td><input type="number" class="rate" placeholder="Enter rate" /></td>
    <td><input type="number" class="qty"  value="1" placeholder="Enter QTY" /></td>
    <td><input class="total" type="number" readonly /></td>
  `;

  attachEventListeners(newRow);
  updateGrandTotal(); // new row ke baad bhi grand total row ko move karo
}

function attachEventListeners(row) { 
  const rateinput = row.querySelector('.rate');
  const qtyinput = row.querySelector('.qty');
  const totalinput = row.querySelector('.total');

  function calculation() {
    const rate = parseFloat(rateinput.value) || 0;
    const qty = parseFloat(qtyinput.value) || 0;
    totalinput.value = rate * qty;
    updateGrandTotal();
  }

  rateinput.addEventListener("input", calculation);
  qtyinput.addEventListener("input", calculation);
  calculation();
}

// Pehle se jo pehli rows hain unme event listener lagao
document.querySelectorAll("#materialTable tbody tr").forEach(attachEventListeners);



// Grand Total row banane ka kaam
function createGrandTotalRow() {
  const tbody = document.getElementById("materialTable").getElementsByTagName("tbody")[0];
  const grandTotalRow = document.createElement("tr");
  grandTotalRow.id = "grandTotalRow";
  
  // grandTotalRow.innerHTML = `

  //   <td colspan="4" style="text-align:right; font-weight:bold;">Grand Total</td>
  //   <td><input type="number" id="grandTotal" readonly /></td>



  // `;


  tbody.appendChild(grandTotalRow);

  // Agar localStorage me pehle se value hai to dikha do
  const storedGrandTotal = localStorage.getItem("grandTotalValue");
  if (storedGrandTotal) {
    document.getElementById("grandTotal").value = storedGrandTotal;
  }
}

// Grand total calculate karne ka kaam
function updateGrandTotal() {
  const totals = document.querySelectorAll('.total');
  let grandTotal = 0;
  totals.forEach(total => {
    grandTotal += parseFloat(total.value) || 0;
  });
  const grandTotalInput = document.getElementById("grandTotal");
  if (grandTotalInput) {
    grandTotalInput.value = grandTotal;

    // localStorage me value save karo
    localStorage.setItem("grandTotalValue", grandTotal);
  }
}

// Page load pe grand total row bana do
createGrandTotalRow();




function deleteSelectedRows() {
    const table = document.getElementById("materialTable");
    const rows = table.rows;
    for (let i = rows.length - 1; i > 0; i--) {
      const checkbox = rows[i].cells[0].querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        table.deleteRow(i);
      }
    }
  }
  
    
   function printData() {
    window.print();
  }
  
  


function openSelectedInNewPage() {
  const rows = document.querySelectorAll("#materialTable tbody tr");
  const selectedData = [];


let serialNo = 1; // Serial number start from 1




  rows.forEach(row => {
    const checkbox = row.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      // Get description from either input or select
      const descCell = row.cells[1];
      let description = "";

      const input = descCell.querySelector("input");
      const select = descCell.querySelector("select");

      if (input) description = input.value;
      else if (select) description = select.value;

      const rateValue = parseFloat(row.cells[2].querySelector("input")?.value) || 0;
      const boxValue = parseFloat(row.cells[3].querySelector("input")?.value) || 0;
      const totalValue = rateValue * boxValue;

      selectedData.push({
          serial: serialNo,  // Add serial number here
        description,
        rate: rateValue,
        box: boxValue,
        total: totalValue
      });
            serialNo++; // Increase serial number for next selected item
    }
  });

  localStorage.setItem("selectedData", JSON.stringify(selectedData));
  window.open("popup.html", "_blank", "width=600,height=400");
}






function downloadTableAsImage() {
  const pageContent = document.getElementById("mainContent");


  html2canvas(document.getElementById("mainContent")).then(canvas => {
    const link = document.createElement("a");
    link.download = "full_page.png"; // Change to .jpg if needed
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}













function downloadTableAsPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const table = document.getElementById("mainContent");

  html2canvas(table).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    doc.save("material_table.pdf");
  });
}


function goNext() {
  localStorage.setItem("invoiceTo", document.getElementById("invoiceTo").value);
  localStorage.setItem("dataNo", document.getElementById("dataNo").value);
  localStorage.setItem("date", document.getElementById("date").value);
  localStorage.setItem("gstNo", document.getElementById("gstNo").value);
  localStorage.setItem("vehNo", document.getElementById("vehNo").value);

  window.location.href = "popup.html";
}




function checkLogin() {
    if (localStorage.getItem("userLoggedIn") !== "true") {
        alert("Access Denied. Pehle Signup karo!");
        window.location.href = "/signuppage.html";
    }
}

function logout() {
    localStorage.removeItem("userLoggedIn");
    alert("Logged out!");
    window.location.href = "/signuppage.html";
}


function selectAllCheckboxes() {
  const checkboxes = document.querySelectorAll('#materialTable tbody input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = true;
  });
}



