const animations = {
    bounce: {
      "@keyframes bounce": {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-20px)",
        },
      },
      animation: "bounce 1s",
    },
    rotate: {
      "@keyframes rotate": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      animation: "rotate 2s linear",
    },
    scale: {
      "@keyframes scale": {
        "0%": { transform: "scale(0.1)" },
        "100%": { transform: "scale(1)" },
      },
      animation: "scale 1s",
    },
    fade: {
      "@keyframes fade": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      animation: "fade 1s",
    },
    slideLeft: {
      "@keyframes slideLeft": {
        "0%": { transform: "translateX(50px)" },
        "100%": { transform: "translateX(0px)" },
      },
      animation: "slideLeft 1s",
    },
    slideRight: {
      "@keyframes slideRight": {
        "0%": { transform: "translateX(-50px)" },
        "100%": { transform: "translateX(0px)" },
      },
      animation: "slideRight 1s",
    },
    pulsate: {
      "@keyframes pulsate": {
        "0%, 100%": { transform: "scale(1)", opacity: 1 },
        "50%": { transform: "scale(1.2)", opacity: 0.5 },
      },
      animation: "pulsate 1.5s",
    },
    wobble: {
      "@keyframes wobble": {
        "0%": { transform: "rotate(-3deg)" },
        "25%": { transform: "rotate(3deg)" },
        "50%": { transform: "rotate(-3deg)" },
        "100%": { transform: "rotate(3deg)" },
      },
      animation: "wobble 0.5s infinite",
    },
    flip: {
      "@keyframes flip": {
        "0%": { transform: "rotateY(0deg)" },
        "100%": { transform: "rotateY(360deg)" },
      },
      animation: "flip 1.5s",
    },
    swing: {
      "@keyframes swing": {
        "0%": { transform: "rotate(0deg)" },
        "50%": { transform: "rotate(15deg)" },
        "100%": { transform: "rotate(-15deg)" },
      },
      animation: "swing 1s",
    },
    shake: {
      "@keyframes shake": {
        "0%, 100%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-5px)" },
        "75%": { transform: "translateX(5px)" },
      },
      animation: "shake 0.5s",
    },
    slideDown: {
      "@keyframes slideDown": {
        "0%": { transform: "translateY(-50px)" },
        "100%": { transform: "translateY(0px)" },
      },
      animation: "slideDown 1s",
    },
    zoomIn: {
      "@keyframes zoomIn": {
        "0%": { transform: "scale(0.5)", opacity: 0 },
        "100%": { transform: "scale(1)", opacity: 1 },
      },
      animation: "zoomIn 1s",
    },
    zoomOut: {
      "@keyframes zoomOut": {
        "0%": { transform: "scale(1)", opacity: 1 },
        "100%": { transform: "scale(0.5)", opacity: 0 },
      },
      animation: "zoomOut 1s",
    },
    flash: {
      "@keyframes flash": {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
      animation: "flash 0.8s",
    },
    jelly: {
      "@keyframes jelly": {
        "0%, 100%": { transform: "scale(1)" },
        "25%": { transform: "scale(1.25, 0.75)" },
        "50%": { transform: "scale(0.75, 1.25)" },
      },
      animation: "jelly 1s",
    },
    heartbeat: {
      "@keyframes heartbeat": {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.3)" },
      },
      animation: "heartbeat 1.2s",
    },
    spinIn: {
      "@keyframes spinIn": {
        "0%": { transform: "rotate(-360deg)", opacity: 0 },
        "100%": { transform: "rotate(0deg)", opacity: 1 },
      },
      animation: "spinIn 1s",
    },
    spinOut: {
      "@keyframes spinOut": {
        "0%": { transform: "rotate(0deg)", opacity: 1 },
        "100%": { transform: "rotate(360deg)", opacity: 0 },
      },
      animation: "spinOut 1s",
    },
    drift: {
      "@keyframes drift": {
        "0%, 100%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(20px)" },
      },
      animation: "drift 2s infinite",
    },
    ripple: {
      "@keyframes ripple": {
        "0%": { transform: "scale(0.8)", opacity: 0.8 },
        "100%": { transform: "scale(2)", opacity: 0 },
      },
      animation: "ripple 1.5s infinite",
    },
    glitch: {
      "@keyframes glitch": {
        "0%, 100%": { transform: "translate(0, 0)" },
        "33%": { transform: "translate(-2px, 2px)" },
        "66%": { transform: "translate(2px, -2px)" },
      },
      animation: "glitch 0.5s infinite",
    },
    blur: {
      "@keyframes blur": {
        "0%": { filter: "blur(5px)", opacity: 0 },
        "100%": { filter: "blur(0px)", opacity: 1 },
      },
      animation: "blur 1s",
    },
  };
  
  export default animations;