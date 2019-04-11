[...document.querySelectorAll('.slide_list li')].forEach(li => {
    li.onclick = function()
    {
        document.querySelector('.slide_list li.active').classList.remove("active");
        this.classList.add("active");
        //document.querySelector('.main_slider img').setAttribute("src", this.firstElementChild.getAttribute("src"))
        document.querySelector('.main_slider img').src = this.firstElementChild.src;
    }
});

[...document.querySelectorAll('.arrow')].forEach(arr => {
    arr.onclick = function()
    {
        //find active
        const activeLi = document.querySelector('.slide_list li.active');
        activeLi.classList.remove("active");

        let newActiveLi;
        if(this.classList.contains("arrow_left"))
            newActiveLi = activeLi.previousElementSibling || document.querySelector('.slide_list li:last-child');
        else
            newActiveLi = activeLi.nextElementSibling || document.querySelector('.slide_list li:first-child');

        newActiveLi.classList.add("active");
        document.querySelector('.main_slider img').src = newActiveLi.firstElementChild.src;

        //1ST WAY   
        // let src;
        // if(this.classList.contains("arrow_left"))
        // {
        //     if(activeLi.previousElementSibling !== null)
        //     {
        //         activeLi.previousElementSibling.classList.add("active");
        //         src = activeLi.previousElementSibling.firstElementChild.src;
        //     }
        //     else
        //     {
        //         const last = document.querySelector('.slide_list li:last-child');
        //         last.classList.add("active");
        //         src = last.firstElementChild.src;
        //     }
        // }
        // else
        // {
        //     if(activeLi.nextElementSibling !== null)
        //     {
        //         activeLi.nextElementSibling.classList.add("active");
        //         src = activeLi.nextElementSibling.firstElementChild.src;
        //     }
        //     else
        //     {
        //         const first = document.querySelector('.slide_list li:first-child');
        //         first.classList.add("active");
        //         src = first.firstElementChild.src;
        //     }
        // }

        // document.querySelector('.main_slider img').src = src;
    }
});
