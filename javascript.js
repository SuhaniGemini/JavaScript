(function () {
    var table = document.createElement('table');
    table.style.borderCollapse ='collapse' ;
    

    //creating Caption

    let caption = document.createElement('caption');
    let l = document.createTextNode("");
    caption.appendChild(l);
    table.appendChild(caption);

    

    const fields = ['Name', 'Age', 'DOB', 'Email', "Compamy"];

    let thead = document.createElement("thead");
    for (let i = 0; i < 5; i++) {
        let th = document.createElement("th");
        let h = document.createTextNode(fields[i]);
        th.appendChild(h);
        th.style.border = "1.5px solid black";
        th.style.textAlign = "center";
        thead.append(th);
    }
    table.appendChild(thead)





    //Inserting Body of the Table



    //Creating Array of rows.

    const row1 = ["Suhani Pachouri", 21, "30/06/2002", "Suhanipachouri@gmail.com", "Gemini Solutions Pvt Ltd"];
    const row2 = ["Sakshi Chaudhary", 20, "27/02/2002", "Sakshichaudhary@gmail.com", "Accenture"];
    const row3 = ["Prateek Prajapati", 22, "17/01/2002", "Prateekprajapati@gmail.com", "Accenture"];
    const row4 = ["Raj Sinha", 21, "1/05/2002", "Rajsinha@gmail.com", "Accenture"];
    const row5 = ["PrakharVerma", 21, "17/02/2002", "PrakharVerma@gmail.com", "Accenture"];
    const a = [row1, row2, row3,row4,row5];

    for (let j = 0; j < 5; j++) {
        var tbody = document.createElement("tbody");
        for (let i = 0; i < a[0].length; i++) {
            let td = document.createElement("td")
            td.style.padding = '15px';;
            let d = document.createTextNode(a[j][i]);
            td.style.border = "1.5px solid grey"
            td.appendChild(d);
           
            tbody.append(td);
        }
        table.appendChild(tbody);
    }


    document.body.appendChild(table);



})();