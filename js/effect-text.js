
let img = document.querySelector(".img");

document.addEventListener("mousemove", function(e){

    if(e.x > img.getBoundingClientRect().x
    && e.x < img.getBoundingClientRect().x + img.getBoundingClientRect().width
    && e.y > img.getBoundingClientRect().y
    && e.y < img.getBoundingClientRect().y + img.getBoundingClientRect().height){
       
        if(e.x > img.getBoundingClientRect().x
        && e.x < img.getBoundingClientRect().x + (img.getBoundingClientRect().width/2)){
            let valueXLeft = (img.getBoundingClientRect().width/2 - (e.x - img.getBoundingClientRect().x))/10;
            TweenMax.to(img, 1, {rotationY: -1 * valueXLeft})
        }
        
        if(e.x > img.getBoundingClientRect().x + (img.getBoundingClientRect().width/2)
        && e.x < img.getBoundingClientRect().x + (img.getBoundingClientRect().width)){
            let valueXRight = (e.x - img.getBoundingClientRect().x - img.getBoundingClientRect().width/2)/10;
            TweenMax.to(img, 1, {rotationY:  valueXRight})

        }

        if(e.y > img.getBoundingClientRect().y
        && e.y < img.getBoundingClientRect().y + (img.getBoundingClientRect().height/2)){
            let valueYTop = (img.getBoundingClientRect().height/2 - (e.y - img.getBoundingClientRect().y))/10;
            TweenMax.to(img, 1, {rotationX: valueYTop})
        }
        
        if(e.y > img.getBoundingClientRect().y + (img.getBoundingClientRect().height/2)
        && e.y < img.getBoundingClientRect().y + (img.getBoundingClientRect().height)){
            let valueYBottom = (e.y - img.getBoundingClientRect().y - img.getBoundingClientRect().height/2)/10;
            TweenMax.to(img, 1, {rotationX: -1 * valueYBottom})

        } 
    
    }
    else{
        TweenMax.to(img, 2, {rotationX: 0})
        TweenMax.to(img, 2, {rotationY: 0})

    }
})