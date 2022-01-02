import axios from "axios";
import {useEffect, useState} from "react";

function Guide(){
  let [data, setData] = useState([]);
  const api_key = "AIzaSyB7VIAECTixPlj0sr-goHwkmNRFIwxZntA";
  const playListId = "PLTZKxggyo4dDFvxrHk-cg5va46KBzEXol";
  const num = 3;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`; 
  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);
  const path = process.env.PUBLIC_URL;


  useEffect(()=>{
    axios
    .get(url)
    .then(json=>{
      console.log(json.data.items);
      setData(json.data.items);      
    })
    console.log(data);
  },[]);

  return(
    <main className="guide">
      <div className="inner">
        <h1>Guide</h1>
        <p>a quick guide to using your body products.</p>

        <section id="instruction_first_section">
          <div className="inner">
            <div className="pic">
              <img src={path+"img/img_1.jpg"} />
            </div>
            <div className="txt">
              <h2>How to use.</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita tempore eum voluptatem vel sequi dolorem id minus, eius exercitationem, harum qui sapiente error magnam delectus omnis dolores corporis aspernatur fugiat velit. Debitis, harum veritatis. Quae.</p>
              <a href="#" onClick={()=>{
                setIsPop(true);
              }}>Guide</a>
            </div>
          </div>
        </section>

        <section id="instructions_section">
          {
            data.map((item, index)=>{

              return(
                <article key={index}>
                  <div className="inner">
                    <div className="txt">
                      <h2>How to use.</h2>
                      <div className="p_box">
                        <p> <span>label</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id magni nulla consectetur quaerat facilis omnis eveniet, obcaecati deleniti saepe ex veritatis odio neque quisquam animi eius, ipsam vel perspiciatis fugit autem eos at architecto? Officia ipsum fugiat eius blanditiis? Voluptatibus aliquam dignissimos officiis repellat vero. Dolorum aut quo harum molestias!</p>  
                        <p> <span>label</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita tempore eum voluptatem vel sequi dolorem id minus, eius exercitationem, harum qui sapiente error magnam delectus omnis dolores corporis aspernatur fugiat velit. Debitis, harum veritatis. Quae.</p>  
                      </div>
                      <a href="#" onClick={()=>{
                        setIsPop(true);
                        setIndex(index);
                      }}>Guide</a>
                    </div>
                    <div className="pic">
                      <img src={item.snippet.thumbnails.medium.url} />
                    </div>
                  </div>
                </article>
              )
            })
          }
        </section>
        
        {isPop ? <Pop /> : null}
      </div>
    </main>
  )

  function Pop(){
    return(
      <aside className="pop">
        <iframe 
          src={"https://www.youtube.com/embed/"+data[index].snippet.resourceId.videoId} width='100%' height='100%' allowFullScreen
        ></iframe>
        <span onClick={()=>{
          setIsPop(false);
        }}>close</span>
      </aside>
    )
  }
}

export default Guide;