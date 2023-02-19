import { React, useEffect, useState, useContext } from "react";
import ImageUploading from 'react-images-uploading';
import { getImage, postImage } from "../api";
import { DetailsContext } from '../context/Details';
import { MyEditor } from "./MyEditor";


export function AboutAdmin() {

    const { details, setDetails } = useContext(DetailsContext);

    //image handle
    const [images, setImages] = useState([]);
    const [initialLoad, setInitialLoad] = useState(true);
    const maxNumber = 1;
  
    const onChange = async (imageList, addUpdateIndex) => {
      // data for submit
      setImages(imageList);
      
    };

    useEffect(() => {
      if(images.length !== 0 && !initialLoad){
        postImage(images[0].data_url)
      }
    }, [images])

    useEffect(() => {
      if(initialLoad){
        getImage().then((response) => {
          const obj = {
            data_url: response
          }
          setImages([obj]);
        })
      }
      setInitialLoad(false)
    }, [images])

  

    return (
        <div className="About">
        <div className="image">


        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
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
              Upload image
            </button>
            &nbsp;
    
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" className="img"/>
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
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