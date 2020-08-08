

function ClubCard({ data }){

return(
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src = {data.icon}/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{data.clubName}</div>
    </div>
</div>

)

}
export default ClubCard







