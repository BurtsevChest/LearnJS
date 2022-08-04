export class classVideo {
   changeStatus(video){
      if(video.paused){
         video.play();
      }else{
         video.pause();
      }
   }
   closeOtherVideos(video, videos = []) {
      for (let index = 0; index < videos.length; index++) {
         const element = videos[index];
         if(!(video==element)&&!(video.paused)){
            this.stopVideo(element);
         }
      }
   }
   stopVideo(video){
      video.pause();
      video.currentTime = 0;
   }
   changeRange(video,range){
      let progress = (video.currentTime/video.duration)*100;
      range.value = progress;
   }  
}
