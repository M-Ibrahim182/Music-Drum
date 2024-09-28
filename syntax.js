function soundplays(e) {
                let keyCode;
                if (e.type === 'click') {
                    keyCode = e.target.dataset.key;
                } else {
                    keyCode = e.keyCode; 
                }
                console.log(keyCode);
                
                const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
                const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        
                if (!audio) return; 
                audio.currentTime = 0;
                audio.play();
                key.classList.add('playing');
                setTimeout(() => {
                    key.classList.remove('playing');
                }, 200);
            }
            document.querySelectorAll('.key').forEach(key => {
                key.addEventListener('click', soundplays);
            });
            window.addEventListener('keydown', soundplays); 
            // there is a with mouse kindly use keys for better results
