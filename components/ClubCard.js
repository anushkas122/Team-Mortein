

function ClubCard(data) {
    this.clubName = data.name;
    this.picLink = data.picLink;

return(
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src = {this.picLink}/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">this.clubName</div>
    </div>
    {/* <p class="text-gray-700 text-base">
    this.clubName;
    </p> */}
  {/* </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div> */}
</div>

)

}
export default ClubCard







