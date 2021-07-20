// import { useEffect } from "react";

// CHANGE DATE TO BE PARAMETER
// useEffect in getNews
// look at useFetch code example on canvas
export const getNews = async () => {
    const url = 'https://newsapi.org/v2/everything?' +
        'q=Blackjack&' +
        'from=2021-07-20&' +
        'sortBy=popularity&' +
        'apiKey=738d80f9c35347b9adb10bda57ec2d63';

    const req = new Request(url);

    try {
        fetch(req)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.articles);
                return data.articles;
            })
    } catch (error) {
        console.log("Error getting news", error);
    }
}