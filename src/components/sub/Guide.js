import axios from "axios";
import {useEffect, useState} from "react";

function Guide(){
  let [data, setData] = useState([]);
  const api_key = "AIzaSyB7VIAECTixPlj0sr-goHwkmNRFIwxZntA";
  const playListId = "PLTZKxggyo4dALX-xM8sMPZRh67uOkhgf7";
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
        <h1>How to use.</h1>
        <p>a quick guide to using your body products.</p>

        <section id="instruction_first_section">
          <div className="inner">
            <div className="pic">
              <img src={path+"img/img_1.jpg"} />
            </div>
            <div className="txt">
              <h2>dual purpose.</h2>
              <p>Our gentle body collection is made for care—of both the solo and partner kind. Our wash is a pH-balanced body wash that doubles as a relaxing bubble bath—available unscented and in both scent no. 1 and no. 2. Our oil no. 0 is a bath/body moisturizer that moonlights as a massage oil.</p>
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
                      <h2>Wash.</h2>
                      <div className="wrapper">
                        <div className="con">
                          <h3>about.</h3>
                          <p>A pH-balanced body wash fortified with essential vitamins. wash comes fragrance-free and in both signature scents. Our formula gently cleanses skin and intimate areas without any irritation, and doubles as a relaxing bubble bath for one person (or more).</p>  
                        </div>
                        <div className="con">
                          <h3>usage.</h3>
                          <p>wash's gentle pH-balanced formula is recommended for daily use and safe for all skin types. In the shower, gently massage all over the body. Rinse thoroughly. For a bubble bath, pour generously into warm, running water.wash is an external-use body wash. For those with a vulva, the vagina is a self-cleaning organ and should be cleaned only with warm water. wash can be used to clean external hair surrounding the genital region.</p>  
                        </div>
                        <div className="con">
                          <h3>subtitle</h3>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id magni nulla consectetur quaerat facilis omnis eveniet, obcaecati deleniti saepe ex veritatis odio neque quisquam animi eius, ipsam vel perspiciatis fugit autem eos at architecto? Officia ipsum fugiat eius blanditiis? Voluptatibus aliquam dignissimos officiis repellat vero. Dolorum aut quo harum molestias!</p>  
                        </div>
                        <div className="con">
                          <a href="#" onClick={()=>{
                            setIsPop(true);
                            setIndex(index);
                          }}>Guide</a>
                        </div>
                        
                      </div>
                      
                    </div>
                    <div className="pic">
                      <img src={item.snippet.thumbnails.standard.url} />
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