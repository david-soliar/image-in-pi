async function load_pi_txt() {
    const response = await fetch("pi10million.txt"); /*toto staci mat iba /pi10mil lebo to bude relative k domene*/
    int_pi = await response.text();
    /*data = parseInt(data).toString(2); this is infinity*/
}

load_pi_txt();

let binary_img = "";
let binary_img_in_decimal = "";
let other_data = [];

function search_for_match(){
    binary_img_in_decimal = convertBase(binary_img, 2, 10);
    let search_match = int_pi.indexOf(binary_img_in_decimal);
    /*-1 pokial to nenaslo, inak vrati index kde to zacina*/
    if (search_match==-1){
        document.getElementById("result").innerHTML = "No match";
    }
    else{
        document.getElementById("result").innerHTML = "Match on index " + search_match;
    }
}

function change_color(event){
    let div_id = event.target.id
    const index_array = div_id.split("_")

    index_array[0] = parseInt(index_array[0]);
    index_array[1] = parseInt(index_array[1]);

    let index = index_array[0]*other_data[0]+index_array[1]
    let x = binary_img[index];
    
    if (parseInt(x)){
        binary_img = binary_img.substring(0, index) + "0" + binary_img.substring(index+1);
        document.getElementById(div_id).style.backgroundColor = "white";
    }
    else {
        binary_img = binary_img.substring(0, index) + "1" + binary_img.substring(index+1);
        document.getElementById(div_id).style.backgroundColor = "#191919";
    }

    binary_img_in_decimal = convertBase(binary_img, 2, 10);

    document.getElementById("text1").innerHTML = "Binary representation of your image: " + binary_img;
    document.getElementById("text2").innerHTML = "Decimal representation of your image: " + binary_img_in_decimal;
}

function update_page(){
    const divboard = document.getElementById('clickable-divs');
    divboard.replaceChildren();
    
    let div_option = parseInt(document.getElementById("resolution").value);
    other_data[0] = div_option;

    let grid_fr = "";
    binary_img = "";
    
    for(let x=0; x<div_option; x++){
        for (let y=0; y<div_option; y++){
            var onediv = document.createElement('div');
            onediv.className = "clickdiv";
            onediv.id = `${x}_${y}`;
                
            const text = document.createTextNode(`${x}_${y}`);
            onediv.appendChild(text);

            divboard.appendChild(onediv);
            onediv.addEventListener("click", change_color);
            binary_img += "0";
        }
        grid_fr += "1fr ";
    }
    document.getElementById("clickable-divs").style.gridTemplateColumns = grid_fr;
    document.getElementById("text1").innerHTML = "Binary representation of your image: " + binary_img;
    document.getElementById("text2").innerHTML = "Decimal representation of your image: " + parseInt(binary_img, 2);
}