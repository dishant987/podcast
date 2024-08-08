
import { Link } from "react-router-dom"
import { BorderBeam } from "../components/magicui/border-beam";

export default function Categories() {
  const cat = [
    {
      name: "Comedy",
      color:' ',
      to: '/categories/Comedy',
      img: " https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
    },
    {
      name: "Comedy",
      to: '/categories/Comedy',
      img: " https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
    }
  ]
  return (
    <div className="h-screen lg:h-[78vh]">
      <div className="px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {
          cat.map((item, i) => (
            <Link to={item.to} key={i} className="rounded px-8 py-4 text-4xl font-semibold hover:scale-105 shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden">
              <div>
                {item.name}
              </div>
              <div className="w-[100%] flex items-center justify-end absolute -bottom-2 -right-2">
                <img src={item.img} alt="Img" className="rounded-md  rotate-12 h-[15vh] md:h-[17vh] lg:h-[18vh]" />
              </div>
              <BorderBeam size={300} duration={10} delay={9} />
     
            </Link>
          ))
        }

      </div>
     
    </div>
  )
}
