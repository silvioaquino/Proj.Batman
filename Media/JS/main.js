const notificationsCounter = document.querySelector(".contador_notificacao");
const markAllButton = document.querySelector(".botao_marca_tudo");
const notificationDots = document.querySelectorAll(".ponto_notificacao");
let notifications = document.querySelectorAll("main ul li");

//Other method to work with the counter:
// let notificationsCounterNumber = [...notifications].filter((notification) => notification.classList == "new-notification").length;
// notificationsCounter.innerHTML = notificationsCounterNumber;

notificationsCounterNumber = 0;

for (let index = 0; index < notifications.length; index++) {
    if (notifications[index].classList == "nova_notificacao") {
        notificationDots[index].style.display = "inline-block";

        notificationsCounterNumber++;
    }
    
    notificationsCounter.innerHTML = notificationsCounterNumber;

    notifications[index].addEventListener("mouseover", 
        () => {
            if (notifications[index].classList == "nova_notificacao") {
                notifications[index].classList.remove("nova_notificacao");

                notificationDots[index].style.display = "none";

                notificationsCounterNumber--;

                notificationsCounter.innerHTML = notificationsCounterNumber;
            }
        }
    )   
}

markAllButton.addEventListener("click",
    () => {
        notificationsCounter.innerHTML = 0;

        for (let index = 0; index < notifications.length; index++) {
            notifications[index].classList.remove("nova_notificacao");
            
            notificationDots[index].style.display = "none";
        }
    }
)