import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
function Home() {
  const [mdata, setmdata] = useState([])
  const [episode, setepisode] = useState('')
  const Apidata = async () => {
    const movie = await axios.get('https://swapi.dev/api/films/?format=json')
    setmdata(movie.data.results)
  }
  useEffect(() => {
    Apidata()
  }, [])
  function search(s) {
    {
      const search = mdata.find((e) => (
        e.title.match(s.target.value)
      ))

    }
  }
  return (
    <div>
      {/* <h1>{JSON.stringify(mdata)}</h1> */}
      {/* <h1>{episode}</h1> */}
      <div className="container-fluid">
        <div className="row p-5 bg-danger">
          <div className="col-2">
            <select className='p-2 fs-3'>
              <option value="" disabled>Select</option>
              <option value='episode'>Episode</option>
              <option value="year">Year</option>
            </select>
          </div>
          <div className="col-10">
            <input type="search" onChange={(s) => search(s)} className='w-100 p-2 fs-3' />
          </div>
        </div>
      </div>
      {/* ...............................................table.............................. */}
      <div className="row pt-5">
        <div className="col-6">
          <table className='table w-100 fs-3'>
            <thead>
              <tr>
                <th>Episode</th>
                <th>Name</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {
                mdata.map((e, i) => (
                  <tr key={i}>
                    <td onClick={() => setepisode(e)} >EPISODE{e.episode_id}</td>
                    <td>{e.title}</td>
                    <td>{e.release_date}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="col-6 text-center ps-5 pe-5">
          {
            episode.length == 0 ? <h1>No infornmation</h1> : <div className='align-text-justify'>
              <h1>{episode.episode_id} - {episode.title}</h1>
              <br />
              <h3>{episode.opening_crawl}</h3>
            </div>
          }
        </div>
      </div>

    </div>
  )
}

export default Home