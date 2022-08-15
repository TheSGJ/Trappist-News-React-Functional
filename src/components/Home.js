import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from 'uuid';

const Home = (props) => {
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(false)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  document.title = `${capitalize(props.category)} - Trappist News`;
  useEffect(() => {
    updateNews()
    // eslint-disable-next-line
  }, []) 

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(40)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }


  const fetchMoreNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
}

    return (
      <>
  <div className="container my-6 px-6 mx-auto">
  <section className="mb-32 text-gray-800 text-center">
  <h1 className="text-3xl font-bold text-center pb-2 mb-4">{capitalize(props.category)} - Trappist News</h1>
    
  {loading && <Spinner />}
    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreNews}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
    <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">

              {articles.map((element) => {
                  return (
                    <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
                    <NewsItem
                      key={element.url + uuidv4()}
                      title={element.title}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8CAckRSwj7DyX1BfOOohtFSUnfcPE9hag&usqp=CAU"
                      }
                      newsUrl={element.url}
                      author={element.author?" by "+element.author:""}
                      source={element.source.name}
                      date={element.publishedAt}
                    />
                    </div>
                    </div>
                  );
                })}

    </div>
          </InfiniteScroll>
  </section>
</div>
      </>
    );
  }
export default Home;

Home.defaultProps = {
  pageSize: 5,
  country: "in",
  category: "general",
};
Home.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};