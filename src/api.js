import axios from "axios";

const api = axios.create({
    baseURL: "https://cyan-sea-urchin-slip.cyclic.app"
});

export const getDetails = () => {

    return api.get('/api/details').then((res) => {
        return res.data.data
    })
}

export const getImage = (url) => {
    console.log(url, 'getting')
      return api.get(`/api/image/${url}`).then((result) => {
        const data = result.data.image;
  
        // let TYPED_ARRAY = new Uint8Array(data); //
  
        const STRING_CHAR = data.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
          }, '');
  
        // let base64String = window.btoa(STRING_CHAR); //
  
        return(STRING_CHAR)
      })
  }

  export const patchDetails = (obj) => {
    return api.patch('/api/details', obj).then((result) => {
      console.log(result.data)
      return result.data
    })
  }

  export const postImage = (image_id, image) => {

    const axiosConfig = {
      responseType: "arraybuffer",
      headers: {'Content-Type': 'application/json'}
  }
    console.log(image)
    
    const body = {img: image}
    console.log('uploading...')
    console.log(body)
  
    return api.post(`/image/${image_id}`, body, axiosConfig).then((result) => {
      console.log('uploaded')
      return result.data
    })
  }
