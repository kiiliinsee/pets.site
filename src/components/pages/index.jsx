
import Cards from "../cards";
import Footer from "../footer";
import Header from "../header";
import Pod from "../pod";
import Slider from "../sl";
import Sl from "../sl";
import { useEffect, useState } from "react";


function Index() {
    let [pet, SetPet]=useState([]);
    useEffect(()=>load(), [])
    function load(){
        fetch("https://pets.сделай.site/api/pets")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                SetPet(result.data.orders.map((item)=><Cards data={item}/>))
 
            })
    }
    return (
        <div>
<Header/>
<Slider/>
{pet}
<Pod/>
<Footer/>
</div>
      );
}

export default Index ;