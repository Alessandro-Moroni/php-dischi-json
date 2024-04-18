const { createApp } = Vue;

createApp({
  data(){
    return{
      titolo: 'PHP Dischi JSON',
      apiUrl: 'server.php',
      list: [],
      newDisco:{
        title: '',
        author: '',
        year: '',
        poster: '',
        genre: '',
      }
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then(result =>{
        this.list = result.data;
        console.log(this.list);
      })
    },

    addDisco(){
      const data = new FormData();
      data.append('newAlbumTitle', this.newDisco.title);
      data.append('newAlbumAuthor', this.newDisco.author);
      data.append('newAlbumYear', this.newDisco.year);
      data.append('newAlbumPoster', this.newDisco.poster);
      data.append('newAlbumGenre', this.newDisco.genre);

      axios.post(this.apiUrl, data)
      .then(result => {
        this.list = result.data;

      })
    },

    removeAlbum(index){
      const data = new FormData();
      data.append('deleteIndex', index);

      axios.post(this.apiUrl, data)
      .then(result => {
        this.list = result.data;

      })
      
    }

  },

  mounted(){
    this.getApi();
  }
}).mount('#app');