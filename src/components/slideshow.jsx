import React, {Component} from 'react';
import update from 'immutability-helper';

class Slideshow extends Component {

    state = {
        currentImageHeight:1,
        currentImageWidth:1,
        screenWidth: window.innerWidth,
        style:{},
        content:[],
        slideIndex:0,
        first:true,
        interval:3000,
        speed:'0.6s',
        slides : [
            {
                slide:'./images/1.jpg',
                style:{opacity:'0'},
                className:"imageHolder"
            },
            {
                slide:'./images/2.jpg',
                style:{opacity:'0'},
                className:"imageHolder"
            },
            {
                slide:'./images/3.jpg',
                style:{opacity:'0'},
                className:"imageHolder"
            },
            {
                slide:'./images/4.jpg',
                style:{opacity:'0'},
                className:"imageHolder"
            }
        ]
    }

    constructor(props){
        super(props)
        this.image = React.createRef();
    }

    componentDidMount() {
        //To set new window.innerWidth when user resize window
        window.addEventListener("resize", this.updateDimensions);
        //Run initialization of slider
        this.setTimer();
    }

    //To set new window.innerWidth when user resize window
    updateDimensions=() => {
        var screenWidth = window.innerWidth;
        this.setState({screenWidth});
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

//Slider methods
    plusSlides(n){ //n actual slide
        this.moveSlide(this.state.slideIndex+n);
    }

    moveSlide(n){
        var i;
        var current,next;
        var moveSlideAnimClass={
            forCurrent:"",
            forNext:""
        };

        if(n>this.state.slideIndex) {
            if(n >= this.state.slides.length){n=0;}//if it's the last image+1
            moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
            moveSlideAnimClass.forNext="moveLeftNextSlide";
        }

        if(n!=this.state.slideIndex){
            next = n;
            current=this.state.slideIndex;
            for (i = 0; i < this.state.slides.length; i++) {
                this.setState({
                    slides: update(this.state.slides,{[i]:{style:{$set:{opacity:"0"}},className:{$set:"imageHolder"}}})
                })
            }
            this.setState({
                slides: update(this.state.slides,{[current]:{ className:{$set:`${this.state.slides[current].className}  ${moveSlideAnimClass.forCurrent}` }}}),
                slideIndex: n
            })
            this.setState({
                slides: update(this.state.slides,{[next]:{ className:{$set:`${this.state.slides[next].className} " ${moveSlideAnimClass.forNext}` }}}),
                first:false
            })
        }

    }
//Initial slide_show
    setTimer=()=>{
        var img = new Image(); // Get width and height of original image
        img.src = this.state.slides[0].slide;// assume every image have same size
        var getImageHeight=(currentImageHeight,currentImageWidth)=>{
            this.setState({currentImageHeight,currentImageWidth})
        }
        img.onload =function(){
            const currentImageHeight=this.height;
            const currentImageWidth=this.width;
            getImageHeight(currentImageHeight,currentImageWidth);
        }
        //set time between slide change
        var timer = setInterval(()=>{
            this.plusSlides(1);
        },this.state.interval)
    }


    render() {
        return (

            <div className="galleryContainer"  style={ {width:"100%",height:(this.state.screenWidth/this.state.currentImageWidth)*this.state.currentImageHeight,margin:0,padding:0}}>
                {this.state.slides ?
                    <div className="slideShowContainer" >
                        {
                            this.state.slides.map((slide) =>
                                <div key={slide.slide} className={`${slide.className}`}
                                     style={slide===this.state.slides[0] ? { opacity: 1,animationDuration:this.state.speed}  : { opacity: 0,animationDuration:this.state.speed }}>
                                    <img ref={this.image} src={slide.slide} />
                                </div>
                            )
                        }
                    </div>
                    : ''
                }
            </div>
        );
    }
}

export default Slideshow;