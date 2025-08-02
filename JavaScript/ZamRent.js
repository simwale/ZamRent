/**alert('To be continued...')
function showSidebar(){
  const toggleBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
function hideSidebar (){

   const closeBtn = document.getElementById("close-btn");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

}**/
   
 



 