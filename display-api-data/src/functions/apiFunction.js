import axios from 'axios';

//Function to fetch info from API
export const getData = async (url) => {
    setLoading(true);

    axios.get(url)
    .then((res) => {
        console.log(res);
        setApiData(res.data.items);
        setLoading(false);
    })
    .catch((err) => {
        console.log("Error occured when getting data from API.\n"+err);
        setLoading(false);
    })
}