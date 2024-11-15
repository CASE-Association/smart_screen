songsPlayd = 0

Module.register("CASEspotify", {
	// Default module config.
	defaults: {
		text: "Hello World!"

	},
	musicMessage:{},
	start: function(){
		const ws = new WebSocket("ws://case-audio.com:8081/events")
		this.updateDom();
		ws.addEventListener("message",(message)=>{
			songsPlayd++
			Log.info("New song")
			this.musicMessage = JSON.parse(message.data)
			this.updateDom()
		})
	},
	
	getTemplate: function () {
		return "CASEspotify.njk";
	},

	getTemplateData: function () {
		return this.config;
	},
	getStyles: function(){
		return["style.css","font-awesome.css"];
	},
	getDom: function(){
		
		var wrapper = document.createElement("div");
		var image = document.createElement("img");
		var track = document.createElement("p");
		track.className = "large bright thin"
		//var volume = document.createElement("input");
		//var soundIcon = document.createElement("span");
		
		
		//soundIcon.className = "fa fa-volume-up";
		track.innerHTML = this.musicMessage.track.title + " - " + this.musicMessage.track.artist.join(", ")
		image.src = this.musicMessage.track.artUrl
		//volume.type = "range"
		//volume.value = this.musicMessage.volume
		wrapper.appendChild(image);
		wrapper.appendChild(track);
		//wrapper.appendChild(soundIcon);
		//wrapper.appendChild(volume);
		
		return wrapper
	}
});
