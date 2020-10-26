import {Jumbotron} from "../../Components/index";
import netflixData from "../../Jimbotron/Jimbo.json";
import Image1 from "../../Assets/Images/misc/home-tv.jpg";
import Image2 from "../../Assets/Images/misc/home-mobile.jpg";
import Image3 from "../../Assets/Images/misc/home-imac.jpg";
const Images = [Image1,Image2,Image3];

export default function JumbotronmMain(){
    return(<Jumbotron.Container>
        {netflixData.map(ele=>{
          return (<Jumbotron key={ele.id} direction={ele.direction} >
              <Jumbotron.Pane>
              <Jumbotron.Title>{ele.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{ele.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
              <Jumbotron.Image src={Images[ele.id-1]} alt={ele.alt} />
              </Jumbotron.Pane>
          </Jumbotron>)
        })}
      </Jumbotron.Container>);
}