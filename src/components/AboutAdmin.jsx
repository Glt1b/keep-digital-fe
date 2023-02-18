import { React, useEffect, useState, useContext } from "react";
import ImageUploading from 'react-images-uploading';
import { DetailsContext } from '../context/Details';
import { MyEditor } from "./MyEditor";

export function AboutAdmin() {

    const { details, setDetails } = useContext(DetailsContext);
    console.log(details)

    //image handle
    const [images, setImages] = useState([]);
    const maxNumber = 1;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      setImages(imageList);
    };

    return (
        <div className="About">
        <div className="image">
        <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload Image
            </button>
            &nbsp;

               { images[0] ? (<img src={images[0]} alt=""  />) : null} 
    
          </div>
        )}
      </ImageUploading>
        </div>
        <div className="text">
          <MyEditor />
        </div>
      </div>
    )
}