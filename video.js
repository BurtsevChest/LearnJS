import { classVideo } from "./classVideo.js";
const v = new classVideo();
let Vids = [];

function PlayVideo(vid){
   v.changeStatus(vid);
   v.closeOtherVideos(vid,Vids);
}

function StopVideo(vid){
   v.stopVideo(vid, Vids);
}

function timeUpdateVideo(video, range){
   v.changeRange(video, range);
}

class Video {
   createVideos(selector, videoItems){
      const div = document.querySelector(selector);
      let html = '';
      html +='<div class="flex">';
      for (let index = 0; index < videoItems.length; index++) {
         const element = videoItems[index];
         html += '<div class="videos">\n\t<video src="'+element.nameVideo+'"></video>\n<button class="playvideo">Play</button><input class="videoInput" type="range" name="" value="0"><button class="stopBtn">Stop</button>\n</div>\n';
      }
      html+='</div>';
      div.innerHTML = html;
      const width = Vids.length;
      this.getVideos();
      this.setListener(width);
   }
   setListener(width) {
      const btn = document.querySelectorAll('.playvideo');
      const stopBtn = document.querySelectorAll('.stopBtn');
      const range = document.querySelectorAll('.videoInput');
      Vids.forEach((item,index)=>{
         if(index>=width){
            item.addEventListener('timeupdate',()=>{
               timeUpdateVideo(item, range[index]);
            });
            btn[index].addEventListener('click',()=>{
               PlayVideo(Vids[index]);
            });
            stopBtn[index].addEventListener('click',()=>{
               StopVideo(Vids[index]);
            });
         }
      });
   }
   getVideos(){
      Vids = document.querySelectorAll('video');
   }
}

export const video = new Video();

