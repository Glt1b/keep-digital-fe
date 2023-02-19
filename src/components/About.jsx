import { React, useEffect, useState, useContext } from "react";
import { DetailsContext } from '../context/Details';
import parse from 'html-react-parser';
import { getImage } from "../api";

export function About() {

    const { details, setDetails } = useContext(DetailsContext);
    const [image, setImage] = useState(false);

    useEffect(() => {
 
      getImage().then((response) => {
        const obj = {
          data_url: response
        }
        setImage(obj);
      })
    }, [])

    return (
        <div className="About">
        <div className="image">
          { image ? <img src={image.data_url}/> : <p>Loading...</p> }
        </div>
        <div className="text">
          <p>{parse(details.text_about)}</p>
        </div>
      </div>
    )
}