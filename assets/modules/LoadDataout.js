const media = document.querySelector("#media");

export const loadData = data => {
  if(data.length){
      let html = [];
      data.forEach(doc => {
          const element = `
          <div class="content-media">
          <div class="multimedia">
          <iframe src="${doc.data().video}" frameborder="0" autoplay></iframe>
        </div>
        <div class="description">
          <h6>${doc.data().category}</h6>
          <h4 id="short-description">${doc.data().author}</h4>
          <p>${doc.data().short}<a>Ver más</a></p>
        </div>
        <div class="buttons">
                    <a href=""><i class="fa-regular fa-star"></i></a>
                    <a href=""><i class="fa-regular fa-comment"></i></a>
                    <a href=""><i class="fa-regular fa-bookmark"></i></a>
                    <a href=""><i class="fa-sharp fa-regular fa-share"></i></a>
                </div>
        </div>`;
        html += element;
      });
      media.innerHTML = html;
  }else {
    media.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};