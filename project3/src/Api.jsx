import axios from "axios";
const searchImage= async(term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID 9tUeDSRmeNa2f_dhZHoXmggQLO53uBIIYW3kFgNSkCw'
        },
        params:{
            query: term,
        },
    });
//    console.log(response.data.results)
    return response.data.results;

}
export default searchImage;