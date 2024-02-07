var tline = gsap.timeline();

tline
    .add("tog")
        .from(".hero-con",{
            scale:2,
            // opacity:0,
            duration:2,
        })
        .from(".hero-img",{
            scale:2,
            // opacity:0,
            duration:2,

        },"tog")

        .from(".y2k",{
            y:-700,
            duration:2,

        },"tog")

        .from(".next-con",{
            y:-400,
            duration:2,

        },"tog")

        .from(".vector-art",{
            scale:3,
            duration:2,

        },"tog")

        .from(".bin-40-con",{
            y:400,
            duration:2,

        },"tog")

        .from(".n-down,.n-up",{
            x:-400,
            duration:2,

        },"tog")