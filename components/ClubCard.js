

function ClubCard({ data }){

return(
<div class="max-w-sm rounded overflow-hidden shadow-lg mx-3 my-3">
  <div style={{height:'300px'}}>
  <img class="object-cover w-full" style={{height:'100%'}} src = {data.icon}/>
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{data.clubName}</div>
    <p class="text-gray-700 text-base">
      {data.blurb}
    </p>
    </div>
</div>

)

}
export default ClubCard







