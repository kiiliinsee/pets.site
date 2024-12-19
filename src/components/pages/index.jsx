
import Cards from "../cards";
import Footer from "../footer";
import Header from "../header";
import Pod from "../pod";
import Slider from "../sl";
import Sl from "../sl";
import { useEffect, useState } from "react";


function Index() {
    const [pet, setPet] = useState([]);
 
    useEffect(() => {
        load();
    }, []);
 
    function load() {
        fetch("https://pets.сделай.site/api/pets")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setPet(
                    result.data.orders.map((item) => <Cards key={item.id} data={item} />)
                );
            });
    }
 
    return (
        <div>
            <Header/>
            <Slider />
            <h2 className="text-center text-white bg-dark m-2 p-2 rounded">
                Карточки животных
            </h2>
            <div className="container">
                <div className="row">
                    {/* Разбиение на два столбца для каждой карточки */}
                    {pet.map((cards, index) => (
                        <div className="col-md-6" key={index}>
                            {cards}
                        </div>
                    ))}
                </div>
            </div>
<Pod/>
<Footer/>
</div>
      );
}

export default Index ;