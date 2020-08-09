import fetch from 'node-fetch'
// import Layout from '../components/layout'
import Categories from '../components/categories'

function Home () {
  return (
    <div>
      <h1 class = "font-black ml-8">SPORTS</h1>
      <Categories category={"Sport"}/>
      <h1 class = "font-black ml-8">ACADEMIC</h1>
      <Categories category={"Academic"}/>
      <h1 class = "font-black ml-8">RELIGIOUS</h1>
      <Categories category={"Religious"}/>
      <h1 class = "font-black  ml-8">CULTURE</h1>
      <Categories category={"Cultural"}/>
      <h1 class = "font-black  ml-8">CAUSES</h1>
      <Categories category={"Causes"}/>
    </div>
  )
}

export default Home;
