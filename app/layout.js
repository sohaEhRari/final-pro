import Navbar from "../components/Navbar"





export default function layOut({children}){
  return(
    <html>
      <body>
<Navbar/>
{children}

      </body>
      </html>
  )
}