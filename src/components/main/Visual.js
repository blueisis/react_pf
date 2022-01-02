const path = process.env.PUBLIC_URL;

function Visual(){
  return(
    <figure id="visual">
      <img src={path+"img/img_1.jpg"} alt="비주얼 이미지" />
      <div className="inner">
        <h1></h1>
      </div>
    </figure>
  )
}

export default Visual;