let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.add("clicked");
        document.getElementById("flip").play();
       
        if(counter === 0){
            firstSelection= card.getAttribute("animal");
            counter++;
        } else{
            secondSelection = card.getAttribute("animal");
            counter=0;
        
            console.log(firstSelection);
            console.log(secondSelection);

            if(firstSelection === secondSelection) {
                const correctCards = document.querySelectorAll(
                    ".card[animal='" + firstSelection + "']"
                );
                correctCards[0].classList.add("checked");
                correctCards[0].classList.remove("shake");
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");
                correctCards[1].classList.remove("shake");
                document.getElementById("check").play();
                
            }
            else{
                const incorrectCards = document.querySelectorAll(".card.clicked");

                incorrectCards[0].classList.add("shake");
                incorrectCards[1].classList.add("shake");

                setTimeout(()=> {
                    incorrectCards[0].classList.remove("shake");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("shake");
                    incorrectCards[1].classList.remove("clicked");
                    document.getElementById("shake").play();

                }, 250)
            }
        }
    });
});

