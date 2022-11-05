import React, {useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import PopBlogItem from "./PopBlogItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const PopularBlogs = (props) => {
  const [blogArticles, setBlogArcticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetchInitialPosts()
    // eslint-disable-next-line
  }, []) 
  const fetchInitialPosts = async () =>{
    props.setProgress(10)
    let blogApi = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${props.per_page}&context=embed&page=1`;
    setLoading(false)
    props.setProgress(40)
    let result = await fetch(blogApi);
    let getResult = await result.json();
    props.setProgress(100)
  
    setBlogArcticles(getResult)
    setLoading(false)
  }
 
  const fetchMoreData = async () => {
    let blogApi = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${props.per_page}&context=embed&page=${page + 1}`;
    setPage(page + 1)
    let result = await fetch(blogApi);
    let getResult = await result.json();
    setBlogArcticles(blogArticles.concat(getResult))
    setLoading(false)
  }

    return (
      <>
      <Helmet>
        <title>Latest News - Trappist News</title>
      </Helmet>
  <div className="container my-6 px-6 mx-auto">
  <section className="mb-32 text-gray-800 text-center">
    <h1 className="text-3xl font-bold text-center pb-2 mb-4">Latest Top Tech - Trappist News</h1>
        {loading && <Spinner />}

          <InfiniteScroll
          dataLength={blogArticles.length}
          next={fetchMoreData}
          hasMore={blogArticles.id !== null}
          loader={<Spinner />}

        >
              <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
          {blogArticles.map((element) => {
              return (
        <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
                <PopBlogItem
                  key={element.id}
                  blogTitle={element.title.rendered}
                  blogDetail={element.excerpt.rendered}
                  
                  blogDate={element.date}
                  blogImgUrl={
                    element.jetpack_featured_media_url
                      ? element.jetpack_featured_media_url
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID8CAckRSwj7DyX1BfOOohtFSUnfcPE9hag&usqp=CAU"
                  }
                  blogUrl={element.link}
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
export default PopularBlogs;
