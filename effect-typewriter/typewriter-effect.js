function TypewriterEffect(id, options) {
    this.element = document.getElementById(id);
    this.words = options.words.split(';');
    this.currentWordIndex = 0;
    this.currentWord = '';
    this.isDeleting = false;

    // Default options
    var defaultOptions = {
        typingDelay: 200,
        deletingDelay: 100,
        wordDelay: 2000
    };

    // Merge default and user-defined options
    var mergedOptions = Object.assign({}, defaultOptions, options || {});

    // Assign option values
    this.initialTypingDelay = mergedOptions.typingDelay;
    this.typingDelay = this.initialTypingDelay;
    this.deletingDelay = mergedOptions.deletingDelay;
    this.wordDelay = mergedOptions.wordDelay;

    this.type = function() {
        var self = this;
        var wordIndex = this.currentWordIndex % this.words.length;
        var fullWord = this.words[wordIndex];
    
        if (this.isDeleting) {
            // Deleting mode
            this.currentWord = fullWord.substring(0, this.currentWord.length - 1);
        } else {
            // Typing mode
            this.currentWord = fullWord.substring(0, this.currentWord.length + 1);
        }
    
        this.element.innerHTML = '<span class="typewriter__words">' + this.currentWord + '</span>';
    
        if (!this.isDeleting && this.currentWord === fullWord) {
            // Switch to deleting mode after the word is fully typed
            this.isDeleting = true;
            setTimeout(function() {
                self.type();
            }, this.wordDelay);
        } else if (this.isDeleting && this.currentWord === '') {
            // Switch to typing mode after the word is fully deleted
            this.isDeleting = false;
            this.currentWordIndex++;
            setTimeout(function() {
                self.type();
            }, this.initialTypingDelay);
        } else {
            setTimeout(function() {
                self.type();
            }, this.isDeleting ? this.deletingDelay : this.typingDelay);
        }
    }; 
}

// * Usage example
/*
const typewriter = new TypewriterEffect('typewriter', {
    words: 'Hello;World;JavaScript',
    typingDelay: 150,
    deletingDelay: 75,
    wordDelay: 2500
  });
  typewriter.type();
*/