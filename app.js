        /* Parent Class */
        class Library {
            constructor(title) {
              this._title = title;
              this._isCheckedOut = false;
              this._ratings = [];
            }
          
            get title() {
              return this._title;
            }
          
            get isCheckedOut() {
              return this._isCheckedOut;
            }
          
            set isCheckedOut(value) {
              this._isCheckedOut = value;
            }
          
            get ratings() {
              return this._ratings;
            }
          
            getAverageRating() {
              let total = this._ratings.reduce((acc, currentVal) => acc + currentVal, 0);
              return Math.floor(total / this._ratings.length);
            }
            
            toggleCheckOutStatus() {
              this._isCheckedOut = !this._isCheckedOut;
            }
          
            addRating(rating) {
              if (rating >= 1 && rating <= 5) {
              this._ratings.push(rating);
              } else {
                return `Invalid rating. Rating should be between 1-5`
              }
            }
          }
          
          
          
          
                  /* Class Instance 1 - Book */
          class Book extends Library {
            constructor(author, title, pages) {
              super(title);
              this._author = author;
              this._pages = pages;
            }
          
            get author() {
              return this._author;
            }
          
            get pages() {
              return this._pages;
            }
          }
          
          const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
          
          /* historyOfEverything.toggleCheckOutStatus();
          console.log(historyOfEverything.isCheckedOut);
          historyOfEverything.addRating(4);
          historyOfEverything.addRating(5);
          historyOfEverything.addRating(5);
          console.log(historyOfEverything.getAverageRating()); */
          
          
                  /* Class Instance 2 - Movie */
          class Movie extends Library {
            constructor(director, title, runTime) {
              super(title);
              this._director = director;
              this._runTime = runTime;
            }
          
            get director() {
              return this._director;
            }
          
            get runTime() {
              return this._runTime;
            }
          }
          
          const speed = new Movie('Jan de Bont', 'Speed', 116);
          speed.toggleCheckOutStatus();
          console.log(speed.isCheckedOut);
          speed.addRating(1);
          speed.addRating(1);
          speed.addRating(5);
          console.log(speed.getAverageRating());
          
          
                /* Class Instance 3 - CD */
          class CD extends Library {
            constructor(artist, title, songs) {
              super(title);
              this._artist = artist;
              this._songs = songs;
            }
          
            get artist() {
              return this._artist;
            }
          
            get songs() {
              return this._songs;
            }
          }