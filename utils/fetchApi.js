import axios from 'axios'

export const baseUrl='https://bayut.p.rapidapi.com'

export const fetchApi=async (url)=>{
    const {data} =await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6da68ab412msha385aefd775f863p158262jsna30dc39e7714'
          }
    });
    return data;
}