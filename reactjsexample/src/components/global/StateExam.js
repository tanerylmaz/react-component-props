import { useState } from "react";

function StateExam() {
    var [clickSayisi, setClickSayisi] = useState(0);
   
    return(
        <div>
            <span>Click Sayısı</span>
            <span id="clik">{clickSayisi}</span>
            <button type="button"
            onClick={()=>{
                clickSayisi++;
                setClickSayisi(clickSayisi);
            }}>Tıkla</button>
        </div>
    );
}

export default StateExam;