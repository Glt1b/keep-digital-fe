import { React, useEffect, useState, useContext } from "react";

import { DetailsContext } from '../context/Details';

export function About() {

    const { details, setDetails } = useContext(DetailsContext)

    return (
        <div className="About">
        <div className="image">
          <img src="https://i.pinimg.com/564x/59/32/29/593229739184504afd9507cc42a9cb86.jpg" />
        </div>
        <div className="text">
          <p>{details.text_about}</p>
        </div>
      </div>
    )
}