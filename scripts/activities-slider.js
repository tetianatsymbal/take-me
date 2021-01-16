class Slider{
    constructor(id){
        this.slider = $(id);
        this.btns = this.slider.find(".arrow__btn");
        this.sliderBox = this.slider.find(".activities");
        this.slides = this.sliderBox.children(".gallery");
        this.slidesQty = this.slides.length;
        this.sliderWidth = this.sliderBox.width();
        this.slidesLength = this.sliderWidth * this.slidesQty;
        this.init();
        this.createEvents();
        console.log(this.slidesLength);
    }
    
    init(){
        this.sliderBox.find(".activities:last-child").prependTo(this.sliderBox);
        this.sliderBox.css({width: this.slidesLength, marginLeft: - this.sliderWidth});
    }
    move(event){
        let currentBtn = $(event.currentTarget),
            step = currentBtn.data("step")
            ;
        this.sliderBox.animate({left: this.sliderWidth * step}, 200, () => {
                if(step < 0){
                    this.sliderBox.find(".activities__gallery:last-child").prependTo(this.sliderBox);
                }
                else{
                    this.sliderBox.find(".activities__gallery:first-child").appendTo(this.sliderBox);
                }
            this.sliderBox.css("left", "0");
        });
    }
    createEvents(){
        this.btns.click(this.move.bind(this));
    }
}
let slider1 = new Slider("#slider");