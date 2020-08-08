import fetch from 'node-fetch'
// import Layout from '../components/layout'
import Categories from '../components/categories'
import clubInfo from '../components/clubInfo'

function Home () {
  return (
    <div>
    <title>SPORTS</title>
      <Categories data={"Sports"}/>
      <title>ACADEMIC</title>
      <Categories data={"Academic"}/>
      <title>RELIGIOUS</title>
      <Categories data={"Religious"}/>
      <title>CULTURE</title>
      <Categories data={"Culture"}/>
      <title>CAUSES</title> 
      <Categories data={"Causes"}/>
    </div>
  )
}

export default Home
