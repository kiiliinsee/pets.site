import Animals from "../animals";
import Footer from "../footer";
import Header from "../header";
import Kab from "../kab";
import React, { useEffect, useState } from "react";


const Kabinet =  () => {
  let [user, SetUser]=useState([]);
  useEffect(()=>load(),[])
  function load(){
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", " Bearer "+localStorage.token) ;
      const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };
    fetch("https://pets.сделай.site/api/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            SetUser( <Kab key={result.id} data={result} />);

        })
}



    return (
        <div>
            <Header/>
            {user}
            <Animals/>
            <Footer/>
            
        </div>
      );
}

export default Kabinet;