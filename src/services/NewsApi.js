import { useEffect, useState } from "react";
import moment from 'moment';

// custom hook: useFetchNews
export default function useFetchNews() {
    const [data, setData] = useState([]);

    // get the current date so newsfeed is updated daily
    let now = new Date();
    var dateString = moment(now).format('YYYY-MM-DD');

    // fetch data from the API
    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?' +
            'q=Blackjack&' +
            `from=${dateString}&` +
            'sortBy=popularity&' +
            'apiKey=738d80f9c35347b9adb10bda57ec2d63';

        const req = new Request(url);

        try {
            fetch(req)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    setData(data);
                })
        } catch (error) {
            console.log("Error getting news", error);
        }
    }, []);
    return data; 
}