import axios from "axios";
import {useEffect, useState} from "react";

const body = document.querySelector("body");

function Product(){
  let [items, setItems] = useState([]);
  const api_key = "66cf54ef3e6d727456c74d1bbab88986";
  const url = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${api_key}&per_page=100&format=json&nojsoncallback=1`;
  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);

  useEffect(()=>{
    axios
    .get(url)
    .then(json=>{
      console.log(json);
      setItems(json.data.photos.photo);
    })
  },[]);

  return(
    <main className="product">
      <div className="inner">
        <h1><a href="#">Product</a></h1>
        <section>
          {            
            items.map((item,index)=>{
              const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;

              return (
                <article key={index} onClick={()=>{
                  setIsPop(true);
                  setIndex(index);
                }}>
                  <div className="inner">
                    <div className="pic">
                      <img src={imgSrc} />
                    </div>

                    <span>label</span>
                    <h2>{item.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, et?</p>
                  </div>
                </article>
              )              
            })
          }
        </section>
      </div>

      {isPop ? <Pop /> : null}
    </main>
  )

  function Pop(){
    const imgSrc = `https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`;

    useEffect(()=>{
      console.log("팝생성");
      body.style.overflow = "hidden";

      return()=>{
      console.log("팝제거");
      body.style.overflow = "auto";
      }
    },[]);

    return(
      <div className="pop">
        <img src={imgSrc} />
        <p>{items[index].title}</p>
        <span onClick={()=>{
          setIsPop(false);
        }}>close</span>
      </div>
    )
  }
}

export default Product;