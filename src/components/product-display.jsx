import { useEffect } from "react";

const Product =() =>{

    useEffect(() => {
        fetch("http://localhost:3000/products.json")
          .then((res) => res.json())
          .then(
            (result) => {
              
            },
            (error) => {
              alert("error");
            }
          );
      }, []);


      return

}