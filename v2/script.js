
const ovoAnimado=document.getElementById("ovoAnimado");

if(ovoAnimado){
    const frames=["assets/ovo-1.png","assets/ovo-2.png","assets/ovo-3.png","assets/ovo-4.png"];
    let frame=0;
    let animacao=null;

    frames.forEach(src=>{const img=new Image();img.src=src});

    ovoAnimado.addEventListener("mouseenter",()=>{
        if(animacao)return;
        animacao=setInterval(()=>{
            if(frame<frames.length-1){frame++;ovoAnimado.src=frames[frame]}
            else{clearInterval(animacao);animacao=null}
        },650);
    });

    ovoAnimado.addEventListener("mouseleave",()=>{
        clearInterval(animacao);
        animacao=null;
        frame=0;
        ovoAnimado.src=frames[0];
    });
}
